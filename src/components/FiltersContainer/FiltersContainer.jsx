import React from 'react'
import './filterscontainer.style.scss'
import CheckboxFilter from '../CheckboxFilter/CheckboxFilter'
import Range from '../Range/Range'

const FiltersContainer = () => {
  return (
    <div className='filters-container'>
        <CheckboxFilter title="Level" first="Beginner" second="Intermediate" third="Advanced"/>
        <hr/>
        <Range/>
        <hr />
        <CheckboxFilter title="Format" first="Online" second="Offline" third="Hybrid"/>

    </div>
  )
}

export default FiltersContainer