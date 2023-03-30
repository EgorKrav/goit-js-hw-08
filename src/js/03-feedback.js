import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputs = form.querySelectorAll('input, textarea');

const STORAGE_KEY = 'feedback-form-state';

const saveFormState = () => {
  const state = {};
  inputs.forEach(input => {
    state[input.name] = input.value;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadFormState = () => {
  const stateJSON = localStorage.getItem(STORAGE_KEY);
  if (stateJSON) {
    const state = JSON.parse(stateJSON);
    inputs.forEach(input => {
      input.value = state[input.name] || '';
    });
  }
};

const clearFormState = () => {
  localStorage.removeItem(STORAGE_KEY);
  inputs.forEach(input => {
    input.value = '';
  });
};

const handleSubmit = event => {
  event.preventDefault();
  const state = {};
  inputs.forEach(input => {
    state[input.name] = input.value;
  });
  console.log(state);
  clearFormState();
};

form.addEventListener('submit', handleSubmit);

const throttledSaveFormState = throttle(saveFormState, 500);
form.addEventListener('input', throttledSaveFormState);

loadFormState();
