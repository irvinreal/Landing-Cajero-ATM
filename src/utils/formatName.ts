export default function formatName(name: string): string {
  if (!name) {
    return ''
  }
  return name
    .split(' ')
    .map((word) => {
      if (word) {
        return `${word.charAt(0).toUpperCase()}${word.substring(1)}`
      }
      return ''
    })
    .join(' ')
}
