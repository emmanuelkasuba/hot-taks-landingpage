document.getElementById('waitlist-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input').value.trim();

  if (!email.endsWith('@zut.ac.zm')) {
    alert('Please use your official ZUT email (@zut.ac.zm)');
    return;
  }

  // Functional email — opens user's default email client
  const subject = 'HotTaks Waitlist Signup';
  const body = `Hi Emmanuel,

I want to join the HotTaks waitlist!

My ZUT email: ${email}

Looking forward to the launch!
  `;
  const mailtoLink = `mailto:emmanuelkasuba2005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open email client
  window.location.href = mailtoLink;

  // Show success message
  this.style.display = 'none';
  document.getElementById('success').style.display = 'block';

  console.log('Email opened for waitlist:', email);
});