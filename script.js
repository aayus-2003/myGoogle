let b = document.getElementById("github");
let c = document.getElementById("facebook");
let d = document.getElementById("whatsapp");
let e = document.getElementById("plus");
let f = document.getElementById("sp1");
let g = document.getElementById("sp2");
// console.log(g);
let a = document.getElementById("youtube");

a.addEventListener("click", function (e) {
  location.href = "https://www.youtube.com/";
});

b.addEventListener("click", function (e) {
  location.href = "https://github.com/";
});

c.addEventListener("click", function (e) {
  location.href = "https://www.facebook.com/";
});

d.addEventListener("click", function (e) {
  location.href = "https://www.whatsapp.com/";
});

//here we make new someThing
e.addEventListener("click", function () {
  let container = document.getElementById("container");
  let newContainer = document.getElementById("newContainer");

  newContainer.classList.remove("none");
  container.classList.add("none");
});

let container = document.getElementById("container");
let newContainer = document.getElementById("newContainer");

function cancel() {
  newContainer.classList.add("none");
  container.classList.remove("none");
}

f.addEventListener("click", function (e) {
  location.href = "https://policies.google.com/terms?hl=en";
});

g.addEventListener("click", function (e) {
  location.href = "https://policies.google.com/terms?hl=en";
});

// circle

let circle = document.getElementById("circle");
let bar = document.getElementById("bar");

circle.addEventListener("click", function () {
  bar.classList.toggle("toggle");
});

//btn

let btn = document.getElementById("btnFirst");

btn.addEventListener("click", function () {
  location.href =
    "https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act";
});

let input = document.getElementById("input");
let logo = document.getElementById("logo");

logo.onclick = () => {
  let val = input.value;
  location.href = val;
  input.value = "";
};

input.onauxclick = () => {
  location.href = val;
};


function add () {

  let addElem = document.getElementById('newAddElem')

  let url = document.getElementById('url')
  let name = document.getElementById('name')

  let elem = document.createElement('div')
  elem.setAttribute('class', 'f')
  
  let anchorTag = document.createElement('a')
  anchorTag.innerHTML = name.value
  anchorTag.setAttribute('href', url.value)
  elem.appendChild(anchorTag)
  
  newContainer.classList.add("none");
  container.classList.remove("none");

  addElem.appendChild(elem)
  
  url.value = ''
  name.value = ''

}