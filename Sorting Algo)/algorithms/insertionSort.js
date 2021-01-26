import { sticks } from "../SortingAlg_Script.js"
import { animationHelper } from "./animationsHelper.js"

export const insertionSort = async () => {
    let newArr = []
    sticks.forEach((stick) => {
        newArr.push(stick.style.height)
    })
    let animations = []
    let length = sticks.length
    for (let i = 1; i < length; i++) {
        let key = newArr[i]
        let j = i - 1
        while (j >= 0 && newArr[j] > key) {
            newArr[j + 1] = newArr[j]
            animations.push({ currentIndex: j, nextIndex: j + 1, didSwap: true })
            j = j - 1
        }
        newArr[j + 1] = key
        animations.push({ currentIndex: i, nextIndex: i + 1, didSwap: false })
    }
    animationHelper(animations, 1)
}
