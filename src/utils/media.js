export const formatYouTubeEmbed = (url) => {
  if (!url) return ''
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.hostname !== 'www.youtube-nocookie.com') {
        parsed.hostname = 'www.youtube-nocookie.com'
      }
      parsed.searchParams.set('rel', '0')
      parsed.searchParams.set('modestbranding', '1')
      parsed.searchParams.set('showinfo', '0')
      parsed.searchParams.set('controls', '1')
      parsed.searchParams.set('iv_load_policy', '3')
    }
    return parsed.toString()
  } catch {
    return url
  }
}
