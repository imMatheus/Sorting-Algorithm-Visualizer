import { cocktailShakerSort } from './algorithms/cocktailSort.js'
import { bubbleSort } from './algorithms/bubbelSort.js'
import { selectioSort } from './algorithms/selectionSort.js'
import { insertionSort } from './algorithms/insertionSort.js'
import { isRunning } from './algorithms/animationsHelper.js'

const mainArea = document.getElementById('mainArea')
const colorPallets = [
    ['#2E2E3A', '#F34213', '#D2FDFF', '#BEEE62'], //Orange/Light dark
]
let minHeight = 13,
    maxHeight = 94,
    sticksToBeMade = document.getElementById('sticksRange').value,
    colorP = randomIntFromInterval(0, 0)

getSticks()
document.getElementById('burnOutRangeLabel').innerText = 'Speed: ' + document.getElementById('burnOutRange').value + 'ms'
document.getElementById('sticksRangeLabel').innerText = 'Sticks: ' + document.getElementById('sticksRange').value
//sets the color by using 'colorPalltes'
for (let i = 0; i < 5; i++) {
    document.documentElement.style.setProperty('--color-' + (i + 1), colorPallets[colorP][i])
}
export var color1 = document.documentElement.style.getPropertyValue('--color-1')
export var color2 = document.documentElement.style.getPropertyValue('--color-2')
export var color3 = document.documentElement.style.getPropertyValue('--color-3')
export var color4 = document.documentElement.style.getPropertyValue('--color-4')
export let burnoutTime = document.getElementById('burnOutRange').value
export var sticks

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getSticks() {
    mainArea.innerHTML = ''
    for (let i = 0; i < sticksToBeMade; i++) {
        mainArea.innerHTML += `<div class="stick"></div>`
    }
    sticks = changeHeight()
}

function getStickWidth() {
    return 67 / sticksToBeMade
}

function changeHeight() {
    const sticks = document.querySelectorAll('.stick')
    sticks.forEach((stick) => {
        stick.style.height = randomIntFromInterval(minHeight, maxHeight) + '%'
        stick.style.width = getStickWidth() + '%'
        stick.innerText = stick.clientHeight
        stick.style.backgroundColor = color2
    })
    return sticks
}

const errorMsg = () => {
    const errorBox = document.getElementById('error-msg')
    if ((errorBox.style.transform = 'translat(0%,0%)' === true)) {
        return
    } else {
        errorBox.style.transform = 'translate(0%,0%)'
        setTimeout(() => {
            errorBox.style.transform = 'translate(0%,100%)'
        }, 3500)
    }
}

//a universal function to swap the values of two indexes of an array
//and there inner text
export function swapArr(arr, index1, index2) {
    let temp = arr[index1].style.height
    arr[index1].style.height = arr[index2].style.height
    arr[index2].style.height = temp
    let textTemp = arr[index1].innerText
    arr[index1].innerText = arr[index2].innerText
    arr[index2].innerText = textTemp
}

//calling the the sorting algos when pressed
document.getElementById('cocktail_ID').addEventListener('click', () => {
    if (isRunning.running) {
        errorMsg()
        return
    }
    cocktailShakerSort()
})

document.getElementById('bubbel_ID').addEventListener('click', async () => {
    if (isRunning.running) {
        errorMsg()
        return
    }
    await bubbleSort()
})

document.getElementById('selection_ID').addEventListener('click', () => {
    if (isRunning.running) {
        errorMsg()
        return
    }
    selectioSort()
})

document.getElementById('insertion_ID').addEventListener('click', () => {
    if (isRunning.running) {
        errorMsg()
        return
    }
    insertionSort()
})
//first to get random sticks when you pres, the 'New Array' button
document.getElementById('changeHeight_ID').addEventListener('click', () => {
    if (isRunning.running) {
        errorMsg()
        return
    }
    changeHeight()
})
//change burnoutTime when the range is updated
document.getElementById('burnOutRange').addEventListener('input', () => {
    burnoutTime = document.getElementById('burnOutRange').value
    document.getElementById('burnOutRangeLabel').innerText = 'Speed: ' + document.getElementById('burnOutRange').value + 'ms'
})
//gets a new array of sticks every time the range is updated

document.getElementById('sticksRange').addEventListener('input', () => {
    if (isRunning.running) {
        errorMsg()
        return
    }
    sticksToBeMade = document.getElementById('sticksRange').value
    getSticks()
    document.getElementById('sticksRangeLabel').innerText = 'Sticks: ' + document.getElementById('sticksRange').value
})

//too change the vertical aling of the sticks
document.getElementById('sticks_To_Bottom').addEventListener('click', () => {
    mainArea.style.alignItems = 'flex-end'
})

document.getElementById('sticks_To_Top').addEventListener('click', () => {
    mainArea.style.alignItems = 'flex-start'
})

document.getElementById('sticks_To_Center').addEventListener('click', () => {
    mainArea.style.alignItems = 'center'
})
mainArea.addEventListener('click', () => {
    console.log(mergeCalled())
})

//this function is just.... aaaa.... the best
//life saver
//dont get why it works but it just does
//aaaahhhhh :)
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
