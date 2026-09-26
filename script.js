const vagas = [
  {
    id: 1,
    nome: 'Jovem aprendiz',
    empresa: 'Google',
    info: 'https://www.google.com'
  },
  {
    id: 2,
    nome: 'Analista',
    empresa: 'Intel',
    info: 'https://www.intel.com'
  },
  {
    id: 3,
    nome: 'Desenvolvedor',
    empresa: 'AMD',
    info: 'https://www.amd.com'
  }
];

const lista = document.getElementById('lista-vagas');

vagas.forEach(vaga => {
  lista.innerHTML += `
  <div class="card">
    <div class="card-body">
        <h5 class="card-title">${vaga.nome}</h5>
        <p class="card-text">${vaga.empresa}</p>
        <p></p>
        <a href=${vaga.info} class="card-link">Mais informações</a>
    </div>
  </div>
  `;
});