// scripts.js

function checkReferente() {
  var referenteValue = document.getElementById("itemType").value
  var photoField = document.getElementById("photo")

  if (referenteValue.trim() !== "") {
    photoField.setAttribute("required", "required")
  } else {
    photoField.removeAttribute("required")
  }
}

function validateForm() {
  var referenteValue = document.getElementById("itemType").value
  var photoField = document.getElementById("photo")

  if (referenteValue.trim() !== "" && !photoField.value) {
    alert("Por favor, carregue um comprovante.")
    return false // Impede o envio do formulário
  }
  return true // Permite o envio do formulário
}
