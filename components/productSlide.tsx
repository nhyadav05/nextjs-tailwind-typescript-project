'use client'
import React from "react";
import Slider from "react-slick"
import Slide from "./slide";
import Product from "./product";

const ProductSlide:React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slidedata = [
    {
      id: 0,
      img: "/banner1.jpeg",
      title: "Trending Item",
      mainTitle: "Women's latest fashion sale",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner2.avif",
      title: "Trending Accessories",
      mainTitle: "Modern Sunglasses",
      price: "$15",
    },
    {
      id: 2,
      img: "/banner4.webp",
      title: "Trending Accessories",
      mainTitle: "Modern Sunglasses",
      price: "$15",
    },
  ];
  return (
    <div className='py-20 container m-auto'>
    <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
        {slidedata.map((item) => (
          <Slide
          key={item.id}
          img={item.img}
          title={item.title}
          mainTitle={item.mainTitle}
          price={item.price}
          />
          
        ) )}
      </Slider>

    </div>
  </div>
  )
};

export default ProductSlide;