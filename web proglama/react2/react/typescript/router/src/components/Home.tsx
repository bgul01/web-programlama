import { type } from 'os';
import React from 'react';


type DataComing  = {

    name:string;
    courseNumber : number;
    isBest:boolean;
}
function Home(props:DataComing) {
    return <div>{props.name} merhaba dünyalılar kurs sayısı: {props.courseNumber}
      {props.isBest? <p>en iyisi bu </p> : <p>en iyisi değil</p>}</div>
      
}

export default Home
;