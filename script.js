const abrirfomularioBtn = document.querySelector("#abrir_fomulario"),
  inicio = document.querySelector(".inicio"),
  caixa1 = document.querySelector(".caixa1"),
  fecharformularioBtn = document.querySelector(".fechar_formulario"),
  inscreverseBtn = document.querySelector("#inscrever-se"),
  entrarBtn = document.querySelector("#entrar"),
  esconder = document.querySelectorAll(".esconder");

abrirfomularioBtn.addEventListener("click", () => inicio.classList.add("show"));
fecharformularioBtn.addEventListener("click", () => inicio.classList.remove("show"));

esconder.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

inscreverseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  caixa1.classList.add("active");
});
entrarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  caixa1.classList.remove("active");
});
