let nomeInput = document.querySelector("#nome");
let emailInput = document.querySelector("#email");
let assuntoInput = document.querySelector("#assunto");
let msgTextArea = document.querySelector("#mensagem");

let nomeErro = document.querySelector(".erro_contato");
let emailErro = document.querySelector(".erro_email");
let assuntoErro = document.querySelector(".erro_assunto");
let msgErro = document.querySelector(".erro_msg");
let btnEnviar = document.querySelector(".botao_enviar");

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

nomeInput.addEventListener("blur", (e) => {
  if (nomeInput.value.length < 2 || nomeInput.value.length > 50) {
    nomeErro.style.visibility = "visible";
  } else {
    nomeErro.style.visibility = "hidden";
  }
});

emailInput.addEventListener("blur", (e) => {
  if (!emailInput.value || !emailRegex.test(emailInput.value)) {
    emailErro.style.visibility = "visible";
  } else {
    emailErro.style.visibility = "hidden";
  }
});

assuntoInput.addEventListener("blur", (e) => {
  if (!assuntoInput.value || assuntoInput.value.length > 50) {
    assuntoErro.style.visibility = "visible";
  } else {
    assuntoErro.style.visibility = "hidden";
  }
});

msgTextArea.addEventListener("blur", (e) => {
  if (!msgTextArea.value || msgTextArea.value.length > 300) {
    msgErro.style.visibility = "visible";
  } else {
    msgErro.style.visibility = "hidden";
  }
});

document.addEventListener('input', (e) => {
  if (
    nomeInput.validity.valid &&
    emailInput.validity.valid &&
    assuntoInput.validity.valid &&
    msgTextArea.validity.valid
  ) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
})