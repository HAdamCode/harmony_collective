#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { HarmonyFormsStack } from '../lib/harmony-forms-stack.js'

const app = new cdk.App()

const recipientEmail = app.node.tryGetContext('recipientEmail') ?? 'hunter.j.adam@gmail.com'
const senderEmail = app.node.tryGetContext('senderEmail') ?? recipientEmail
const allowedOrigins = app.node.tryGetContext('allowedOrigins') as string[] | undefined

new HarmonyFormsStack(app, 'HarmonyFormsStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION ?? 'us-west-2',
  },
  recipientEmail,
  senderEmail,
  allowedOrigins,
})

