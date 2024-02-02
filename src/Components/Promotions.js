import React from 'react';
import Slider from 'react-slick';
import { Box, Slide } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const PromotionsSlider = () => {
    const promotions = [
      { id: 2, image: '../images/promotions/banner-img2.webp' },
      { id: 3, image: '../images/promotions/banner-img3.webp' },
      { id: 4, image: '../images/promotions/banner-img4.webp' },
      { id: 5, image: '../images/promotions/banner-img5.webp' }
      // Add more promotion items as needed
    ];
  
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };
    const containerRef=useRef()
    const [promotionIndex, setPromotionIndex] = useState(0);
    const [show,setShow]=useState(true)
    useEffect(()=>{
      setTimeout(()=>{
      setShow(false)
      },3000)
      
          const intervalId= setInterval(()=>{
              setPromotionIndex(i=>(i+1) % promotions.length)
      setShow(true)
      setTimeout(()=>{
          setShow(false)
          },3000)
      
          },4000)
      
          return()=>{
              clearInterval(intervalId)
          }
      },[])
    return (
      <Slide container={containerRef.current}
      direction={show?'left':'right'}
      in={show}

      timeout={{
          enter: 500,
          exit: 800
      }}>
        <img
            src={process.env.PUBLIC_URL + promotions[promotionIndex].image}
            style={{ width: '100%', height: 'auto', borderRadius: ' 10px', marginTop:'10px'}}
          />
      </Slide>
    );
  };
  
  export default PromotionsSlider;
  