import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Logo from './Logo';
import Dictaphone from './Dictaphone';


class App extends React.Component{


render(){
    return (

      <div className="App">
      <Particles className='parti'
     params={{
         particles: {
           number:{
             value:40,
             density:{
               enable:true,
               value_area:800
             }
           },
          move:
          {
            enable:true,
            speed:7
          },

         }
       }}/>
      <Logo />
      <Dictaphone />
      </div>
    );
 }
}

export default App;
