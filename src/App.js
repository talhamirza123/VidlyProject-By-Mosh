// import logo from './logo.svg';
import React, { Component } from 'react';
import Movies from './components/movie';
import './App.css';


class App extends Component {
  state = {  }
  render() { 
    return ( 
           
         <main className="container">
         
        <Movies />
         
         </main>   
            
             );
  }
}
 
export default App;
// function App() {
//   return (
    
//     <main className="container">
//     <h1> Movies </h1>
//     </main>
    
    
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
