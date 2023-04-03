import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const saveFormState = () => {
  const state = {};
  const inputs = event.currentTarget.elements;
  Array.from(inputs).forEach(input => {
    state[input.name] = input.value;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadFormState = () => {
  const stateJSON = localStorage.getItem(STORAGE_KEY);
  if (stateJSON) {
    const state = JSON.parse(stateJSON);
    const inputs = event.currentTarget.elements;
    Array.from(inputs).forEach(input => {
      input.value = state[input.name] || '';
    });
  }
};

const clearFormState = () => {
  localStorage.removeItem(STORAGE_KEY);
  const inputs = event.currentTarget.elements;
  Array.from(inputs).forEach(input => {
    input.value = '';
  });
};

const handleSubmit = event => {
  event.preventDefault();
  const state = {};
  const inputs = event.currentTarget.elements;
  Array.from(inputs).forEach(input => {
    state[input.name] = input.value;
  });
  console.log(state);
  clearFormState();
};

form.addEventListener('submit', handleSubmit);

const throttledSaveFormState = throttle(saveFormState, 500);
form.addEventListener('input', throttledSaveFormState);

loadFormState();
