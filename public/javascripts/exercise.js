let x;
x = 100;

let y = true;
y = false;

const myself = {
  name: 'hurwur',
  age: 23,
  lastName: 'hiak'
};

function secsInWeek() {
  return 7 * 24 * 60 * 60;
}

function numOfSecondsDays(days) {
  return days * 7 * 24 * 60 * 60;
}

function period(numOfPeriod, periodUnit = 'day') {
  // period = day or week
  if (periodUnit === 'day') {
    // return num of secs in period
    return numOfSecondsDays(numOfPeriod);
  } else if (periodUnit === 'week') {
    return numOfSecondsDays(numOfPeriod * 7);
    // using recursion
    // return period(period*7, 'day');
  }
  return 0;
}

const getRandomInt = (min, max) => {
  const minValue = Math.ceil(min); // math.cell smallest closest int
  const maxValue = Math.floor(max); // math.floor returns largest int
  // math.random returns range of 0 to less than 1
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

function compute(operation, a, b) {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'minus') {
    return a - b;
  } else if (operation === 'multiply') {
    return a * b;
  } else if (operation === 'divide') {
    return a / b;
  }
  return 0;
}

function computeSwitchAnswer(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'minus':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return a / b;
  }
  // unsure about this
  function computeSwitch(operation, a, b) {
    let res;
    switch (operation) {
      case 'add':
        res = a + b;
        break;
      case 'minus':
        res = a - b;
        break;
      case 'multiply':
        res = a * b;
        break;
      case 'divide':
        res = a / b;
        break;
      default:
        res = 0;
        break;
    }
    alert(res);
    return res;
  }

  function ternaryCompute(operation, a, b) {
    return operation === 'add'
      ? a + b
      : operation === 'divide'
      ? a / b
      : operation === 'multiply'
      ? a * b
      : operation === 'minus'
      ? a - b
      : a / b;
  }
}
