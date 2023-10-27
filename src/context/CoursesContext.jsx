import {createContext,useEffect,useState} from 'react'
import axios from 'axios'

export const CoursesCTX = createContext(null)

const CoursesContext = ({children}) => {

    const [globalData,setGlobalData]=useState()
    const [courses,setCourses] = useState()
    const [params,setParams] = useState({
      Level:[],
      Format:[],
      Price:[0,200],
      Sort:"Newest"
    })

    useEffect(()=>{
        (async () => {
          try {
            const {data:{Courses}} = await axios.get("http://165.232.74.168/api/v2/courses/getByFilter",{params:{
              language: 'en',
              format:"Online_Offline_Hybrid",
              level:'Beginner_Intermediate_Advanced',
            }})
              setCourses(Courses)
             setGlobalData(Courses)
          } catch (error) {
            console.log(error)
          }
        })()
      },[])


    const filterCourses = ()=>{
      if(!globalData)return
      
      const filterLevels = params.Level.length?globalData.filter((e)=>{ 
          if(e.level == params.Level[0]||e.level == params.Level[1]|| e.level == params.Level[2])return e
      }):globalData
      
      const filterFormat = params.Format.length?filterLevels.filter((e)=>{ 
        if(e.lessonType == params.Format[0]||e.lessonType == params.Format[1]|| e.lessonType == params.Format[2])return e
     }):filterLevels

     const filterPrice = filterFormat.filter((e)=>{ 
      if(e.price >= params.Price[0]&&e.price <= params.Price[1])return e 
      })

      switch(params.Sort){
        case "Newest":
        return setCourses(filterPrice)
        case "Price:low to high":
          return setCourses([...filterPrice.sort((a,b)=> a.price-b.price)])
        case "Price:high to low":
          return setCourses([...filterPrice.sort((a,b)=> b.price-a.price)])
        case "Popularity":
          return setCourses([...filterPrice.sort((a,b)=> b.bought-a.bought)])
      }

    }
    

    
      return (
    <CoursesCTX.Provider value={{courses,filterCourses,params,setParams}}>{children}</CoursesCTX.Provider>
  )
}

export default CoursesContext