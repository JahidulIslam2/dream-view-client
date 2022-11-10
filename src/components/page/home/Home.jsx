import React from 'react';
import image1 from "../../../assets/1.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import image4 from "../../../assets/4.png";
import image5 from "../../../assets/5.png";
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../../share/card/Card';

const Home = () => {
  const service = useLoaderData();


  return (
    <>
      <div className="carousel w-full lg:h-96 md:h-80 sm:h-48">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image1} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-ghost w-1/5  h-80">❮</a>
            <a href="#slide2" className="btn btn-ghost w-1/5  h-80">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={image2} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-ghost w-1/5  h-80">❮</a>
            <a href="#slide3" className="btn btn-ghost w-1/5  h-80">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image3} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-ghost w-1/5  h-80">❮</a>
            <a href="#slide4" className="btn btn-ghost w-1/5  h-80">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image4} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-ghost w-1/5  h-80">❮</a>
            <a href="#slide5" className="btn btn-ghost w-1/5  h-80">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={image5} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-ghost w-1/5  h-80">❮</a>
            <a href="#slide1" className="btn btn-ghost w-1/5  h-80">❯</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-zinc-300 mt-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-20 pb-10 rounded-lg p-6 ">
          {
            service.map(item => <Card
              item={item}
              keys={item._id}>

            </Card>)
          }
        </div>
      
     
      </div>

    </>

  )


};

export default Home;