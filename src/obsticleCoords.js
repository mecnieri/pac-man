export const obsticlesCoords = [
  {
    x: 0,
    y: 0,
    w: 800,
    h: 8,
  },
  {
    x: 0,
    y: 0,
    w: 8,
    h: 800,
  },
  {
    x: 0,
    y: 792,
    w: 800,
    h: 10,
  },
  {
    x: 792,
    y: 0,
    w: 10,
    h: 800,
  },

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
    x: 29.615 * x - 6,
    y: 29.615 * y - 6,
    w: 29.615 * w + 12,
    h: 29.615 * h + 12,
  }
}
