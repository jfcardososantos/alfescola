export let environment: {

  schoolCode: any;
  schoolName: string;
  frasePrincipal?: string;
  schoolLogo: string;
  atendimento: string[]
  fachada: string

  mongoDbUrl: string
  mongoDbConnection: string
  filesZiplineUrl: string
  filesZiplineKey: string
};



export const galileu = {
  schoolCode: 'eegalileu',
  schoolName: 'Escola Estadual Galileu Galilei',
  frasePrincipal: 'Uma frase que represente a escola',
  atendimento: ['Ensino Fundamental I', 'Ensnino Fundamental II'],
  schoolLogo: '../assets/logos/galileu-logo.png',
  fachada: '../assets/fachadas/fachada.JPG',

  mongoDbUrl: 'https://lokal-locacoes-backend-api.grwbnq.easypanel.host',
  mongoDbConnection: 'mongodb://mongo:871275a16ff1643ba93f@lokal-locacoes_lokallocacoesdb:27017',
  filesZiplineUrl: 'https://lokal-locacoes-files.grwbnq.easypanel.host/api/upload',
  filesZiplineKey: 'BQkcnMzo0MBIjxxluGAeBu4d.MTcyODM5ODQ4NTY1OQ',

}

export const ieat = {
  schoolCode: 'ieat',
  schoolName: 'Instituto de Educação Anísio Teixeira',
  frasePrincipal: 'Uma frase que represente a escola',
  atendimento: ['Ensnino Fundamental II', 'Ensino Médio Diurno', 'Ensino Médio Noturno'],
  schoolLogo: '../assets/logos/galileu-logo.png',
  fachada: '../assets/fachadas/fachada.JPG',

  mongoDbUrl: 'https://lokal-locacoes-backend-api.grwbnq.easypanel.host',
  mongoDbConnection: 'mongodb://mongo:871275a16ff1643ba93f@lokal-locacoes_lokallocacoesdb:27017',
  filesZiplineUrl: 'https://lokal-locacoes-files.grwbnq.easypanel.host/api/upload',
  filesZiplineKey: 'BQkcnMzo0MBIjxxluGAeBu4d.MTcyODM5ODQ4NTY1OQ',

}


export const calendarTypes = [
  "Férias",
  "Início/término do bimestre",
  "Dia escolar",
  "Recesso",
  "Feriado nacional",
  "Feriado Estadual",
  "Feriado Municipal",
  "Data comemorativa",
  "Sábado letivo",
  "Reunião de Módulo II",
  "Reunião de pais e responsáveis",
  "Encerramento de registros no DED"
];


switch (window.location.hostname) {
  case 'localhost':
    environment = galileu; // environment para testes
    break;

  case 'ieat.com.br':
    environment = ieat;
    break;

  case 'galileu.com.br':
    environment = galileu;
    break;



  default:
    environment = galileu;
    break;
}
