const sectionFiles = {
  tipografia: 'section-tipografia.html',
  tamanhos: 'section-tamanhos.html',
  bordas: 'section-bordas.html',
  cores: 'section-cores.html',
  sombras: 'section-sombras.html',
  temas: 'section-temas.html',
  botao: 'section-component-button.html',
  input: 'section-component-input.html',
  tab: 'section-component-tab-item.html',
  table: 'section-component-table.html',
  util: 'section-component-util.html',
};

function loadSectionContent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.menu button').forEach(btn => btn.classList.remove('active'));
  document.getElementById('btn-' + id).classList.add('active');

  if (sectionFiles[id] && !document.getElementById(id).dataset.loaded) {
    loadSectionContent(id, sectionFiles[id]);
    document.getElementById(id).dataset.loaded = 'true';
  }
}

window.onload = function() {
  showSection('tipografia');
}; 

function copyCode(btn) {
  const code = btn.parentElement.querySelector('code').innerText;
  navigator.clipboard.writeText(code);
  btn.innerText = '✔️';
  setTimeout(() => btn.innerText = '📋', 1200);
}