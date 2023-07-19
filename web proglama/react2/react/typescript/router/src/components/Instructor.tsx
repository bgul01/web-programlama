
import { type } from 'os'
import React from 'react'

import {instructorProps} from './propstype'  // props u nkarşılındaki isimle yazdık propstype.ts ile uzaktan erişebiliriz böyle 




function instructor(props:instructorProps) {
  return (
    <div>{props.instructorNameLastName.firstname} {props.instructorNameLastName.lastname}</div>
  )
}

export default instructor