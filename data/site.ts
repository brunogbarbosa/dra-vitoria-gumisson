export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export const site = {
  name: 'Vitória Gumisson', monogram: 'VG', headline: 'Seu sorriso. Sua essência.',
  cro: 'CRO-SP 154164',
  bio: 'Cirurgiã-dentista, CRO-SP 154164. Lentes em resina e um olhar dedicado ao sorriso. Conheça os registros da Dra. Vitória Gumisson e converse sobre sua avaliação.',
  education: [] as string[], specialties: ['Lentes em resina'],
  phone: '+55 (17) 99603-1131', whatsapp: '5517996031131',
  whatsappUrl: 'https://wa.me/5517996031131?text=Ol%C3%A1%2C%20Dra.%20Vit%C3%B3ria!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: '', locations: 'Fernandópolis-SP · Votuporanga-SP · Chapadão do Sul-MS',
  professionalPhilosophy: 'Um sorriso com a sua identidade.',
  instagram: 'https://www.instagram.com/dravitoriagumisson/', instagramHandle: '@dravitoriagumisson',
  philosophy: ['SEU SORRISO.', 'SUA HISTÓRIA.', 'SUA ESSÊNCIA.'],
  colors: {"paper":"#f4f1e7","ink":"#343b28","taupe":"#8a7952","champagne":"#d2bc7d","dark":"#202619","wine":"#202619","muted":"#666b58","light":"#fbf9f2","surface":"#e7e3d2","shade":"#151b11"},
  images: {hero:'/images/vitoria-hero.png', essence:'/images/vitoria-essencia.png', about:'/images/vitoria-sobre.png', beauty:'/images/vitoria-experiencia.png'},
  procedures: [] as Procedure[], office: [] as {src:string;alt:string}[], testimonials: [] as Testimonial[],
  results: {enabled:true, items:[
    {image:'/images/resultado-01.jpg',label:'O sorriso, em detalhe',alt:'Registro original de antes e depois do sorriso, com fotografias sobrepostas.',orientation:'vertical',beforeShare:652/1328,comparisonRatio:1284/1328},
    {image:'/images/resultado-02.jpg',label:'Um novo ângulo',alt:'Fotografia única em detalhe do sorriso.',orientation:'single',beforeShare:.5,comparisonRatio:1178/1600},
    {image:'/images/resultado-03.jpg',label:'Naturalidade no sorriso',alt:'Registro original de antes e depois do sorriso, com fotografias sobrepostas.',orientation:'vertical',beforeShare:681/1376,comparisonRatio:1284/1376},
    {image:'/images/resultado-04.jpg',label:'Cada sorriso, uma história',alt:'Registro original de antes e depois do sorriso, com fotografias sobrepostas.',orientation:'vertical',beforeShare:634/1243,comparisonRatio:1284/1243},
    {image:'/images/resultado-05.jpg',label:'Beleza nos detalhes',alt:'Fotografia única em detalhe do sorriso, preservada em sua orientação original.',orientation:'single',beforeShare:.5,comparisonRatio:1204/1600},
    {image:'/images/resultado-06.jpg',label:'Identidade em cada detalhe',alt:'Registro original de antes e depois do sorriso, com fotografias sobrepostas.',orientation:'vertical',beforeShare:604/1257,comparisonRatio:1284/1257},
  ]},
  seo:{title:'Dra. Vitória Gumisson | Lentes em Resina',description:'Conheça a Dra. Vitória Gumisson, cirurgiã-dentista, CRO-SP 154164. Veja registros reais de sorrisos e agende sua avaliação pelo WhatsApp.',url:''},
};
export const appointmentUrl = site.whatsappUrl;
