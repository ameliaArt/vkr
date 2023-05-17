"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form"); //зантсив в переменую форму
  form.addEventListener("submit", FormSend); // задаем событие переменной форме бля ткрятия функйии formsend

  async function FormSend(e) {
    e.preventDefault(); //запрет на стандартную отправку

    // let error = formValidate(form); //проекка на валидацию данных

    let formDate = new FormData(form); //сбор данных из формы
    formDate.append("image", img.files[0]);
    form.classList.add("_sending");
    let responce = await fetch("sendmail.php", {
      method: "POST",
      body: formDate,
    });

    if (responce.ok) {
      //проверка и отчит=стка формы
      let result = await responce.json();
      alert(result.message);
      pverPhoto.innerHTML = ``;
      form.reset();
      form.classList.remove("_sending");
    } else {
      alert("ошибка");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req"); // присвоить переменной где должны быть обязательные поля

    for (let index = 0; index < formReq.length; index++) {
      const element = array[index];
    }
    return error;
  }

  const img = document.getElementById("photo"); //фото
  const pverPhoto = document.getElementById("file_pre");

  img.addEventListener("change", () => {
    uploadFile(img.files[0]);
  });

  function uploadFile(file) {
    var readre = new FileReader();

    readre.onload = function (e) {
      pverPhoto.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
    };

    readre.readAsDataURL(file);
  }
});
