'use strict';

// placeholder=""
// write code here

const label = document.createElement('label');
label.classList.add('field-label');
const input = document.querySelectorAll('.field-text');


input.forEach((el) => {
   
  el.placeholder = el.name.replace(/\b\w/g, (l) => l.toUpperCase());
  label.htmlFor = el.id;
  el.parentElement.insertBefore(label.cloneNode(label.textContent = el.name), el);
  
});

