


              //VARIABILI

const arrCats = [
  {
    nome : 'Silvestro',
    eta : 1,
    color : '#040514',
    sesso : 'maschio'
  },
  {
    nome : 'Pina',
    eta : 2,
    color : '#21CD21',
    sesso : 'femmina'
  },
  {
    nome : 'Peppa',
    eta : 8,
    color : '#21C7CD',
    sesso : 'femmina'
  },
  {
    nome : 'Gianluca',
    eta : 4,
    color : '#CD2121',
    sesso : 'maschio'
  },
  {
    nome : 'Leopoldo',
    eta : 2,
    color : '#000000',
    sesso : 'maschio'
  },
  {
    nome : 'Brasiliana',
    eta : 1,
    color : '#2121CD',
    sesso : 'femmina'
  },
]
//console.log(arrCats);





              // LOGICA


arrCats.forEach((cat) => {
  //console.log(cat);
  $('#uno ul').append(stampaVideo(cat.color, cat.nome));
})



const pink = '#ff00e6';
const blue = '#0084ff';
const arrCatsRibbons = arrCats.map((cat) => {
  let color;
  
  if(cat.sesso === 'femmina'){
    color = pink;
  }else{
    color = blue;
  }

  let opacity = cat.eta / 10;
  return {
    ...cat,
    ribbon:{
      color,
      opacity
    }
  }
})
//console.log(arrCatsRibbons);


// filtro maschi e femmine
const catsFem = arrCatsRibbons.filter((cat) =>cat.sesso === "femmina");
const catsMas = arrCatsRibbons.filter((cat) =>cat.sesso === "maschio");
console.log(catsFem, catsMas)



catsFem.forEach((cat) => {
  $('#due-fem ul').append(stampaVideo(cat.color, cat.nome, cat.ribbon.color, cat.ribbon.opacity));
})
catsMas.forEach((cat) => {
  $('#due-mas ul').append(stampaVideo(cat.color, cat.nome, cat.ribbon.color, cat.ribbon.opacity));
})



              // FUNZIONI


function stampaVideo(color, name, ...ribbon){
  
  let ribbonTag="";
  if(ribbon.lenght>0){
    ribbonTag = `
    <i class="fas fa-ribbon" style="color:${ribbon[0]};
                                  opacity:${ribbon[1]}"></i>
    `
  }
  
  let html =`
    <li>
      <i class="fas fa-cat" style="color:${color}"></i>
      ${ribbonTag}
      <span>${name}</span>
    </li>
  `
  return html;
}