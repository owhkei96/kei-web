export function useDownload(url, filename = '') {
  if (!url) return
  const a = document.createElement('a')
  a.href = url
  a.download = filename // optional: specify a filename
  a.target = '_blank' // helps in some browsers
  document.body.appendChild(a) // append needed for Firefox
  a.click()
  document.body.removeChild(a)
}
