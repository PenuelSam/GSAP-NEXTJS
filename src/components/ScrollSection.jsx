import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const ScrollSection = () => {
    const sectionRef = useRef(null)
    const trigggerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        },{
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: trigggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true
            }
        })

        return () => {
        pin.kill()
        }
    },[])

  return (
    <section className='scroll-section-outer'>
      <div ref={trigggerRef}>
        <div ref={sectionRef} className='scroll-section-inner '>
            <div className='scroll-section'>
                <h1>Section 1</h1>
            </div>
            <div className='scroll-section'>
                <h1>Section 2</h1>
            </div>
            <div className='scroll-section'>
                <h1>Section 3</h1>
            </div>
            <div className='scroll-section'>
                <h1>Section 4</h1>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollSection
