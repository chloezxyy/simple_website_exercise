/* eslint-disable */

/* DEMO: show how to make FAQ collapsible */
function makeCollapsible(panelId) {
  // get button that controls the panel
  const btn = document.querySelector(`button[aria-controls=${panelId}]`);
  // get the panel
  const panel = document.querySelector(`#${panelId}`);
  // hide the panel when js load instead of in HTML directly
  panel.classList.add('hidden');
  // so if js fail to load, content will still be visible
  // listen for click on the button
  btn.addEventListener('click', function onButtonClick() {
    panel.classList.toggle('hidden');
  });
}

// makeCollapsible('faq-0');
// makeCollapsible('faq-1');
// makeCollapsible('faq-2');
// makeCollapsible('faq-3');
// makeCollapsible('faq-4');
// makeCollapsible('faq-5');
// makeCollapsible('faq-6');
// makeCollapsible('faq-7');

/* (Chapter 6) DEMO: allow html editor 
to add more faq in future without js change like the line 18-25 above */
// document.querySelectorAll returns a length property and able to use accessor to access the element
const accordionBtns = Array.from(document.querySelectorAll('.js-accordion'));

accordionBtns.forEach((btn) => {
  const panelId = btn.getAttribute('aria-controls');
  const panel = document.querySelector(`#${panelId}`);
  if (panel) {
    panel.classList.add('hidden');
    btn.addEventListener('click', () => panel.classList.toggle('hidden'));
  }
});
