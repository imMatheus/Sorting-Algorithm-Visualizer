import { sticks } from '../SortingAlg_Script.js'
let newArr = []
sticks.forEach((stick) => {
    newArr.push(stick.style.height)
})
var x = heapSort(newArr)
console.log(x)

function heapSort(array) {
    let size = array.length

    // build heapSort (rearrange array)
    for (let i = Math.floor(size / 2 - 1); i >= 0; i--) heapify(array, size, i)

    // one by one extract an element from heapSort
    for (let i = size - 1; i >= 0; i--) {
        // move current root to end
        let temp = array[0]
        array[0] = array[i]
        array[i] = temp

        // call max heapify on the reduced heapSort
        heapify(array, i, 0)
    }
}

// to heapify a subtree rooted with node i which is an index in array[]
function heapify(array, size, i) {
    let max = i // initialize max as root
    let left = 2 * i + 1
    let right = 2 * i + 2

    // if left child is larger than root
    if (left < size && array[left] > array[max]) max = left

    // if right child is larger than max
    if (right < size && array[right] > array[max]) max = right

    // if max is not root
    if (max != i) {
        // swap
        let temp = array[i]
        array[i] = array[max]
        array[max] = temp

        // recursively heapify the affected sub-tree
        heapify(array, size, max)
    }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
heapSort(array)
alert(array)
