import { Projects } from "@/data/projects"
import ProjectSingle from "./ProjectSingle"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useArrayRef } from "./TextReveal"
import { useEffect } from "react"


const Project = () => {
    const [arrayRef, setArrayRef] = useArrayRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        arrayRef.current.forEach((project) => {
            const wrapper = project.querySelector(".project-single-image-wrapper");
            const image = project.querySelector(".image");
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: project,
                  
                    start: "top bottom",
                    toggleActions: "restart none none reset",
                    
                }
            })
            tl.to(wrapper, {
                ease: "power2",
                duration: 2,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            })
            tl.to(image, {
                duration: 2,
                scale: 1
            }, "<")
        })
    },[arrayRef]);

  return (
    <main className="w-full h-full py-5 flex flex-wrap  justify-center gap-[10rem]">
      {Projects.map((project) => (
        <ProjectSingle key={project.name} setArrayRef={setArrayRef}  project={project}/>
      ))}
    </main>
  )
}

export default Project
