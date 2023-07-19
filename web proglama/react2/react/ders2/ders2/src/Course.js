import React from 'react'

export const Course = ({image,title,description}) => {
  //const title = props.title;
  //const description = props.description;
  //const{title,description}  = props;
  return (
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image} alt="kurslarım"/>
    </figure>
  </div>
  <div className="card-content">
  <h4 className="title is-4">{title}</h4>
    <div className="media">
    
      <div className="media-content">
        
      {description}
        
    </div>
    
    
  </div>
</div>

</div>
  )
}
/*    <div>
    <img src={image} />
    <div>{title}</div>
    <div>{description}</div>
    </div>
  )
}
*/ 