import {useContext, useEffect, useState} from 'react'
import './courses.style.scss'
import { CoursesCTX } from '../../context/CoursesContext'
import {FaUserFriends} from 'react-icons/fa'
import {AiOutlineHeart,AiOutlineFile,AiOutlineCalendar,AiOutlineProfile} from 'react-icons/ai'
import { Pagination } from '@mui/material'

const Courses = () => {
    const {courses} = useContext(CoursesCTX)
    const [pagination,setPagination] = useState({
        from:0,
        to:6,
        page:1
    })

    useEffect(()=>{
        setPagination({from:0,to:6,page:true})
    },[courses])

    const paginationChange = (e)=>{
        if(e.target.ariaLabel.includes("previous")){
            setPagination({from:pagination.from-6,to:pagination.to-6,page:pagination.page-1})
        }else if(e.target.ariaLabel.includes("next")){
            setPagination({from:pagination.from+6,to:pagination.to+6,page:pagination.page+1})
        }else{
            const page  = e.target.ariaLabel.slice(-1)
            const from = (page-1)*6
            const to = from+6
            setPagination({from,to,page})

        }}
    
    
        return (
    <section>
          <div className='courses-container'>  
            {courses && courses.map(({img,title,description,courseType,level,lessonType,price,courseStartDate,bought,courseDate},idx)=>{
                if(idx < pagination.from || idx>=pagination.to)return
                return <div className='course-container' key={idx}>
                    <img src={img} alt="" />
                    <div>
                    <div className='bought'>
                        <span><FaUserFriends/>{bought}</span>
                        <AiOutlineHeart/>
                    </div>
                        <div>
                            <span><AiOutlineFile/> {courseType}</span>
                            <span><AiOutlineCalendar/> {courseDate}</span>
                            <span><AiOutlineProfile/> {level}</span>
                        </div>
                        <div className='title'>
                            <h4>{title} <span>{lessonType}</span></h4>
                            <p>{description}</p>
                        </div>
                        <div className='date'>
                        <span>{courseStartDate}</span><span>{price}$ <span>monthly</span></span>
                        </div>
                    </div>
                </div>
            })}
            </div>
            
            <div className='pagination'>
            <Pagination  page={pagination.page} count={courses &&Math.ceil(courses.length/6)} shape='rounded' onChange={paginationChange}/>
            </div>
    </section>
  )
}

export default Courses