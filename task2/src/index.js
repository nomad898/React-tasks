import User from '@models/User'
import './styles/styles.css'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = '<h1>some text</h1>';
  
    let user = new User();
    user.toString(); 
    return element;
  }
  
  document.body.appendChild(component());