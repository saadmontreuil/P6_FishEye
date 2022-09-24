const displayModal = () => {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
  modal.focus();
  const name = document.querySelector('h1').textContent;
  const modalName = document.getElementsByClassName('modal-header-title');
  modalName[0].textContent = `Contactez-moi ${name}`;
};

const closeModal = () => {
  const modal = document.getElementById('contact_modal');
  const form = document.getElementById('form_contact');

  form.reset();
  modal.style.display = 'none';
};

function displayMessage() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const html = `Merci ${firstName} ${lastName} de nous avoir contacté à propos de ${message}. Un de nos conseiller vous contactera soit à l’adresse ${email} dans les plus brefs délais pour traiter votre demande :`;


  console.log(html);
}
