import {useState} from 'react';

  const YearLinksPagination = (props)=> {
  const numberofpages = props.numberofpages;
  return (

    <div className="pagination">
      <button onClick={()=> {
        if(props.pageNumber>1){
          props.setPageNumber(props.pageNumber - 1);
        }
      }}>Newer</button>
      <div>
        <button onClick={()=> props.setPageNumber(1)}>1</button>
        <button onClick={()=> props.setPageNumber(2)}>2</button>
        <button onClick={()=> props.setPageNumber(3)}>3</button>
        <button onClick={()=> props.setPageNumber(4)}>4</button>
        <span> ... </span>
        <button className="pagination-number" onClick={()=> props.setPageNumber(props.numberofpages)}>{ props.numberofpages }</button>
      </div>
      <button onClick={()=> {
        if (props.pageNumber<props.numberofpages){
          props.setPageNumber(props.pageNumber + 1);
        }
      }}>Older</button>
    </div>
  )
}

export default YearLinksPagination;