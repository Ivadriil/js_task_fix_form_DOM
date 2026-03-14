'use strict';

// placeholder=""
// write code here
const label = document.createElement('label');

const input = document.querySelectorAll('.field-text');

input.forEach((el) => {
  el.placeholder = el.name.replace(/\b\w/g, (l) => l.toUpperCase());
  el.outerHTML = `<label class="field-label" for="${el.id}">${el.name.toUpperCase()}</label>${el.outerHTML}`;
});
label.classList.add('field-label');
