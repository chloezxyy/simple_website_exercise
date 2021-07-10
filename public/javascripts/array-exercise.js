/* eslint-disable */

/* TODO: create a doubleItem function that accepts an array of number and 
returns an array of equal length but with all of its item double  */
function doubleItem(arr) {
  const doubleArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i] * 2;
    doubleArr.push(item);
  }
  return doubleArr;
}
/* TODO: create an invertSign function that accepts an array of number and 
returns an array of equal length but with all of its item sign inverted */
function invertSign(arr) {
  const invertArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i] * -1;
    invertArr.push(item);
  }
  return invertArr;
}
/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: assign idNumber of all participants to idNumbers
  const idNumbers = [];
  idNumbers.push(participants.map((participant) => `${participant.idNumber}`));
  console.log(idNumbers); // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];
  // TODO: get the results of multiplication of all the numbers using reduce method
  const resultReduce = numbers.reduce((prevRes, item) => prevRes * item, 0);
  // TODO: get the results of multiplication of all the numbers using for...of loop
  let total = 0;
  for (const element of numbers) {
    total *= element;
  }
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get all the positive numbers (above or equal to 0)
  const positiveNum = numbers.filter((num) => num >= 0);
  // TODO: get all the odd numbers
  const oddNum = numbers.filter((num) => num % 2 !== 0);
  // TODO: get all the numbers that is larger before the number before it
  // (exclude first number)
  const largerNum = numbers.filter((val, i, arr) => {
    if (i === 0) {
      return false;
    }
    return arr[i] > arr[i - 1];
  });

  /*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

  {
    const participants = [
      { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
      { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
      { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
      { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
    ];

    // TODO: get the names for all participants
    const getNames = participants.map((participant) => `${participant.name}`);
    // TODO: get the id numbers for female participants only
    const getFemaleId = participants
      .filter((participants) => participants.gender === 'female')
      .map((participants) => `${participants.idNumber}`);
    console.log(getFemaleId);
  }
}
