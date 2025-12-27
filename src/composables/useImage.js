const images = import.meta.glob('/src/images/*.svg', {
  eager: true,
  import: 'default',
})

export function useImage(key) {
  return images[`/src/images/${key}.svg`]
}
