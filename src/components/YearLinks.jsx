import { Link } from 'react-router-dom';

const YearLinks = (props) => {
let years = [2021, 2020, 2019, 2018];
  if (props.gender === "all"){
    return (
      years.map((item)=>(
        <Link reloadDocument key={`${props.gender}-${item}`} className="button" to={`/${item}`}>{ item }</Link>
      ))
    )
  }else {
    if (props.gender === "f"){
      return (
        years.map((item)=>(
          <Link reloadDocument key={`${props.gender}-${item}`} className="button" to={`/${item}/girls`}>{ item }</Link>
        ))
      )
    }
    if (props.gender === "m"){
      return (
        years.map((item)=>(
          <Link reloadDocument key={`${props.gender}-${item}`} className="button" to={`/${item}/boys`}>{ item }</Link>
        ))
      )
    }
  }
  
}

export default YearLinks;