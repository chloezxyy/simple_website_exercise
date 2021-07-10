function fetchPriceData() {
  return fetch('/api/pricing').then((res) => res.json());
}

async function updatePricing(btnId) {
  // get price from api
  const priceData = await fetchPriceData();
  console.log('MEOW', priceData);
  // get buttons for styling purpose
  const darkBtn =
    'ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8';
  const lightBtn =
    'relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8';
  let monthBtn = document.querySelector('#monthly-plans-btn');
  const annualBtn = document.querySelector('#annual-plans-btn');

  const periodTag = Array.from(
    document.getElementsByClassName(
      'price-unit text-base font-medium text-gray-500'
    )
  );

  // get btn id of clicked button, depending on which btnId is provided
  const btn = document.querySelector(`#${btnId}`);

  // click callback function
  btn.addEventListener('click', function () {
    for (let i = 0; i < priceData.length; i++) {
      if (btnId === 'monthly-plans-btn') {
        // change color of tab
        monthBtn.classList = lightBtn;
        annualBtn.classList = darkBtn;
        document.querySelector(`#${priceData[i]['tier']}-price`).innerHTML =
          priceData[i]['monthlyPrice'];
        periodTag.map((tag) => {
          tag.innerHTML = '/MONTH';
        });
      } else {
        annualBtn.classList = lightBtn;
        monthBtn.classList = darkBtn;
        document.querySelector(`#${priceData[i]['tier']}-price`).innerHTML =
          priceData[i]['annualPrice'];
        periodTag.map((tag) => {
          tag.innerHTML = '/YEAR';
        });
      }
    }
  });
}

const btnList = ['monthly-plans-btn', 'annual-plans-btn'];
for (let i = 0; i < btnList.length; i++) {
  updatePricing(btnList[i]);
}
