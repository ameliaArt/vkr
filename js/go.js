function GetFun() {
  alert("ghghghgh");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = this.getElementById("form"); //зантсив в переменую форму
  form.addEventListener("submit", FormSend); // задаем событие переменной форме бля ткрятия функйии formsend

  async function FormSend(e) {
    e.preventDefault(); //запрет на стандартную отправку

    let error = formValidate(form); //проекка на валидацию данных

    let formDate = new FormData(form); //сбор данных из формы
    formDate.append("image", img.files[0]);

    let responce = await fetch("sendmail.php", {
      //использование файдла пхп
      method: "POST",
      body: formDate,
    });

    if (responce.ok) {
      //проверка и отчит=стка формы
      let result = await readre.json();
      alert(result.message);
      form.reset();
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
  }

  const img = document.getElementById("photo"); //фото
  const pverPhoto = document.getElementById("file_pre");

  img.addEventListener("change", () => {
    uploadFile(img.files[0]);
  });

  function uploadFile(file) {
    return file;
  }

  var readre = new FileReader();

  readre.onload = function (e) {
    pverPhoto.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
  };

  readre.readAsDataURL(file);
});
