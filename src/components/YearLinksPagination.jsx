const YearLinksPagination = (props)=> {
  return (
    <div className="pagination">
      <button 
        disabled={props.pageNumber === 1 ? true : false }
        onClick={()=> {
          if(props.pageNumber>1){
            props.setPageNumber(props.pageNumber - 1);
          }
      }}>Newer</button>
      <div className="hide-mobile">
        { props.pageNumber === 1 ?
          // If first page number
          <>
            <button disabled>
              1
            </button>
            <button onClick={()=> props.setPageNumber(2)}>
              2
            </button>
            <button onClick={()=> props.setPageNumber(3)}>
              3
            </button>
            <button onClick={()=> props.setPageNumber(4)}>
              4
            </button>
            <span> ... </span>
            <button onClick={()=> props.setPageNumber(props.numberofpages)}>
              {props.numberofpages}
            </button>
          </>
          :
          <>
            { props.pageNumber === props.numberofpages ?
            // If last page number
              <>
                <button onClick={()=> props.setPageNumber(1)}>
                  1
                </button>
                <span> ... </span>
                <button onClick={()=> props.setPageNumber(props.numberofpages - 3)}>
                  {props.numberofpages - 3}
                </button>
                <button onClick={()=> props.setPageNumber(props.numberofpages - 2)}>
                  {props.numberofpages - 2}
                </button>
                <button onClick={()=> props.setPageNumber(props.numberofpages - 1)}>
                  {props.numberofpages - 1 }
                </button>
                <button disabled>
                  {props.numberofpages}
                </button>
              </>
              :
              // If in between page numbers
              <>
                <button onClick={()=> props.setPageNumber(1)}>
                  1
                </button>
                {(props.pageNumber > 3) ? <span> ... </span> : "" }
                {
                  (props.pageNumber > 3) && (props.pageNumber === props.numberofpages - 1) ?
                  <button onClick={()=> props.setPageNumber(props.pageNumber - 2)}>
                    {props.pageNumber - 2}
                  </button>
                  :
                  ""
                }
                {
                  (props.pageNumber > 2) ?
                  <button onClick={()=> props.setPageNumber(props.pageNumber - 1)}>
                    {props.pageNumber - 1}
                  </button>
                  :
                  ""
                }
                <button disabled>
                  {props.pageNumber}
                </button>
                {(props.pageNumber < props.numberofpages - 1) ?
                  <button onClick={()=> props.setPageNumber(props.pageNumber + 1)}>
                    {props.pageNumber + 1}
                  </button>
                  :
                  ""
                }
                {(props.pageNumber === 2) ?
                  <button onClick={()=> props.setPageNumber(props.pageNumber + 2)}>
                    {props.pageNumber + 2}
                  </button>
                  :
                  ""
                }
                {(props.pageNumber < props.numberofpages - 2) ? <span> ... </span> : "" }
                <button onClick={()=> props.setPageNumber(props.numberofpages)}>
                  {props.numberofpages}
                </button>
              </>
            }
          </>
        }
      </div>
      <button 
        disabled={props.pageNumber === props.numberofpages ? true : false }
        onClick={()=> {
        if (props.pageNumber<props.numberofpages ){
          props.setPageNumber(props.pageNumber + 1);
        }
      }}>Older</button>
    </div>
  )
}

export default YearLinksPagination;