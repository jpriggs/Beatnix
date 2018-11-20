import React from 'react';
import ButtonMap from './DrumPadContainer.js';
import './index.scss';

//Key mapping
const keyDict = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Piano Chord (G major)',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Piano Chord (D major)',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Piano Chord (C major)',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Open-Hi-Hat',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Closed-Hi-Hat',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Kick-n-Hat',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' //Change this***
}];

//Parent Class
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      triggerDict: keyDict,
      displayName: ''
    }
    this.displayName = this.displayName.bind(this);
    this.clearName = this.clearName.bind(this);
  }
  displayName(name){
    this.setState({
      displayName: name
    });
  }
  clearName(){
    this.setState({
      displayName: ''
    });
  }
  render(){
   return (
     <div>
       <div className="drum-machine" id="drum-machine">
         <div className="logo">beatnix</div>
         <div className="display" id="display">{this.state.displayName}</div>
         <div className="pad-container">
           <ButtonMap triggers={this.state.triggerDict} showName={this.displayName} />
         </div>
       </div>
       <div className="footer">created by:<a href="https://github.com/jpriggs" target="_blank" rel="noopener noreferrer">jasonRigdon</a></div>
     </div>
   )
  }
}

export default App;
