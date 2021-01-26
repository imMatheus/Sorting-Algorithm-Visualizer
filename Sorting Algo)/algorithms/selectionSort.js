import { sticks, burnoutTime, swapArr, sleep, color1, color2, color4 } from "../SortingAlg_Script.js"
import { isRunning } from "./animationsHelper.js"

export const selectioSort = async () => {
    isRunning.running = true
    let newArr = []
    sticks.forEach((stick) => {
        newArr.push(stick.style.height)
    })
    let animations = []
    let n = sticks.length

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let smallestAnimation = []
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (newArr[j] < newArr[min]) {
                min = j
                smallestAnimation.push({ currentIndex: j, didSwap: true, min: j })
            } else {
                smallestAnimation.push({ currentIndex: j, didSwap: false, min: min })
            }
        }
        // if (min != i) {
        // Swapping the elements
        animations.push(smallestAnimation)
        let temp = newArr[i]
        newArr[i] = newArr[min]
        newArr[min] = temp
        // }
    }
    for (let i = 0; i < animations.length - 1; i++) {
        let c = animations[i]
        let n = animations[i].length
        for (let j = 0; j < n; j++) {
            sticks.forEach((stick) => {
                stick.style.backgroundColor = color2
            })
            sticks[c[j].currentIndex].style.backgroundColor = color4
            sticks[c[j].min].style.backgroundColor = color1
            await sleep(burnoutTime)
        }
        swapArr(sticks, i, animations[i][animations[i].length - 1].min)
    }

    let x = animations[animations.length - 2]
    sticks[x[0].currentIndex].style.backgroundColor = color2
    sticks[x[0].min].style.backgroundColor = color2

    for (let i = 0; i < sticks.length; i++) {
        sticks[i].style.backgroundColor = "#6eff34"
        await sleep(1500 / sticks.length)
    }

    isRunning.running = false
}
