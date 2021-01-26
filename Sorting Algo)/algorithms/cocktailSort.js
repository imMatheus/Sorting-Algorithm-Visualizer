import { sticks } from "../SortingAlg_Script.js"
import { animationHelper } from "./animationsHelper.js"

export const cocktailShakerSort = async () => {
    let newArr = []
    sticks.forEach((stick) => {
        newArr.push(stick.style.height)
    })
    let animations = []

    let start = 0,
        end = newArr.length,
        swapped = true

    while (swapped) {
        swapped = false
        for (let i = start; i < end - 1; i++) {
            if (newArr[i] > newArr[i + 1]) {
                animations.push({ currentIndex: i, nextIndex: i + 1, didSwap: true })
                let temp = newArr[i]
                newArr[i] = newArr[i + 1]
                newArr[i + 1] = temp
                swapped = true
            } else {
                animations.push({ currentIndex: i, nextIndex: i + 1, didSwap: false })
            }
        }

        end--
        if (!swapped) break

        swapped = false
        for (let i = end - 1; i > start; i--) {
            if (newArr[i - 1] > newArr[i]) {
                animations.push({ currentIndex: i, nextIndex: i - 1, didSwap: true })
                let temp = newArr[i]
                newArr[i] = newArr[i - 1]
                newArr[i - 1] = temp
                swapped = true
            } else {
                animations.push({ currentIndex: i, nextIndex: i - 1, didSwap: false })
            }
        }
        start++
    }
    animationHelper(animations, 0)
}
