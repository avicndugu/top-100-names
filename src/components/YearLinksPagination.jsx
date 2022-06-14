import {useState} from 'react';

  const YearLinksPagination = (props)=> {
  const pages = props.pages;
  const [pageNumber, setPageNumber] = useState(1);

  console.log(pageNumber);
  console.log(pageNumber);
  return (
    <div className="pagination">
      <button onClick={()=> {
        if(pageNumber>1){
          setPageNumber(pageNumber - 1);
        }
      }}>Newer</button>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <span> ... </span>
        <button className="pagination-number">{ pages }</button>
      </div>
      <button onClick={()=> {
        if (pageNumber<pages){
          setPageNumber(pageNumber + 1);
        }
      }}>Older</button>
    </div>
  )
}

export default YearLinksPagination;