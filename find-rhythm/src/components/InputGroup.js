import { useState } from "react";
import { getDatamuseRhymeUrl,getDatamuseSimilarToUrl } from "./tools";

const InputGroup = (props) => {
    const { setInput, setType, setOutput, setLoading } = props;
    const [ getInputWord, setGetInputWord ] = useState('');

    const findRhymes = () => {
        console.log(getInputWord);
        
        setType('rhymes');
        setLoading('...loading');
        fetch(getDatamuseRhymeUrl(getInputWord))
        .then((response) => response.json())
        .then((data) => {
            // This invokes the callback that updates the page.
            setOutput(data);
        }, (err) => {
            console.error(err);
        }); 
        setInputWordForApp();
 
    }

    const findSynonyms = () => {
        setType('similar');
        setLoading('...loading');
        fetch(getDatamuseSimilarToUrl(getInputWord))
        .then((response) => response.json())
        .then((data) => {
            // This invokes the callback that updates the page.
            setOutput(data);
        }, (err) => {
            console.error(err);
        });
        setInputWordForApp();
    }

    const setInputWordForApp = () => {
        if(getInputWord){
            setInput(getInputWord);
        } else{
            setInput('');
        }
    }

    const keyDown = (e) => {
        if(e.keyCode === 13){ //keycode for enter
            findRhymes();
        }
    }

    return(
        <div className="input-group col">
            <input 
                value = {getInputWord}
                onChange={(e) => setGetInputWord(e.target.value)} //make InputWord from input
                onKeyDown={keyDown}     
                className="form-control" 
                type="text" 
                placeholder="Enter a word" 
                id="word_input" />

            <button 
                id="show_rhymes" 
                type="button" 
                className="btn btn-primary"
                onClick={findRhymes}>
                    Show rhyming words
                </button>

            <button 
                id="show_synonyms" 
                type="button" 
                className="btn btn-secondary"
                onClick={findSynonyms}>
                    Show synonyms
            </button>        
        </div>
    )
}

export default InputGroup;