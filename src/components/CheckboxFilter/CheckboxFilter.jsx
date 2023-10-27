import {useContext,useEffect} from 'react'
import './checkboxfilter.style.scss'
import { CoursesCTX } from '../../context/CoursesContext'

const CheckboxFilter = ({title,first,second,third}) => {
  const {filterCourses,params,setParams} = useContext(CoursesCTX) 

  useEffect(()=>{
  filterCourses()

  },[params])

  const change = ({target:{name,checked}})=>{
    checked?setParams({...params,[title]:[...params[title],name]}):setParams({...params,[title]:[...params[title].filter(e=>!e.includes(name))]})
 
  }
  return (
    <div className='level-container'>
        <h2>{title}</h2>
        
        <div>
        <input type="checkbox" name={first} id={first} onClick={change}/>
        <label htmlFor={first}>{first}</label>
        </div>
        
        <div>
        <input type="checkbox" name={second} id={second} onClick={change} />
        <label htmlFor={second}>{second}</label>
        </div>
        
        <div>
        <input type="checkbox" name={third} id={third}  onClick={change}/>
        <label htmlFor={third}>{third}</label>
        </div>
    </div>
  )
}

export default CheckboxFilter