import heartoutline from '../icons/heart-regular.png';
import heartsolid from '../icons/heart-solid.png';

const SplitTop = (props) => {
  const iconWidth = {
    width: '30px'
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
              <img style={iconWidth} src={ item.favourite ? heartsolid : heartoutline } onClick={()=>props.changeFavourite(item.pos)} alt={ item.favourite ? "favourite" : "not favourite" } />
              {/*<img className="icons" src={heartsolid} alt="favourite" />*/}
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
              <img style={iconWidth} src={ item.favourite ? heartsolid : heartoutline } onClick={()=>props.changeFavourite(item.pos)} alt={ item.favourite ? "favourite" : "not favourite" } />
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
              <img style={iconWidth} src={ item.favourite ? heartsolid : heartoutline } onClick={()=>props.changeFavourite(item.pos)} alt={ item.favourite ? "favourite" : "not favourite" } />
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
              <img style={iconWidth} src={ item.favourite ? heartsolid : heartoutline } onClick={()=>props.changeFavourite(item.pos)} alt={ item.favourite ? "favourite" : "not favourite" } />
            </td>            
          </tr>
        ))
      )
    }
  }
}



export default SplitTop;