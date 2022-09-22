function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
  modal.focus();
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  const form = document.getElementById('form_contact');

  form.reset();
  modal.style.display = 'none';
}
