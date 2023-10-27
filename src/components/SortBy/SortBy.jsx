import {useState,useContext, useEffect} from 'react'
import './sortby.style.scss'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import { CoursesCTX } from '../../context/CoursesContext'


const SortBy = () => {
    const [show,setShow]=useState(false)
    const {filterCourses,params,setParams} = useContext(CoursesCTX)
   
    useEffect(()=>{
      filterCourses()
    },[params.Sort])


    const change = (e)=>{
      setParams({...params,Sort:e.target.innerText})
      setShow(false)
    }
    
  return (
    <div className='container'>
    
    <div className='sort-by'  onClick={()=>setShow(!show)}>
        <p>Sort by:<span>{params.Sort}</span></p>
        <span>{show?<IoIosArrowUp/>:<IoIosArrowDown/>}</span>
    </div>

    {show && 
    <div className='dropdown-list'>
        <p onClick={change}>Popularity</p>

        <p onClick={change}>Newest</p>    

        <p onClick={change}>Price:low to high</p>   
         
        <p onClick={change}>Price:high to low</p>    
    </div>} 

    </div>      
  )
}

export default SortBy