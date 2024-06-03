import React from 'react';
import { portfolio } from '../../data/portfolio';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const PortfolioCards =()=>{
    const projects = portfolio;

    const handleProjectModal=(type,name="none",description="none",video="none")=>{
        const modal = document.getElementById("projectModal");

        if(type==="open"){
            modal.className += " is-active is-clipped";
            
            //Title
            document.getElementById("portfolio__modal-title").innerHTML = name.toUpperCase();

            //Video
            if(video) document.getElementById("source").setAttribute('src',video);
            //document.getElementById("video").load();

            //Description
            document.getElementsByTagName("p")[0].innerHTML = description;

        }else{
            modal.className = "modal";

            //Stop video
            //document.getElementById("video").pause();
            //document.getElementById("video").currentTime = 0;
        }
    }

    return(
        <div className="columns is-multiline">    
            {
                projects.map(project =>(
                    <div className="column is-one-third" key={project.id} onClick={()=>handleProjectModal("open",project.name,project.description,project.video)}>
                        <div className="cards">
                            <ProjectCard {...project} />
                        </div>
                    </div>               
                ))
            }

            {/* Modal */}
            <ProjectModal func={handleProjectModal} />
        </div>
    );
}

export default PortfolioCards;