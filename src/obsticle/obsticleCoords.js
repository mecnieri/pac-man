export const obsticlesCoords = [
  createObsticle(0, 0, 27, 0),
  createObsticle(0, 0, 0, 30),
  createObsticle(27, 0, 0, 30),
  createObsticle(0, 29.9, 27, 0),

  createObsticle(2, 2, 3, 2),
  createObsticle(7, 2, 4, 2),
  createObsticle(13, 0, 1, 4),
  createObsticle(16, 2, 4, 2),
  createObsticle(22, 2, 3, 2),
  createObsticle(2, 6, 3, 1),
  createObsticle(7, 6, 1, 7),
  createObsticle(8, 9, 3, 1),
  createObsticle(10, 6, 7, 1),
  createObsticle(13, 7, 1, 3),
  createObsticle(19, 6, 1, 7),
  createObsticle(16, 9, 3, 1),
  createObsticle(22, 6, 3, 1),
  createObsticle(0, 9, 5, 4),
  createObsticle(22, 9, 5, 4),
  createObsticle(10, 12, 7, 3),
  createObsticle(0, 15, 5, 4),
  createObsticle(7, 15, 1, 4),
  createObsticle(10, 17, 7, 1),
  createObsticle(13, 18, 1, 3),
  createObsticle(19, 15, 1, 4),





  // createObsticle(23, 7, 2, 6),
  // createObsticle(12, 16, 5, 2),
  // createObsticle(20, 21, 5, 3),
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
