import * as path from 'node:path'
import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { aws_lambda_nodejs as lambdaNode, aws_lambda as lambda, aws_iam as iam, aws_apigateway as apigateway } from 'aws-cdk-lib'

export interface HarmonyFormsStackProps extends cdk.StackProps {
  recipientEmail: string
  senderEmail?: string
  allowedOrigins?: string[]
}

export class HarmonyFormsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: HarmonyFormsStackProps) {
    super(scope, id, props)

    if (!props.recipientEmail) {
      throw new Error('recipientEmail context value is required')
    }

    const allowedOrigins = props.allowedOrigins?.length ? props.allowedOrigins : ['*']

    const formHandler = new lambdaNode.NodejsFunction(this, 'SendFormEmailFunction', {
      entry: path.join(__dirname, '../lambda/send-form-email.ts'),
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_20_X,
      bundling: {
        target: 'es2022',
        format: lambdaNode.OutputFormat.ESM,
      },
      environment: {
        RECIPIENT_EMAIL: props.recipientEmail,
        SENDER_EMAIL: props.senderEmail ?? props.recipientEmail,
        ALLOWED_ORIGINS: allowedOrigins.join(','),
      },
    })

    formHandler.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ses:SendEmail', 'ses:SendRawEmail'],
        resources: ['*'],
      }),
    )

    const api = new apigateway.RestApi(this, 'HarmonyFormsApi', {
      restApiName: 'HarmonyFormsApi',
      defaultCorsPreflightOptions: {
        allowHeaders: apigateway.Cors.DEFAULT_HEADERS,
        allowMethods: ['OPTIONS', 'POST'],
        allowOrigins: allowedOrigins.includes('*') ? apigateway.Cors.ALL_ORIGINS : allowedOrigins,
      },
      deployOptions: {
        stageName: 'prod',
      },
    })

    const formsResource = api.root.addResource('forms')
    const submitResource = formsResource.addResource('submit')
    submitResource.addMethod('POST', new apigateway.LambdaIntegration(formHandler), {
      authorizationType: apigateway.AuthorizationType.NONE,
    })

    new cdk.CfnOutput(this, 'FormApiUrl', {
      value: `${api.url}forms/submit`,
    })
  }
}

