import { Link } from 'react-router-dom';

function YearLinks(props) {
  if (props.gender === "all"){
    return (
      props.yearslist.map((item)=>(
        <Link key={`${props.gender}-${item.year}`} className="button" to={`/${item.year}`} state={{resetviewall: false}}>{ item.year }</Link>
      ))
    )
  }else {
    if (props.gender === "f"){
      return (
        props.yearslist.map((item)=>(
          <Link key={`${props.gender}-${item.year}`} className="button" to={`/${item.year}/girls`} state={{resetviewall: false}}>{ item.year }</Link>
        ))
      )
    }
    if (props.gender === "m"){
      return (
        props.yearslist.map((item)=>(
          <Link key={`${props.gender}-${item.year}`} className="button" to={`/${item.year}/boys`} state={{resetviewall: false}}>{ item.year }</Link>
        ))
      )
    }
  }
  
}

export default YearLinks;