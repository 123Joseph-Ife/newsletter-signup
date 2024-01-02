const form = document.querySelector(".form");
const input = document.querySelector("input");
const successMsg = document.querySelector(".success-msg");
const container = document.querySelector(".container");
const small = document.querySelector(".small");
const strong = document.querySelector(".strong");
const dismisal = document.querySelector(".dismisal");

successMsg.style.display = "none";

dismisal.addEventListener("click", () => {
  window.location.reload()
})

const validated = (e) => {
  e.preventDefault()
  if(input && input.value !== "") {
    if (input.checkValidity()) {
      successMsg.style.display = "flex";
      strong.innerHTML = input.value
      if (successMsg.checkVisibility()) {
        container.style.display = "none"
      }
    } else {
      error()
    }
  } else {
    error()
  }
}
//   if (successMsg.checkVisibility()) {
//     container.style.display = "none"
//   } else {
//     container.style.display = "block"
//   }
// }

const success = () => {
  small.classList.remove("error")
  input.classList.remove("error")
}

const error = (e) => {
  small.classList.add("error")
  input.classList.add("error")
}

form.addEventListener("submit", validated)

input.addEventListener("input", () => {
  if(!input.checkValidity()) {
    error()
  } else {
    success()
  }
})