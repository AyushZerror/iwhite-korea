import About from '@/components/about/About'
import Home from '@/components/home/Home'
import Section1 from '@/components/home/Section1'
import Navbar from '@/components/navbar/Navbar'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)


const index = () => {
  const navRef = useRef(null)
  const vid = "https://iwhitekorea.com.ph/wp-content/uploads/2021/10/Brand-Video_Logo-Seoul_Fold-9.mp4"

  useEffect(()=>{
    var tl = gsap.timeline({
      scrollTrigger:{
        start:"top 0%",
        end:"top -5%",
        scrub:1,
      }
    })
    tl.to(navRef.current,{
      backgroundColor:"#FDF9EE",
      color:"black",
      duration:.2,
    },"a")
    tl.to(navRef.current.querySelector(".bag"),{
      backgroundColor:"black",
      color:"#FDF9EE",
      duration:.2
    },"a")
    tl.to(navRef.current.querySelector(".logo"),{
      filter:"invert(1)",
      duration:.2
    },"a")
  },[])
  return (
    <div className='relative'>
      <Navbar navRef={navRef} color={"white"} />
      <Section1 title={false} vid={vid}/>
      <About />
    </div>
  )
}

export default index