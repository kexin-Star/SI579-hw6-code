const SavedWord = (props) => {
    const { savedList } = props;
    console.log("save word "+ savedList);
    if(savedList.length === 0){
        console.log('no saved word');
        return <div className="col">Saved words: (none)</div>    
        
    } else{
        return <div className="col"><span>Saved words:{savedList.join(',')}</span></div>   
    }
}

export default SavedWord;