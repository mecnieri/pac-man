export const obsticlesCoords = [
  createObsticle(0, 0, 27, 0),
  createObsticle(0, 0, 0, 27),
  createObsticle(27, 0, 0, 27),
  createObsticle(0, 26.9, 27, 0),
  createObsticle(2, 2, 2, 2),
  createObsticle(6, 2, 2, 2),
  createObsticle(10, 2, 2, 2),
  createObsticle(2, 6, 2, 2),
  createObsticle(2, 10, 2, 2),
  createObsticle(6, 6, 2, 2),
  createObsticle(10, 6, 2, 2),
  createObsticle(23, 7, 2, 6),
  createObsticle(14, 0, 1, 2),
  createObsticle(17, 2, 1, 2),
  createObsticle(14, 4, 2, 5),
  createObsticle(12, 16, 5, 2),
]

function createObsticle(x, y, w, h) {
  return {
    left: 29.615 * x - 6,
    top: 29.615 * y - 6,
    right: 29.615 * x - 6 + 29.615 * w + 12,
    bottom: 29.615 * y - 6 + 29.615 * h + 12,
    w: 29.615 * w + 12,
    h: 29.615 * h + 12,
  }
}
