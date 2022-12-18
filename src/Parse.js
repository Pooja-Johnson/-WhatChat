import firebase from 'firebase/compat/app'
import { useState } from 'react';
import TransformText from './components/TransformText';

//import { parseString } from 'whatsapp-chat-parser';

function Parse() {
  let fileReader;
  //console.log(firebase.auth().currentUser)
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
  
  
  return (
    <div className='bg'>
  <div className='upload-expense '>
    <label for="file"></label>
    <input
        type='file'
        id='file'
        className='input-file'
        onChange={e => handleFileChosen(e.target.files[0])}
      />
      <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='user'
        value={active_user}
        onChange={e=>{setActive_user(e.target.value)
        }}
        

      />

      </form>
      <div>
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
  <div>
    <button className='button'>Submit</button>
  </div>
</div>
);
}

export default Parse;
