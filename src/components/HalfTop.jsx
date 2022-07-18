const SplitTop = (props) => {

  const favStyleFalse = {
    'background-color': '#862e9c'
  };

  const favStyleTrue = {
    'background-color': 'Green'
  };

  if(!props.seeall){
    if(!props.even){
      return (
        props.firstQuarter.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}>
            <td>
              {`${item.pos}`}. {item.name}
            </td>
            <td>
              <button style={ item.favourite ? favStyleTrue : favStyleFalse} onClick={()=>props.changeFavourite(item.pos)}>
                {item.favourite.toString()}
              </button>
            </td>
            <td>
              <input id={`${props.gender}-${item.pos}`} favourite={ false } value={`${item.pos}`} type="checkbox" onClick={()=> console.log(1)}/>
            </td>

          </tr>
        ))
      )
    } else {
      return (
        props.secondQuarter.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}>
            <td>
              {`${item.pos}`}. {item.name}
            </td>
            <td>
              <button style={ item.favourite ? favStyleTrue : favStyleFalse} onClick={()=>props.changeFavourite(item.pos)}>
                {item.favourite.toString()}
              </button>
              </td>            
          </tr>
        ))
      )
    }
    
  } else {
    if(!props.even){
      return(
        props.firstHalf.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}>
            <td>{`${item.pos}`}. {item.name}</td>
            <td>
              <button style={ item.favourite ? favStyleTrue : favStyleFalse} onClick={()=>props.changeFavourite(item.pos)}>
                {item.favourite.toString()}
              </button>
              </td>            
          </tr>
        ))
      )
    } else {
      return (
        props.secondHalf.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}>
            <td>
              {`${item.pos}`}. {item.name}
            </td>
            <td>
              <button style={ item.favourite ? favStyleTrue : favStyleFalse} onClick={()=>props.changeFavourite(item.pos)}>
                {item.favourite.toString()}
              </button>
            </td>            
          </tr>
        ))
      )
    }
  }
}



export default SplitTop;