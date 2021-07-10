/* EXERCISE: make each section collapsible */

function makeSectionCollapsible(btnId, sectionId) {
  // TODO: get button and the section
  const section = document.querySelector(`#${sectionId}`);
  const btn = document.querySelector(`#${btnId}`);

  // TODO: hide the sections
  section.classList.add('hidden');

  // TODO: listen for click event on the button
  btn.addEventListener('click', function onButtonClick() {
    section.classList.toggle('hidden');
  });

  // ALTERNATE SOLUTION
  // btn.addEventListener('click', () => {
  //   section.classList.toggle('hidden');
  // })
}

makeSectionCollapsible('toggle-btn-0', 'section-0');
makeSectionCollapsible('toggle-btn-1', 'section-1');
makeSectionCollapsible('toggle-btn-2', 'section-2');
makeSectionCollapsible('toggle-btn-3', 'section-3');

/* to allow html editor to add more faq in future without js change */
const pxBtns = Array.from(
  document.querySelectorAll('button[aria-controls="section-*"]')
);

pxBtns.forEach((btn) => {
  const panelId = btn.getAttribute('aria-controls');
  const panel = document.querySelector(`#${panelId}`);
  if (panel) {
    panel.classList.add('hidden');
    btn.addEventListener('click', () => panel.classList.toggle('hidden'));
  }
});
