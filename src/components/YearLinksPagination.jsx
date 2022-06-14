const YearLinksPagination = ()=> {
  return (
    <div className="pagination">
      <button>Newer</button>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <span> ... </span>
        <button className="pagination-number">11</button>
      </div>
      <button>Older</button>
    </div>
  )
}

export default YearLinksPagination;