import { signOut } from "firebase/auth";

import React, { useContext } from 'react';
import './App.css';
import app from "./store/Config";
import { useState } from 'react';
import TransformText from './components/TransformText';
import {useNavigate} from 'react-router-dom'

function Parse() {
  const navigate = useNavigate()
  let fileReader;
  const [content, setContent] = useState([])
  const [active_user, setActive_user] = useState('')


  const handleFileRead = (e) => {
    const messages = fileReader.result.split(/\r?\n/);
    setContent(messages)
    //cons
   // messages.forEach(message=>{
      //console.log(message)
      //const date_user=message.split(/\r?-/);
      
    };

const handleFileChosen = (file) => {
    fileReader = new FileReader();
    //reader.addEventListener('loadend', txtLoadEndHandler);
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    //setActive_user(e.target.value)
    //console.log(active_user)
  };
  
   const handleSignout = async (e) =>{
      e.preventDefault()
      console.log(app.auth().currentUser)
      await app.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      })
      console.log(app.auth().currentUser)
      navigate('/')
    }
  
  return (
    <div className='bg'>
       <form className='form' onSubmit={handleSubmit}>
          <div className='upload-expense '>
              <label htmlFor="file"></label>
              <input type='file'id='file'name='file' multiple
                  onChange={e => handleFileChosen(e.target.files[0])}
                />
          </div>
        
      
      <br></br>
              <button className='button'>Submit</button>
        </form>

           <input className='Name-text' placeholder='Enter active user'
            type='text'
            name='user'
            value={active_user}
            onChange={e=>{setActive_user(e.target.value)
            }}/>
            
           <button className="login-with-google-btn out" onClick={handleSignout}>
        Sign out
      </button>

      <div className='message-space'>
      {content.map((mess)=>{
        return(
          <div >
            <TransformText a_user={active_user} me={mess}/>
          </div>
        );
         
      })}
    </div>
   {/*<TransformText text={content[0]}/>*/}
  
  
</div>
);
}

export default Parse;
