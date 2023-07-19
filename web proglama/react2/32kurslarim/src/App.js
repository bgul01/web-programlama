import './App.css';
import React from 'react';
import Courses from './Courses';
import Loading from './Loading';
import axios from 'axios';
import { useEffect, useState } from 'react';




function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)
  const deleteCourse = (id) => {
    const afterDelete = courses.filter((courses) => courses.id !== id);
    setCourses(afterDelete);
  }

  const fethCourses = async () => {
    setLoading(true);
    try {

      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
      setLoading(false); // çünkü başlangıçta veriyi çekene kadar loading ögzüekecek çektikten sonra false yapıyıruoz

    } catch (error) {

      setLoading(false);

    }


  }

  useEffect(() => {

    fethCourses();

  }, [])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Courses courses={courses} removeCourse={deleteCourse} /> //sayfa yükelnirken loading sayfasını göster yüklendikten sonra coruses ı göster dedik

      )}

    </div>
  );
}

export default App;
