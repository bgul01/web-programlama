import React from 'react';
import {useParams} from 'react-router-dom';

function MemberDetail() {

  const params  =useParams();
  const memberId  =params.memberId;

return <div>MemberDetail {memberId}</div>;
 
    
  
}

export default MemberDetail