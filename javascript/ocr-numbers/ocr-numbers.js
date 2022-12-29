//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUMBERS_IN_ARRAY =
  [
    { text: '_   || |  ||_|', 'number': '10' },
    { text: '_ |_||_|', 'number': '8' },
    { text: '_ | ||_|', 'number': '0' },
    { text: '_ |_| _|', 'number': '9' },
    { text: '_  _| _|', 'number': '3' },
    { text: '_ |_ |_|', 'number': '6' },
    { text: '_ |_  _|', 'number': '5' },
    { text: '|_|  |', 'number': '4' },
    { text: '_   |  |', 'number': '7' },
    { text: '_  _||_', 'number': '2' },
    { text: '|  |', 'number': '1' },
  ];
const SIZE_OF_SINGLE_NUMBER = 3;
const SIZE_OF_A_COLUMN = 4;


export const convert = (numbers) => {
  let reachedNumbers = '';
  let breakedNumbers = numbers.split('\n');
  if (breakedNumbers.length > SIZE_OF_A_COLUMN) {
    let quantityOfColumns = breakedNumbers.length / SIZE_OF_A_COLUMN;
    let tempArray = [];
    let grower = 0;
    for(let i = 0; i < quantityOfColumns; i++){
      grower = i * SIZE_OF_A_COLUMN;
      tempArray = [breakedNumbers[0+grower],breakedNumbers[1+grower],breakedNumbers[2+grower],breakedNumbers[3+grower]]

      reachedNumbers += recognizeNumbersAndReturn(tempArray,false) + ','
    }
    reachedNumbers = reachedNumbers.slice(0,-1)
  } else {
    reachedNumbers = recognizeNumbersAndReturn(numbers);
  }

  return reachedNumbers;
};

function recognizeNumbersAndReturn(numbers,haveLineBreak = true) {
  let result = '';
  let breakedNumbers = numbers;
  if(haveLineBreak){
    breakedNumbers = numbers.split('\n');
  }
  let numbersWithoutWhiteSpace = breakedNumbers.slice(0, 3)
  //console.log(numbers)
  //console.log(numbersWithoutWhiteSpace)
  let quantityOfNumbers = numbersWithoutWhiteSpace[0].length / SIZE_OF_SINGLE_NUMBER;
  let actualNumber = '';
  let hasFoundedNumber = false;
  // Faz um for com a quantidade de números obtidos
  for (let i = 0; i < quantityOfNumbers; i++) {
    hasFoundedNumber = false;
    // Pega os 3 arrays dos números sem o espaço em branco e vai pegando os números
    numbersWithoutWhiteSpace.forEach((element, index) => {
      actualNumber += numbersWithoutWhiteSpace[index].slice((i*3),(i*3+3),'')
    })
    for(let j = 0; j < NUMBERS_IN_ARRAY.length;j++){
      if(NUMBERS_IN_ARRAY[j].text === actualNumber.trim()){
        result += NUMBERS_IN_ARRAY[j].number;
        hasFoundedNumber = true;
        break;
      }
    }
    if(!hasFoundedNumber){
      result += '?';
    }
    actualNumber = '';
  }
  return result;
}



