import heartoutline from '../icons/heart-regular.png';
import heartsolid from '../icons/heart-solid.png';

const iconWidth = {
  width: '30px'
};

const TopNames = (props) => {
  if(props.gender=== "m"){
    if(!props.seeall){
      return (
        props.top10.map((item) => (
          <tr key={`${props.gender}-${item.id}`}>
            <td>{`${item.pos}`}. {item.name}</td>
            <td>
              <img style={iconWidth} src={ item.favourite ? heartsolid : heartoutline } onClick={()=>{ props.changeFavourite(item.id)}} alt={ item.favourite ? "favourite" : "not favourite" } />
            </td>
          </tr>
        ))
      )
    } else {
      return (
        props.top100.map((item) => (
          <tr key={`${props.gender}-${item.id}`}>
            <td>{`${item.pos}`}. {item.name}</td>
            <td>
              <img style={iconWidth} src={ item.favourite ? heartsolid : heartoutline } onClick={()=>{ props.changeFavourite(item.id)}} alt={ item.favourite ? "favourite" : "not favourite" } />
            </td>
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
              <td>
                <img style={iconWidth} src={ item.favourite ? heartsolid : heartoutline } onClick={()=>{ props.changeFavourite(item.id)}} alt={ item.favourite ? "favourite" : "not favourite" } />
              </td>
            </tr>
          ))
        )
      } else {
        return (
          props.top100.map((item) => (
            <tr key={`${props.gender}-${item.id}`}>
              <td>{`${item.pos}`}. {item.name}</td>
              <td>
                <img style={iconWidth} src={ item.favourite ? heartsolid : heartoutline } onClick={()=>{ props.changeFavourite(item.id)}} alt={ item.favourite ? "favourite" : "not favourite" } />
              </td>
            </tr>
          ))
        )
      } 
    }
  }
}

export default TopNames;