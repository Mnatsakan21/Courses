import {useEffect,useContext} from 'react'
import { CoursesCTX } from '../../context/CoursesContext'
import './range.style.scss'
import { Slider } from '@mui/material'

const Range = () => {
  const {filterCourses,params,setParams} = useContext(CoursesCTX)

  useEffect(()=>{
    filterCourses()
  },[params.Price])

  const changeRange = (e,data) => {
    setParams({...params,Price:data,})
  }

  return (
    <div className='range-container'>
      <h2>Price Range</h2>
      <Slider
      max={200}
      onChange={changeRange}
      value={params.Price}
      valueLabelDisplay="auto"/>

      <div>
        <div>
        <p>Min price</p>
        <input type="number" min="0" onChange={(e)=>{setParams({...params,Price:[e.target.valueAsNumber,params.Price[1]]})}} value={params.Price[0]}/><p>$</p>
        </div>
        <div>
        <p>Max price</p>
        <input type="number" max="200" onChange={(e)=>{setParams({...params,Price:[e.target.valueAsNumber,params.Price[0]]})}}  value={params.Price[1]}/><p>$</p>
        </div>
      </div>
    </div>
  )
}

export default Range