import React from 'react';
import IoT from './IoT.png'
import './Logo.css';
import Tilt from 'react-tilt';


class Logo extends React.Component
{
	onLogoClick=()=>{
    window.responsiveVoice.speak('Welcome to smart switch');
		window.responsiveVoice.speak('Lights have been turned on for a long time');
		window.responsiveVoice.speak('Do you still want them to be on?');
  }
	render(){
	return(
    <div className='ma4 mt0'>
		<div className='ma4'>
		<Tilt className='Tilt'options={{ max : 45 }} style={{ height: 150, width: 150 }}>
      <div className="pa3"><img onClick={this.onLogoClick} alt='logo' src={IoT}/></div>
		</Tilt>
		</div>
		<div>
    <span className='f2 hover-dark-blue'>Internet of Things</span>
		</div>
    </div>


    );
	}
}

export default Logo;
