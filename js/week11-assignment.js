const titlename = document.querySelector('h1');

titlename.addEventListener('mouseover', changeColor);

function changeColor () {
  titlename.style.color = '#E05194';
}

document.querySelector('html').addEventListener('click',
function() {
  alert('This is my site!');
});
