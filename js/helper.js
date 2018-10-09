let valArr = [];
function rem(){
  let ulka = document.getElementById('navlist');
  for(let i = 0; i < ulka.children.length; i++){
    // console.log(ulka.children[i].childNodes[0].innerHTML);
    valArr.push(ulka.children[i].childNodes[0].innerHTML);
  }
  console.log(valArr);
}

// Skrols to the anchor link
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}