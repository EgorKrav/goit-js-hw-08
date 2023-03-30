const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = _.throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

const loadFormState = () => {
  const formState = JSON.parse(
    localStorage.getItem('feedback-form-state') || '{}'
  );
  emailInput.value = formState.email || '';
  messageInput.value = formState.message || '';
};

const clearFormState = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

window.addEventListener('load', loadFormState);

form.addEventListener('submit', event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
  clearFormState();
});
