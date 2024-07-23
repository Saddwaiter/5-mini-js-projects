const qoutes = ['one', 'two', 'three', 'four'];

const usedIndexes = new Set()
const quoteElement = document.getElementById('qoute')

function generateQoute() {

    if(usedIndexes.size == qoutes.length){
        usedIndexes.clear()
    }
    
    while (true) {
        const randomIdx = Math.floor(Math.random() * qoutes.length)
        if (usedIndexes.has(randomIdx)) {
            continue
        }

        const qoute = qoutes[randomIdx]
        quoteElement.innerHTML = qoute;
        usedIndexes.add(randomIdx)
        break
    }
}