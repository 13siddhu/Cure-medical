
const myElement = document.getElementById('face');
const originalText = myElement.textContent;
const size = window.innerWidth;
const child =document.querySelector('.child');
const child1 = document.querySelector('.child1');
const search = document.querySelector('.search');

let isSmallScreen = size <= 768;

if (isSmallScreen) {
    // Disable mouseover event for small screens
    } 
    else {
    myElement.addEventListener('mouseover', () => {
      child.style.display = 'block';
      child1.style.display = 'inline';
            });

    myElement.addEventListener('mouseout',()=>{
          child.style.display = 'none';
          child1.style.display ='none';
    });        
}


