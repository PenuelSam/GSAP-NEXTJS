import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


function useArrayRef() {
    const letterRef = useRef([])
    letterRef.current = []
    return[letterRef, (ref) => ref && letterRef.current.push(ref)]
}

const TextReveal = () => {
    const [letterRef, setLetterRef] = useArrayRef()
    const triggerRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const reveal = gsap.to(letterRef.current, {
            scrollTrigger: {
                trigger: triggerRef.current,
                scrub: true,
                start: "top center",
                end: "bottom 100%"
            },
            color: "#333",
            duration: 1,
            stagger: 1
        })
        return () => {
            reveal.kill()
        }
    },[letterRef])


    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt veritatis voluptatem unde. Perferendis quas deserunt, rem dicta unde quam, non atque quo ullam dolores illum officia, distinctio doloremque sapiente."

    return(
        <div ref={triggerRef} className="bg-white w-full h-[100vh] flex items-center justify-center py-[2rem] px-[1.5rem]">
            <div>
                {
                    text.split("").map((letter, index) => (
                        <span ref={setLetterRef} key={index} className="text-[3rem] text-[#f3f3f3]">{letter}</span>
                    ))
                }
               
            </div>
        </div>
    )
}

export default TextReveal