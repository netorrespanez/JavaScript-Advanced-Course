/* function getDate() {
  const date = new Date();  
  return date;
}
 */
export function getDate() {
  const date = new Date();  
  return date;
}

// Use of variables 
export const year = new Date().getFullYear();

//----------------------------------------------
//Just one export per file

function getDate() {
  const date = new Date();  
  return date;
}

const year = new Date().getFullYear();

export { getDate, year };
