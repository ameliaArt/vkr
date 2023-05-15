function GetFun() {
  alert("ghghghgh");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = this.getElementById("form");
  form.addEventListener("submit", FormSend);

  async function FormSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formDate = new FormData(form); //сбор данных из формы
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");
  }
});
