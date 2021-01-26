import { sticks, burnoutTime, swapArr, sleep, color1, color2, color4 } from '../SortingAlg_Script.js'

export let isRunning = {
    running: false,
}

export const animationHelper = async (animations, j) => {
    isRunning.running = true
    for (let i = 0; i < animations.length - j; i++) {
        helper(animations, i)
        await sleep(burnoutTime)
    }

    sticks[animations[animations.length - 1 - j].currentIndex].style.backgroundColor = color2
    sticks[animations[animations.length - 1 - j].nextIndex].style.backgroundColor = color2

    for (let i = 0; i < sticks.length; i++) {
        sticks[i].style.backgroundColor = '#6eff34'
        await sleep(1300 / sticks.length)
    }
    isRunning.running = false
}

const helper = async (ani, index) => {
    sticks.forEach((stick) => {
        stick.style.backgroundColor = color2
    })
    if (ani[index].didSwap === true) {
        sticks[ani[index].currentIndex].style.backgroundColor = color4
        sticks[ani[index].nextIndex].style.backgroundColor = color4
        swapArr(sticks, ani[index].currentIndex, ani[index].nextIndex)
    } else {
        sticks[ani[index].currentIndex].style.backgroundColor = color1
        sticks[ani[index].nextIndex].style.backgroundColor = color1
    }
}
