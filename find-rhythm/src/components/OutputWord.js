import { groupBy } from "./tools";
import SaveButton from "./SaveButton";


const OutputWord = (props) => {
    const { outputWordList,setSavedWordList,findTypeForSyl,wordToSearch,showLoading } = props;

    const formOutputList = () => {
        let wordList=[];
        const groupData = groupBy(outputWordList, 'numSyllables');
        wordList.push(showLoading);

        if(wordToSearch){
            if(outputWordList.length){
                if(findTypeForSyl === 'rhymes'){ 
                    wordList.shift();
                    wordList.push(<h2 key='rhyme'>Words that rhyme with {wordToSearch}:</h2>)
                    for(const syl in groupData){
                       wordList.push(<h3 key={syl}>Syllables: {syl}</h3>)
                       for(const rhy of groupData[syl]){
                           wordList.push(
                               <li key={rhy.word}>
                                   {rhy.word + ' '}
                                   <SaveButton 
                                    setSave={setSavedWordList}
                                    wordToSave={rhy.word}
                                   />
                               </li>
                           )
                       }
                    };
                } 
                else if(findTypeForSyl === 'similar'){
                    wordList.shift(); 
                    wordList.push(<h2 key='similar'>Words with a similar meaning to {wordToSearch}:</h2>)
                    for(const syl in groupData){
                        for(const syn of groupData[syl]){
                            wordList.push(
                                <li key={syn.word}>
                                    {syn.word + ' '}
                                    <SaveButton 
                                    setSave={setSavedWordList}
                                    wordToSave={syn.word}
                                    />
                                </li>
                            )
                        } 
                    }
                };
            } else{
                wordList.shift();
                wordList.push(<h2 key="noResult">No results</h2>)
                }   
        }
        else{
            wordList.push('');
        }
        
        return wordList;
    }

    return (
        <div className="output-row">
            {formOutputList()}
        </div>
        ); //return the modified world list
}

export default OutputWord;