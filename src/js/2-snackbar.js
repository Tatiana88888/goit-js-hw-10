import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const formEl = document.querySelector(".form");
formEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const delay = event.currentTarget.elements.delay.value;
  const state = event.currentTarget.elements.state.value;
  const promise = new Promise((resolve, reject) => setTimeout(() => {
    if (state === "fulfilled") {
      resolve(delay);
    } else {
      reject(delay);
    }
  }, delay));
  promise
    .then(value => {
      iziToast.success({
        color: 'green',
        position: 'topRight',
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(error => {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Rejected promise in ${delay}ms`,
      });
    });
}


