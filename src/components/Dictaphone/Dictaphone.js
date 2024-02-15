import React , {useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Aux from '../../Hoc/auxlliary';
import MicIcon from '@material-ui/icons/Mic';
import Modal from '../Modal/Modal';
import classes from './DictaPhone.module.css';

const Dictaphone = (props) => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  useEffect(() => {
    async function call(){
      await SpeechRecognition.startListening();
    }
    call();
  }, []);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  
  // SpeechRecognition.startListening()
  return (
    <Aux>
        <Modal click={props.speechHandle}>
          <div className={classes.Dictaphone}>
            <div className={classes.Mic}>
              <div className={classes.MicIcon}>
              <MicIcon style={{fontSize : "100" , color : 'green'}}/>
              </div>
            </div>
            <div className={classes.controls}>
              {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
              {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
              <button onClick={()=>{props.speakResultSubmit(transcript); props.speechHandle()}}>OK</button>
              <button onClick={()=>{resetTranscript() ; SpeechRecognition.startListening()}}>Speak Again</button>
            </div>
            <div className={classes.transcript}>
              <p>{transcript}</p>
            </div>
          </div>
        </Modal>
    </Aux>
  )
}
export default Dictaphone