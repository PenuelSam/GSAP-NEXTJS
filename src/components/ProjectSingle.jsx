import Image from "next/image"


const ProjectSingle = ({project, setArrayRef}) => {
  return (
    <div className={`${project.hasMargin === true ? `min-w-[300px] w-[40%] mt-[40rem]` : `min-w-[300px] w-[40%]`} flex flex-col items-center`} ref={setArrayRef}>
       <div className="project-single-image-wrapper">
       <Image src={project.image}  alt={project.name} className="image rounded-lg"/>
       </div>
        <h1 className="text-[2rem] text-white">{project.name}</h1>
    </div>
  )
}

export default ProjectSingle
