const nav = document.querySelector('.navbar')
fetch('/nav.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('nav_script').textContent)
})
