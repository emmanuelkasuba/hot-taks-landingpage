document.getElementById('waitlist-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input').value.trim();

  if (!email.endsWith('@zut.ac.zm')) {
    alert('Please use your official ZUT email (@zut.ac.zm)');
    return;
  }

  this.style.display = 'none';
  document.getElementById('success').style.display = 'block';
});