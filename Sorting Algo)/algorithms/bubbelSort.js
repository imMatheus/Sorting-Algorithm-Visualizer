import { sticks } from "../SortingAlg_Script.js"
import { animationHelper } from "./animationsHelper.js"

export let bubbleSort = async () => {
    let end = sticks.length - 1
    let newArr = []
    sticks.forEach((stick) => {
        newArr.push(stick.style.height)
    })
    let animations = []
    let swapped = true
    do {
        swapped = false
        for (let j = 0; j < end; j++) {
            if (newArr[j] > newArr[j + 1]) {
                animations.push({ currentIndex: j, nextIndex: j + 1, didSwap: true })
                let temp = newArr[j]
                newArr[j] = newArr[j + 1]
                newArr[j + 1] = temp
                swapped = true
            } else {
                animations.push({ currentIndex: j, nextIndex: j + 1, didSwap: false })
            }
        }
        end--
    } while (swapped)
    animationHelper(animations, 0)
}
