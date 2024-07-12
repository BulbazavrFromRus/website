import img from "./../img/projects/02-big.jpg"
import BtnGitHub from "../components/btnGitHub/BtnGitHub"
import { projects } from "../helpers/projectList"

import { useParams } from "react-router-dom"

const Project = () =>{

    const {id} = useParams();
    const project = projects[id]

    console.log(project)


    return (
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>
                

                <img src={project.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>



                {/* 
                Этот код работает так:
                если проверка до && выполняется, то мы идём в следующему блоку кода (правую)
                */}
                {project.gitHubLink && (
                       <BtnGitHub link="https://github.com/BulbazavrFromRus"/>
                )}



                
            </div>
        </div>
    </main>
    )
}

export default Project