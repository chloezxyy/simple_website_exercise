function showError(msg) {
  document.querySelector('#errorMsg').innerHTML = msg;
  document.querySelector('#errorAlert').classList.remove('hidden');
}

function splitBill() {
  // TODO: clear previous error message
  document.querySelector('#errorMsg').innerHTML = '';
  document.querySelector('#errorAlert').classList.add('hidden');

  const billTotal = document.querySelector('#billTotal').value;
  const pax = document.querySelector('#pax').value;

  // TODO: validate bill total is provided
  if (!billTotal) {
    showError('Empty bill');
    return;
  }
  // TODO: validate bill total is positive
  if (billTotal < 0) {
    showError('Input positive bill pl0x');
    return;
  }
  // TODO: validate num of pax is provided
  if (!pax) {
    showError('Empty pax');
    return;
  }
  // TODO: validate num of pax is positive
  if (pax < 0) {
    showError('Input positive pax pl0x');
    return;
  }
  // prevent decimals
  // if(pax%1!==0) {

  // }
  const amountPerPax = Number(billTotal) / Number(pax);

  if (pax < 0 || billTotal < 0) {
    document.querySelector('#result').innerHTML = 0;
  } else {
    document.querySelector('#result').innerHTML = amountPerPax.toFixed(2);
  }
}

document.querySelector('#splitBtn').addEventListener('click', splitBill);
