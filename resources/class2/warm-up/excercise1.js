/**
 * Object && Arrays
 *
 */

let myList; //undefined
myList = [];
myList = ['Platanos', 'Manzanas'];

myList[0];  //Platanos

/**
 * Devuelve si el profesor debe ir o no al trabajo en funcion del numero de estudiantes
 * 
 * @param {Number} listStudent 
 */

//Primer aproximacion
function checkStudents(listStudent) {
    // QUE PASA SI listStudent = undefined
    //let goToWork = false // No trabajo    
    /* if (listStudent.length) {
        if (listStudent.length > 0) {
            goToWork = true;
        }
    } */
    return  listStudent.length && listStudent.length > 0 //goToWork;
}

// Segunda aproximacion
function checkStudents(listStudent) {
    let isArray = listStudent || {};   
    let goToWork = false; // No trabajo


    if (isArray.length && isArray.length > 0) {
        goToWork = true;
    } 
    
    return goToWork;
}

//
function checkStudents(listStudent) {
    let isArray = listStudent || {};    //listStudent = ['Elena'];
    let goToWork = isArray.length && isArray.length > 0; // No trabajo
    return goToWork;
}


//Ultima aproximacion
function checkStudents(listStudent) {
    let isArray = listStudent || {};    //listStudent = ['Elena'];
    return Boolean (isArray.length && isArray.length > 0 && isArray[0] ); // No trabajo
}

function checkStudents(listStudent) {
    let isArray = listStudent || {};    //listStudent = [''];
    return isArray.length && isArray.length > 0 && isArray[0]
}
///





////

function myFun() {
    console.log('Hola vamos a ejecutar checkStudents');
    if (checkStudents([''])) {
        a();
    }

        b();
    
}