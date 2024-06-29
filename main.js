var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".button");

for (let i of btn) {
  i.addEventListener("click", (e) => {
    btntext = e.target.innerText;
    if (btntext == "x") {
      btntext = "*";
    }
    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value = screen.value + btntext;
  });
}
function sin() {
  console.log(screen.value);
  screen.value = Math.sin(screen.value);
  console.log(screen.value);
}
function cos() {
  console.log(screen.value);
  screen.value = Math.cos(screen.value);
  console.log(screen.value);
}
function tan() {
  console.log(screen.value);
  screen.value = Math.tan(screen.value);
  console.log(screen.value);
}
function pow() {
  screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
  screen.value = Math.sqrt(screen.value);
}
function pi() {
  screen.value = 3.14159265359;
}
function log() {
  screen.value = Math.log(screen.value);
}
function e() {
  screen.value = 2.7182818284590;
}
function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  screen.value = f;
}
function backspc(){
  screen.value=screen.value.substr(0,screen.value.length-1);
}
