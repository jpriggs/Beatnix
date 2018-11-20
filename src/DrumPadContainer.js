import React from 'react';
import './DrumPadContainer.scss';

//Create individual button object **child component of ButtonMap**
class ButtonObject extends React.Component{
  constructor(props){
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(event){
    if (event.keyCode === this.props.keyCode){
      document.getElementById(this.props.btnId).classList.add('drumpad-active');
      this.playSound();
      setTimeout(() => document.getElementById(this.props.btnId).classList.remove('drumpad-active'), 100);
      ;
    }
  }
  playSound(event){
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();

    //Adds box shadow animation on key or button press
    if(document.getElementById("drum-machine").classList.contains("drum-machine-active")) {
        document.getElementById("drum-machine").classList.remove("drum-machine-active");
    }
    document.getElementById("drum-machine").classList.add("drum-machine-active");
    setTimeout(() => document.getElementById("drum-machine").classList.remove("drum-machine-active"), 200);
    this.props.showName(this.props.btnId.replace(/-/g, ' '));
  }
  render(){
    return (
      <div className="drum-pad" id={this.props.btnId} onClick={this.playSound}>
        <audio className="clip" id={this.props.keyTrigger} src={this.props.btnAudio}></audio>
        <p>{this.props.keyTrigger}</p>
      </div>
    )
  }
}

//Create all buttons in a matrix **child component of App**
class ButtonMap extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    let buttons = this.props.triggers.map((button, idx, triggersArr) => {
      return (
        <ButtonObject btnId={triggersArr[idx].id} btnAudio={triggersArr[idx].url}
          keyTrigger={triggersArr[idx].keyTrigger} keyCode={triggersArr[idx].keyCode}
          showName={this.props.showName} />
      )
    });
    return (
      <div>{buttons}</div>
    )
  }
}
export default ButtonMap;
