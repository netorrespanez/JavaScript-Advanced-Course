// {Id, Titulo, NivelMoral e Imagenes}

//http://ottcache.dof6.com/movistarplus/android.tablet/contents/1540607/details?mediaType=FOTOV&profile=DTHTITULAR&mode=VODRU7D&version=7.1


let values = ['Id', 'Titulo'];


function setValues(selectedValues, item) {
  let result = {};

  Object.keys(item).filter((elem, index) => {
    selectedValues.forEach(element => elem === element); // elem === 'id' || 'Titulo'
    result = { elem: Object.values(item)[index] }
  })


  selectedValues.map(elem => {
    Object.keys(item).forEach((element,index) => {
      if(elem === element) {
        result = {elem: Object.values(item)[index]}
        console.log(element)
      }
    })
  })
}



//Algo así:
let result = {
  Id: 1540607,
  Titulo: "Antidisturbios (T1): Ep.1 Osorio",
  NivelMoral: {},
  Imagenes: []
}