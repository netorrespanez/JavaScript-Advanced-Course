export default function getDate() {
  const year = new Date().getFullYear();
  const date = `${new Date()}, year: ${year}`;  
  return date;
}
