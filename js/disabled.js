
let inp = document.querySelector('.inp'); //находим чекбокс
let btn = document.querySelector('.btn'); //находим кнопку
let form = document.querySelector('.form')  //находим форму

form.addEventListener('submit', (e) => {
e.preventDefault(); //блокируем действие по умолчанию
})

inp.addEventListener("change", (event) => {
  if (event.target.checked) { //если чекбокс эктив
    btn.disabled = false; //значит убираем дисэйблэд с кнопки
  } else {
    btn.disabled = true;
  }
});