import SortBy from './components/SortBy/SortBy'
import './App.scss'
import CourseType from './components/CourseType/CourseType'
import FiltersContainer from './components/FiltersContainer/FiltersContainer'
import Courses from './components/Courses/Courses'

const App = () => {
  
  return (
   <>
    <main>
      <SortBy/>
      <CourseType/>
      <FiltersContainer/>
      <Courses/>
    </main>
      </>
  )
}

export default App