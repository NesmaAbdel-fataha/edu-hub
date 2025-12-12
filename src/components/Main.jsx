import React from 'react'
import Home from './Home'
import Card from './Card';

import Datacourses from './Datacourses';
import Rivews from './Rivews';

function Main() {
  const cardData = [
    {
      id: 1,
      img: "/booklibrary.jpg",
      title: "Books Library",
      desc: "A library of books provides access to knowledge across many subjects. Readers can explore stories, history, and science in one place. It supports learning, inspiration, and personal growth for all ages.",
    },
    {
      id: 2,
      img: "/market-analysis-growth.jpg",
      title: "Market Analysis",
      desc: "Market analysis helps businesses understand customer needs and industry trends. It involves collecting data to make smart decisions and reduce risks. Companies use analysis results to improve products and increase profits.",
    },
    {
      id: 3,
      img: "/online-learning-courses-2.jpg",
      title: "50 + online courses",
      desc: "Online courses offer flexible learning from anywhere and at any time. Students can choose different fields like technology, languages, and design. These courses make education more accessible and help people improve their skills quickly.",
    }
  ];

  return (
    <main className='card'>
      

      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cardData.map(item => (
            <div className="col" key={item.id}>
               <Card
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
      </div>
    <Datacourses/>
        <div className="card">
<Rivews />
        </div>
 

     

    </main>
  );
}

export default Main;
