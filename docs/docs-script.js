function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.menu button').forEach(btn => btn.classList.remove('active'));
  document.getElementById('btn-' + id).classList.add('active');
}
window.onload = function() {
  showSection('tipografia');
}; 