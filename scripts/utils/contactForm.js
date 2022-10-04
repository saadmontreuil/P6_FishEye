/* eslint no-unused-vars: "off" */
/* eslint no-console: "off" */
const displayModal = () => {
  const modal = document.getElementById('contact_modal');
  const main = document.getElementById('main');
  const first = document.getElementById('first');
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-modal', 'true');
  first.focus();
  main.setAttribute('aria-hidden', 'true');
  main.style.position = 'fixed';
  const name = document.querySelector('h1').textContent;
  const modalName = document.getElementById('modal-header-title');
  modalName.textContent = `Contactez-nous pour ${name}`;
};

const closeModal = () => {
  const modal = document.getElementById('contact_modal');
  const form = document.getElementById('form_contact');
  const main = document.getElementById('main');
  main.style.position = 'static';

  form.reset();
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-modal', 'false');
  main.setAttribute('aria-hidden', 'false');
};

function displayMessage() {
  const firstName = document.getElementById('first').value;
  const lastName = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const messageK = `
    'firstname': ${firstName},
    'lastname': ${lastName},
    'email': ${email},
    'message': ${message}`;

  console.log(messageK);
}

/**
 * function pour vérifier si le nom et prenom sont valides
 */

const nameChecker = (value, mesaage, inp) => {
  const firstContainer = document.querySelector(`.${inp}`);
  const errorDisplay = document.querySelector(`.${inp} > span`);
  let isValid = false;
  const regName = /^[a-zA-Z]+[a-zA-Z]+$/;

  if (!value.match(regName)) {
    firstContainer.classList.add('error');
    errorDisplay.textContent = mesaage;
  } else {
    errorDisplay.textContent = '';
    isValid = true;
  }
  return isValid;
};

/**
 * function pour vérifier si le email est valide
 */
const emailChecker = (value) => {
  const emailContainer = document.querySelector('#email');
  const errorDisplay = document.querySelector('.email >.error');
  let isValid = false;

  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay.textContent = 'Veuillez entrer une adresse mail valide.';
  } else {
    errorDisplay.textContent = '';
    isValid = true;
  }
  return isValid;
};

const messageChecker = (value) => {
  const messageContainer = document.querySelector('#message');
  const errorDisplay = document.querySelector('.message >.error');
  let isValid = false;
  const regMessage = / [a-zA-Z]+([a-zA-Z]+(\s+[a-zA-Z]+)+)[a-zA-Z]+ /i;
  if (!value.match(regMessage)) {
    errorDisplay.textContent = 'Veuillez entrer un message valide.';
  } else {
    errorDisplay.textContent = '';
    isValid = true;
  }
  return isValid;
};

const inputs = document.querySelectorAll(
  '#first, #last, #email, #message ',
);

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    switch (e.target.id) {
      case 'first':
        nameChecker(e.target.value, 'Veuillez entrer un prénom.', 'first');
        break;
      case 'last':
        nameChecker(e.target.value, 'Veuillez entrer un nom.', 'last');
        break;
      case 'email':
        emailChecker(e.target.value);
        break;
      case 'message':
        messageChecker(e.target.value);
        break;
      default:
        break;
    }
  });
});

const onSubmit = (e) => {
  e.preventDefault();

  /**
   * Récupérer les valeurs des inputs du formulaire
   */
  const formValues = (input) => {
    const data = [];

    for (let i = 0; i < input.length; i += 1) {
      if (
        input[i].type === 'text'
        || input[i].type === 'email'
      ) {
        data.push(input[i].value);
      }
    }
    return data;
  };
  /**
   * Vérifie la valeur de chacun des inputs
   */
  const formIsValid = (values) => {
  /**
  * Teste la validité de chaque input
  */
    const validInputs = [];

    validInputs.push(nameChecker(values[0], 'Veuillez entrer 2 caractères ou plus pour le champ du nom.', 'first'));
    validInputs.push(nameChecker(values[1], 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.', 'last'));
    validInputs.push(emailChecker(values[2]));
    validInputs.push(messageChecker(values[3]));

    let isValid = true;

    for (let i = 0; i < validInputs.length; i += 1) {
      if (validInputs[i] === false) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  // si Valid
  if (formIsValid(formValues(inputs))) {
    displayMessage();
    closeModal();
  } else {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
  }
};
const submitInput = document.querySelector('#submit');

submitInput.addEventListener('click', (e) => onSubmit(e));
