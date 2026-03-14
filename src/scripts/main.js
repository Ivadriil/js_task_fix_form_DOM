'use strict';

// placeholder=""
// write code here





const input = document.querySelectorAll('.field-text');

input.forEach((el) => {
const label = document.createElement('label');
label.classList.add('field-label');
label.textContent = el.name;
  el.placeholder = el.name.replace(/\b\w/g, (l) => l.toUpperCase());
  label.htmlFor = el.id;

  el.parentElement.insertBefore(
    label,el,
  );
});
