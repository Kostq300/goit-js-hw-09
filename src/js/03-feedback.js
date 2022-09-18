var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');


formRef.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log({email: emailRef.value, message: messageRef.value});
  event.currentTarget.reset();
  localStorage.clear();
})
formRef.addEventListener('input', throttle(onForm, 500));

function onForm(event) {
  
  const formData = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  
}
function getCurrentValuesOnForm() {
  const localStorageData = localStorage.getItem('feedback-form-state');
  if (localStorageData) {
    const currentData = JSON.parse(localStorageData);
    emailRef.value = currentData.email;
    messageRef.value = currentData.message;
}
};
getCurrentValuesOnForm();