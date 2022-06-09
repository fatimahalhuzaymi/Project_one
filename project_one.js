const readlineSync = require('readline-sync')

let words = ['daddy', 'bubbly' , 'button','car']

const getRandomWord=(word)=>{
    let randomIndex=Math.floor((Math.random()*words.length))
    return words [randomIndex]
}

const createHiddenWord=(word)=>{
    let hiddenword = words.split('').map(char=>{return '_'})
    return hiddenword
}


//const createHiddenWord2=(word)=>{
//let hiddenword = []
//for(let i =0; i< words.length; i++){
  //  hiddenword.push(-_-)

//}
    //return hiddenword
//}
const isLetterInword=()=>{
return word.includes(letter)
}
const replaceMatches=(letter,randomWord,hiddenword)=>{
    for(let i=0;i<randomWord.length;i++){
        let crrChar= randomWord[i]
        if(crrChar === letter){
            hiddenword[i]==letter;
        }
    }
    return hiddenword ;
}

//let result =replaceMatches('a', 'car',['_','_','_'])
//let result2 =replaceMatches('z', 'car',result)
//let result3 =replaceMatches('r', 'car',result2)
//let result4 =replaceMatches('c', 'car',result3)

//console.log(result4);
let result = replaceMatches()
const startGame = (letter,word)=>{
let randomWord = getRandomWord(words);
let hiddenword=createHiddenWord2(randomWord)
let tries=6;
while(tries>1 && hiddenword.join('')!==randomWord){
console.log('=============')
console.log(`=>Trise:${tries}`)
console.log(randomWord)
console.log('=>',hiddenword.join(''));
const answer = readlineSync.question('Type a letter:')


if(isLetterInword(answer,randomWord)){
   let hiddenword= replaceMatches(answer,randomWord,hiddenword); 
//console.log('wooow!! that letter is in the word');
}else {
    tries--;
console.log ('Noop! that letter is Not in the word ');
}
}
}

startGame()