function rand(start, end) {
  let r = start + Math.floor(Math.random() * (end - start));
  return r;
}


function backgroundColor() {
  let bgColor = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
  document.querySelector("body").style.backgroundColor = bgColor;
  

}

const main = () => {
  document.querySelector('h1').textContent += ''
}

document.addEventListener('DOMContentLoaded', main)
