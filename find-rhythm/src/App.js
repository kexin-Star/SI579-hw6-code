import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import InputGroup from './components/InputGroup';
import SavedWord from './components/SavedWrod';
import OutputWord from './components/OutputWord';

function App() {
  const [inputWord, setInputWord] = useState('');
  const [outputWord, setOutputWord] = useState([]);
  const [findType, setFindType] = useState('');
  const [savedWord, setSavedWord] = useState([]);
  const [isLoading, setIsLoading] = useState('');


  return (
    <main className="container">
      <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
      <h2>https://kexin-star.github.io/SI579-hw6/</h2>
      <div className="row">
          <SavedWord 
            savedList={savedWord}
          />
      </div>

      <div className="row">
          <InputGroup 
            setInput={setInputWord}
            setType={setFindType}
            setOutput={setOutputWord}
            setLoading={setIsLoading}
          />
      </div>

      <div className="output row">
          <OutputWord
            wordToSearch={inputWord} 
            outputWordList={outputWord}
            setSavedWordList={setSavedWord}
            findTypeForSyl={findType}
            showLoading={isLoading}
          />
      </div>
    </main>
    
  );
}

export default App;
