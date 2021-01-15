import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
    <h1>
      Hi from a reafct app
    </h1>
    </div>
  )
  
}

render(<App />, document.getElementById('root'));

export default App

// import React from 'react';
// import ReactDom from 'react-dom';

// const mainElement = document.createElement('div');
// document.body.appendChild(mainElement);

// const App = () => {
//   return (
//     <h1>
//       Hi from a react app
//     </h1>
//   )
// }

// ReactDom.render(<App />, mainElement);