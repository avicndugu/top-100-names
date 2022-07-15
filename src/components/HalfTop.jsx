const SplitTop = (props) => {
  if(!props.seeall){
    if(!props.even){
      return (
        props.firstQuarter.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}>
            <td>{`${item.pos}`}. {item.name}</td>
            <td><button>A</button></td>
            <td><input id={`${props.gender}-${item.pos}`} favourite={ false } value={`${item.pos}`} type="checkbox" onClick={()=> console.log(1)}/></td>
          </tr>
        ))
      )
    } else {
      return (
        props.secondQuarter.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td><td><button>A</button></td></tr>
        ))
      )
    }
    
  } else {
    if(!props.even){
      return(
        props.firstHalf.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td><td><button>A</button></td></tr>
        ))
      )
    } else {
      return (
        props.secondHalf.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td><td><button>A</button></td></tr>
        ))
      )
    }
  }
}



export default SplitTop;