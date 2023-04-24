export const ghostColors = [0xea82e5, 0xd03e19, 0x46bfee, 0xdb851c]
export const directions = [
    'ArrowRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowUp',
]
export const changeDirection = () => directions[Math.floor(Math.random() * 4)]
