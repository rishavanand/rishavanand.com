particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

$('#resume-download-btn').click(() => {
  window.location = './documents/rishav_resume.pdf';
});