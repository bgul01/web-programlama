import React from 'react'


type RequestProps = {

    status:'loading'| 'success'| 'eror'; // status loading olabilir veya succes veya eror yoksa hata döner

    
}
const Request = (props:RequestProps) => {
 
    let message = '';
    if(props.status === 'loading'){
        message = 'Yükleniyor'

    }
    if(props.status === 'success'){
        message = 'yüklendi'

    }
    if(props.status === 'eror'){
        message = 'hata'

    }

  return <div>

    {message}
  </div>
  
}

export default Request