const SplitTop = (props) => {
  if(!props.seeall){
    if(!props.even){
      return (
        props.firstQuarter.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
        ))
      )
    } else {
      return (
        props.secondQuarter.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
        ))
      )
    }
    
  } else {
    if(!props.even){
      return(
        props.firstHalf.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
        ))
      )
    } else {
      return (
        props.secondHalf.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
        ))
      )
    }
  }
}



export default SplitTop;