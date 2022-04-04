const SaveButton = (props) => {
    const { wordToSave,setSave } = props;

    const addToSavedWords = () => {
        setSave(
            (e)=>{
                if(!e.includes(wordToSave)){
                    return [...e,wordToSave];
                } else{
                    return e;
                }
            }
        )
    }
    return(
        <button  
        className="btn btn-success" 
        onClick={addToSavedWords}>
            (Save)
        </button>
    ) 
}

export default SaveButton;