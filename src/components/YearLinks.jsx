import { Link } from 'react-router-dom';

function YearLinks(props) {
let years = [2021, 2020, 2019, 2018];

  if (props.gender === "all"){
    return (
      years.map((item)=>(
        <Link key={`${props.gender}-${item}`} className="button" to={`/${item}`} state={{resetviewall: false}}>{ item }</Link>
      ))
    )
  }else {
    if (props.gender === "f"){
      return (
        years.map((item)=>(
          <Link key={`${props.gender}-${item}`} className="button" to={`/${item}/girls`} state={{resetviewall: false}}>{ item }</Link>
        ))
      )
    }
    if (props.gender === "m"){
      return (
        years.map((item)=>(
          <Link key={`${props.gender}-${item}`} className="button" to={`/${item}/boys`} state={{resetviewall: false}}>{ item }</Link>
        ))
      )
    }
  }
  
}

export default YearLinks;