import { Link } from 'react-router-dom';

const YearLinks = (props) => {
let years = [2021, 2020, 2019, 2018];
  if (props.gender === "all"){
    return (
      years.map((item)=>(
        <li key={`${props.gender}-${item}`}><Link reloadDocument className="button" to={`/${item}`}>{ item }</Link></li>
      ))
    )
  }else {
    if (props.gender === "f"){
      return (
        years.map((item)=>(
          <li key={`${props.gender}-${item}`}><Link reloadDocument className="button" to={`/${item}/girls`}>{ item }</Link></li>
        ))
      )
    }
    if (props.gender === "m"){
      return (
        years.map((item)=>(
          <li key={`${props.gender}-${item}`}><Link reloadDocument className="button" to={`/${item}/boys`}>{ item }</Link></li>
        ))
      )
    }
  }
  
}

export default YearLinks;