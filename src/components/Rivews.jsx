import React from 'react'
import Subheader from './Subheader'
import CardRivews from './CardRivews'

function Rivews() {
  const dataRivewes = [{id:1,desc:"For me, online courses are useful but sometimes hard to follow. I miss the interaction with teachers and classmates. However, I can’t deny that they are cheaper and save a lot of time. I usually take short courses to learn something specific, like Excel or communication skills.",img:"/handsome-cheerful-man-with-glasses_274222-2341.jpg" ,Name:"Antony Jone" ,jobTitle:"Software engineer"} ,
    {id:2,desc:"I think online courses are a great way to learn new skills. They give me the freedom to study whenever I want, even after work. I’ve taken courses in web development and design, and they helped me improve my career.",img:"/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" ,Name:"Ema Watson" ,jobTitle:"Designer"} ,
    {id:3,desc:"I love online courses because they make learning fun and easy. There are so many options in different fields, and I can study from home. I also enjoy getting certificates after finishing each course — it makes me feel proud and motivated to keep learning.",img:"/confident-successful-confident-young-handsome-man-shirt-tie_488220-84265.jpg" ,Name:"Mark Arthar" ,jobTitle:"Developer"}]
  return (
    <div className='container'>
      
      <Subheader title={"Each and every client is important"} description={"When we explore new ideas, we learn not only from books or teachers but also from our own experiences. This kind of learning helps us think creatively, solve problems, and become more confident."}/>
 <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
  {dataRivewes.map((item) => (
    <div className="col mt-5" key={item.id} >
      <CardRivews
        desc={item.desc}
        img={item.img}
        Name={item.Name}
        jobTitle={item.jobTitle}
      />
    </div>
  ))}
</div>

  {/* kkkkkkkkkk */}
    </div>
  )
}

export default Rivews
