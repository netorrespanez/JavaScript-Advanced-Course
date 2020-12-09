import getDateNow from './utils/date.js';
import './utils/date.js';

const year = 2019;
// Modules - allow us to share code between files
class App {
  constructor() {
    this.render()  
  }  
  
  render() {
    document.getElementById('root').innerHTML = `
      <div>Date: ${getDateNow()}</div>
    `
  }
}

// import / export

new App()