function waitAsync(second) {
  console.log('waitAsync');
  return new Promise((resolve) => setTimeout(resolve), second * 1000);
  // in general if we are using callback functions, it's better to use a Promise
}

async function fetchPricingDataAsync() {
  console.log('fetchPricingDataAsync');
  let res = await fetch('/api/pricing'); // res is Response obj
  return res.json();
}

async function fetchDataThenWaitAsync() {
  console.log('fetchDataThenWaitAsync');
  let res = await fetchPricingDataAsync();
  console.log('dataFetchedAsync', res);
  await waitAsync(4); //must await otherwise it will just run a promise without waiting for the promise to resolve
  return res;
}
console.log('LOADZ');
fetchDataThenWaitAsync();
