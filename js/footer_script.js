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
  // Get the distance of the user's scroll from the top of the page
  const scrollDistance = window.pageYOffset;
  
  // Get the height of the viewport
  const viewportHeight = window.innerHeight;
  
  // Get the height of the entire page
  const pageHeight = document.body.scrollHeight;
  
  // Calculate how far the user has scrolled from the bottom of the page
  const scrollFromBottom = pageHeight - (scrollDistance + viewportHeight);
  
  // Show the footer if the user has scrolled to the bottom of the page
  if (scrollFromBottom <= foot.offsetHeight) {
    foot.style.display = '0px';
  } else {
    foot.style.display = '-100px';
  }
});