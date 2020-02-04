import api from './api'

export default {
  artwork: ({ id, imageWidth }) => {
    imageWidth = (
      typeof imageWidth == 'undefined' || imageWidth == null
    ) ? 512 : imageWidth
    return `${api.baseURL}/release/${id}/cover?image_width=${imageWidth}&fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartwork-fallback.jpg`
  }
}
