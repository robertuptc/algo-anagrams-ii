exports.anagramsFor = function(word, listOfWords) {
    
    let answer = []
    //sorting the word parameter alphabetically
    sortWord = word.split('').sort().join('')

    //sorting each word in listOfWords alphabetically
    sortListOfWords = listOfWords.map(elem => elem.split('').sort().join(''))

    //iterating through the sortListOfWords and check if each element == sortWord
    for (let i = 0; i < sortListOfWords.length; i++) {
        if (sortListOfWords[i] === sortWord) {
            answer.push(listOfWords[i])
        }
    } return answer

};




