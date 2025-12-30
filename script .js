document.getElementById('waitlist-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input').value.trim();

  if (!email.endsWith('@zut.ac.zm')) {
    alert('Please use your official ZUT email (@zut.ac.zm)');
    return;
  }

      // Enhanced form submission
    document.getElementById('waitlist-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      const successMsg = document.getElementById('success');
      
      // Validate ZUT email
      if (email.includes('@zut.ac.zm')) {
        successMsg.textContent = "Perfect! You're on the list for future updates. Download v1.2.0 now to start posting!";
        successMsg.style.display = 'block';
        this.reset();
        
        // Scroll to success message
        successMsg.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Please use your ZUT email address (@zut.ac.zm)');
      }
    });
    
    // Add download tracking
    document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('click', function() {
        console.log('Download clicked for v1.2.0');
        // Here you could add analytics tracking
      });
    });

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