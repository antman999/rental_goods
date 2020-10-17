import React from 'react'
import './preview.scss' 

const Preview = (props) => {
  return (
    <div  className='collection-preview'>
      <h2 className='title'>{props.title.toUpperCase()}</h2>
      <div className='preview'>
        {props.items.map((item) => (
          <div key={item.id }>
            {item.name}
         </div>
       ))}
      </div>
    </div>
  )
}
export default Preview
