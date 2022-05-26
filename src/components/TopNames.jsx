const TopNames = (props) => {
  if(!props.seeall){
    if(props.gender=== "m"){
      return (
        props.top10.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
        ))
      )
    } else {
      if (props.gender==="f"){
        return (
          props.top10.map((item) => (
            <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
          ))
        )
      }
    }
  } else {
    if(props.gender=== "m"){
      return (
        props.top100.map((item) => (
          <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
        ))
      )
    } else {
      if (props.gender==="f"){
        return (
          props.top100.map((item) => (
            <tr key={`${props.gender}-${item.pos}`}><td>{`${item.pos}`}. {item.name}</td></tr>
          ))
        )
      }
    }
  }
}

export default TopNames;