
function SearchHeader({search})
const handleFormSubmit  = (event) => {
event.preventDefault();

}






{
    return ( <div className="searcDiv">
        <form onSubmit={handleFormSubmit}  className="searchForm" >
 <label>ne ariyorusnuz</label>
 <input type="text"></input>
    </form>
    </div>  );
}

export default SearchHeader ;