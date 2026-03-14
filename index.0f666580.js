document.querySelectorAll("form div.field input.field-text").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.textContent=e.name,t.htmlFor=e.id,e.placeholder=e.name.replace(/\b\w/g,function(e){return e.toUpperCase()}),e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=index.0f666580.js.map
