import React from 'react'
import Courses from './Courses'
import Subheader from './Subheader'
function Datacourses() {

const CourseData = [
    {
      id: 1,
      img: "/pexels-rahulp9800-2078147.jpg",
      subTitle:"Graphic Design",
      title: "UI & UX Design",
      desc: "A library of books provides access to knowledge across many subjects. Readers can explore stories, history, and science in one place. It supports learning, inspiration, and personal growth for all ages.",
      sale:"80 Sales",
      time:"22hr 30min"
    },
    {
      id: 2,
      img: "/pexels-neosiam-625219.jpg",
      subTitle:"Software Development",
      title: "Project Design",
      desc: "Market analysis helps businesses understand customer needs and industry trends. It involves collecting data to make smart decisions and reduce risks. Companies use analysis results to improve products and increase profits.",
      sale:"160 Sales",
      time:"30hr 30min"
    },
    {
      id: 3,
      img: "/pexels-olly-3769021.jpg",
      subTitle:"web development",
      title: "HTML & CSS",
      desc: "Online courses offer flexible learning from anywhere and at any time. Students can choose different fields like technology, languages, and design. These courses make education more accessible and help people improve their skills.",
     sale:"288 Sales",
     time:"16hr 40min"
    }]


  return (
    <div>
        <div className="card">
<Subheader title="Make Online education acessible" description="Education plays a vital role in developing knowledge and critical thinking skills. It empowers individuals to pursue their goals and contribute to society. Access to quality education creates opportunities and improves quality of life for future generations.Education encourages creativity and supports personal growth. It also helps individuals build confidence and adapt to a changing world."/>
<div className="container py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {CourseData.map((item) => (
          <div className="col" key={item.id}>
            <Courses
              img={item.img}
              subTitle={item.subTitle}
              title={item.title}
              desc={item.desc}
              sale={item.sale}
              time={item.time}
            />
          </div>
        ))}
      </div>
    </div>


      </div>
  
    </div>
  )
}

export default Datacourses
