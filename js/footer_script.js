const foot = document.querySelector('.foot');
fetch('/footer.html')
  .then(res => res.text())
  .then(data => {
    foot.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    eval(doc.querySelector('script').textContent);
  });

window.addEventListener('scroll', function() {
  const scrollDistance = window.pageYOffset;
  
  const viewportHeight = window.innerHeight;
  
  const pageHeight = document.body.scrollHeight;
  
  const scrollFromBottom = pageHeight - (scrollDistance + viewportHeight);
  
  if (scrollFromBottom <= foot.offsetHeight) {
    foot.style.display = '0px';
  } else {
    foot.style.display = '-100px';
  }
});