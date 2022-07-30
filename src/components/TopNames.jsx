const TopNames = (props) => {
  if(props.gender=== "m"){
    if(!props.seeall){
      return (
        props.top10.map((item) => (
          <tr key={`${props.gender}-${item.id}`}>
            <td>{`${item.pos}`}. {item.name}</td>
          </tr>
        ))
      )
    } else {
      return (
        props.top100.map((item) => (
          <tr key={`${props.gender}-${item.id}`}>
            <td>{`${item.pos}`}. {item.name}</td>
          </tr>
        ))
      )
    }
  } else {
    if (props.gender==="f"){
      if(!props.seeall){
        return (
          props.top10.map((item) => (
            <tr key={`${props.gender}-${item.id}`}>
              <td>{`${item.pos}`}. {item.name}</td>
            </tr>
          ))
        )
      } else {
        return (
          props.top100.map((item) => (
            <tr key={`${props.gender}-${item.id}`}>
              <td>{`${item.pos}`}. {item.name}</td>
            </tr>
          ))
        )
      } 
    }
  }
}

export default TopNames;