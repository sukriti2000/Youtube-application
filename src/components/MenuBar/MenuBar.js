import React , {Component} from 'react';
import MicIcon from '@material-ui/icons/Mic';
import YouTubeIcon from '@material-ui/icons/YouTube';
import classes from './MenuBar.module.css';
import DictaPhone from '../Dictaphone/Dictaphone';

class SearchBar extends Component{
    state = {
        searchTerm : '',
        speaking : false,
    }
    handleChange = (event)=>{
        this.setState({searchTerm : event.target.value});
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchTerm);
    }
    speechHandle = ()=>{
        this.setState({speaking : !this.state.speaking});
    }
    speakResultHandle = (result)=>{
        this.setState({searchTerm : result});
        const {onFormSubmit} = this.props;
        onFormSubmit(result);
    }
    render(){
        let dictaPhone = null;
        if(this.state.speaking){
            dictaPhone = (
                <div>
                    <DictaPhone speechHandle={this.speechHandle} speakResultSubmit={this.speakResultHandle}  />
                    <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoPlay={true} ></audio>
                </div>
            )
        }
        return (
            <div className={classes.MenuBar}>
                <div className={classes.Logo}>
                <YouTubeIcon style={{fontSize: '30px' , color: '#FF0000', marginRight: '5px'}}></YouTubeIcon>
                    <h3>YouTube</h3>
                </div>
                <div className={classes.SearchContainer}>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Search..." onChange={this.handleChange} value={this.state.searchTerm}/>
                    </form>
                    <button onClick={this.speechHandle}><MicIcon style={{color: '#aaaaaa' }} className={classes.Mic}></MicIcon></button>
                    {dictaPhone}
                </div>
            </div>
        )   
    } 
    
}

export default SearchBar;    