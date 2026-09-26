const vagas = [
  {
    id: 1,
    nome: 'Mais1.Café',
    descricao: 'A rede de franquias de cafeterias oferece 3 vagas.<br><br>Requisitos<br><br>Pré Requisitos indispensáveis: 2º grau completo.<br>Não é necessário ter experiência e a contratação é imediata.<br><br>Horários<br><br>De 12 às 20h, com 1 hora de almoço e folga aos domingos.<br><br>Remuneração/Salário<br><br>1.768,67+VT+Premiação+Taxa de serviço+Lanche no local+Auxílio Dental e Funeral.',
    info: 'Os interessados devem enviar currículo para mais1cafecopa@gmail.com'
  },
  {
    id: 2,
    nome: 'Drogarias Riofarma',
    descricao: `Drogarias Riofarma abre mais de 45 vagas para Atendente de loja, Balconista de Medicamento, Farmacêutico, Analista de Departamento Pessoal, Recepcionista e outras funções na Zona Sul do RJ.<br><br>Atendente de Loja:<br><br>Maior de 18 anos;<br>Não há necessidade de experiência anterior na função;<br>Disponibilidade de horário;<br>Fácil acesso à Zona Sul - RJ.<br><br>Balconista:<br><br>Maior de 18 anos;<br>Experiência anterior na função;<br>Disponibilidade de horário;<br>Fácil acesso à Zona Sul - RJ.<br><br>ATENDENTE DE LOJA PCD<br><br>Maior de 18 anos;<br>Experiência anterior na função;<br>Disponibilidade de horário;<br>Fácil acesso à Zona Sul - RJ.<br><br>Entregador<br><br>Maior de 18 anos;<br>Possuir bicicleta;<br>Disponibilidade de horário;<br>Fácil acesso à Zona Sul - RJ.<br><br>Farmacêutico<br><br>Ensino superior completo em Farmácia;<br>CRF ativo;<br>Não há necessidade de experiência anterior na função.<br>Fácil acesso à Zona Sul.<br><br>Analista Departamento Pessoal<br><br>Ensino superior;<br>Experiência anterior na função.<br>Fácil acesso à Zona Sul.<br><br>Recepcionista<br><br>Ensino Médio;<br>Experiência anterior na função.<br>Fácil acesso à Zona Sul.`,
    info: 'Envie seu currículo para: recursoshumanos@riofarma.com.br'
  },
  {
    id: 3,
    nome: 'Supermercados Turbo 1000',
    descricao: 'O Supermercados Turbo 1000, localizado na Baixada Fluminense, está com vagas de emprego abertas para diversos setores de sua operação.<br><br>As oportunidades disponíveis são para os seguintes cargos:<br><br>Operador de Loja<br>Fiscal de caixa<br>Repositor de Hortifrúti<br>Atendente de Laticínios<br>Ajudante de Açougue<br>Açougueiro<br>Gerente de comercial<br>Repositor de Mercearia<br>Servente de Limpeza.',
    info: 'Inscrições através do email: dpgraziela@turbo1000.com.br'
  },
  {
    id: 4,
    nome: 'Assaí Atacadista',
    descricao: 'O Assaí está com cerca de 460 vagas de trabalho abertas para atuar em suas lojas no estado do Rio de Janeiro. As oportunidades abrangem diferentes áreas operacionais, com destaque para os cargos de Operador(a) de loja e Operador(a) de caixa. Todas as posições de trabalho são elegíveis para pessoas com deficiência.',
    info: 'Inscrições através deste link: https://www.assai.com.br/trabalhe-conosco'
  },
  {
    id: 5,
    nome: 'Padaria Santa Marta',
    descricao: 'A Padaria Santa Marta está com vagas de emprego abertas para atuação nas regiões da Zona Norte, Zona Sul e Zona Sudoeste. As contratações serão feitas sob o regime CLT.<br><br>As oportunidades disponíveis são para os cargos de:<br><br>Operador(a) de Loja<br>Operadora de Caixa<br>Fiscal de Caixa<br>Atendente<br>Auxiliar de Cozinha<br>Auxiliar de Padaria<br>Auxiliar de Confeitaria<br>Garçom<br>Churrasqueiro<br>Auxiliar de Serviços Gerais<br><br>Para se candidatar, é necessário ter experiência na função desejada e disponibilidade de horário. A jornada de trabalho será realizada em escala de 6x1 ou 12x36.<br><br>A empresa oferece como benefícios: refeição no local, plano odontológico, seguro de vida, plano funeral, além de convênios com faculdades e com o SESC.',
    info: 'Os interessados em participar da seleção devem enviar o currículo para o e-mail: curriculos@gruposantamarta.com.br.'
  },
  {
    id: 6,
    nome: 'G4S Interativa',
    descricao: 'A G4S está em busca de um jovem aprendiz administrativo para se juntar ao time deles.<br>Entre as principais responsabilidades, o Jovem Aprendiz Administrativo deverá controlar e organizar arquivos recebidos e enviados, garantindo a integridade e acessibilidade das informações.<br>Além disso, é fundamental que o candidato demonstre habilidades de comunicação escrita, com foco em textos no Word e na elaboração de e-mails.<br><br>O candidato deverá demonstrar comprometimento, responsabilidade e uma atitude proativa.<br>O programa oferece uma jornada de aprendizado que inclui orientação e acompanhamento por parte de mentores experientes, além de uma remuneração compatível com a legislação vigente para jovens aprendizes.<br>Enviar o currículo atualizado com a função desejada para o contato 11 96170-2632 com o texto JOVEM APRENDIZ Rio de Janeiro.',
    info: 'Mais informações: https://www.catho.com.br/vagas/jovem-aprendiz-administrativo/38537322?origem_apply=direto&entrada_apply=busca-de-vagas'
  },
  {
    id: 7,
    nome: 'Le Depanneur',
    descricao: 'Vagas para jovem aprendiz.<br> Auxiliar nas rotinas administrativas e de escritório;<br> Organizar documentos e arquivos;<br> Prestar suporte no atendimento a clientes e fornecedores;<br> Colaborar na organização do ambiente de trabalho;<br> Apoiar em atividades operacionais específicas do setor de alimentos, conforme demanda.<br>Ensino Médio completo ou em curso; Idade entre 14 e 24 anos (conforme Lei da Aprendizagem);<br> Conhecimento básico em Pacote Office (Word, Excel);<br> Boa comunicação e proatividade; Vontade de aprender e se desenvolver.<br> Desejável: Noções de organização e trabalho em equipe.  num curso condizente a tarefa',
    info: 'Mais informações: https://www.catho.com.br/vagas/jovem-aprendiz/38462082?origem_apply=direto&entrada_apply=busca-de-vagas'
  }
];

const lista = document.getElementById('lista-vagas');

vagas.forEach(vaga => {
  lista.innerHTML += `
  <div class="card col-12 col-sm-11">
    <div class="card-body">
        <h5 class="card-title">${vaga.nome}</h5>
        <p class="card-text">${vaga.descricao}</p>
        <p></p>
        <p class="card-text">${vaga.info}</p>
    </div>
  </div>
  `;
});