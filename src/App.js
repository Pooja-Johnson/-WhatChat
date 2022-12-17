
import './App.css';
let fileReader;
const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content)
    // … do something with the 'content' …
  };
const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };
function App() {
  return (
    <div className='bg'>
   <form className='form'>
  <div className='upload-expense '>
    <label for="file"></label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button className='button'>Submit</button>
  </div>
</form>
</div>
  );
}

export default App;
