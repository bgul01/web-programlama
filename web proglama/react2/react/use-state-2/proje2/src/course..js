import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Ccharp from './images/ccsharp.png'
import Web from './images/kompleweb.jpg'

const courseMap  = {

    Angular: Angular,
    Bootstrap:Bootstrap,
    Ccsharp:Ccharp,
    KompleWeb:Web
}
function Course(courseName) {
    return ( <div>
<img src={courseMap[courseName]} />
    </div> );
}

export default Course;