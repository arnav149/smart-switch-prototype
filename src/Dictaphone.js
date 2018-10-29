import React, {Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import './Dictaphone.css';
import Mic from './Mic.png'

const options ={
  autoStart:false
}



class Dictaphone extends Component {


  constructor(){
    super();
    this.state={
      in:''
    }
  }

  onButtonClick=()=>{
    fetch('http://localhost:3000/',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({in: this.state.in})
    })
    .then(response => response.json())
    .catch(err=>console.log('error'))
  }

  render() {
    const { finalTranscript,stopListening,startListening,transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props


    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div className='measure center pa4 black-80'>
        <button className='ma2 pa2 grow bg-light-green f4' onClick={resetTranscript}>Reset</button>
        <div>
        <span className='f3 ma2 shadow'>{transcript}</span>
        </div>
        <img className='ma2' alt='' src={Mic} onClick={startListening} />
        <div>
        <button className='ma2 grow pa2 bg-light-green f4' onClick={stopListening} >Stop Listening</button>
        <button className='ma2 grow pa2 bg-light-green f4' onClick={()=>this.setState({in:finalTranscript})} >Set State</button>
        <button className='ma2 grow pa2 bg-light-green f4' onClick={this.onButtonClick} >Send to Server</button>
        </div>
      </div>
    )
  }
}

export default SpeechRecognition(options)(Dictaphone);
