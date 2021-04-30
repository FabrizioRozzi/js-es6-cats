


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
  let catRibbon =[
    ...cat,
    ribbon={
      colorRib : "",
      opacityRib : 0
    }
    
  ];
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
console.log(arrCatsRibbons);

              // FUNZIONI


function stampaVideo(color, name){
  let html =`
    <li>
      <i class="fas fa-cat" style="color:${color}"></i>
      <span>${name}</span>
    </li>
  `
  return html;
}