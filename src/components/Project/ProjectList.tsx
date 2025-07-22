import ProjectCard from "./ProjectCard"

type ProjectListProps = {
    projects: any[]
}

const ProjectList = ({
    projects = []
}: ProjectListProps) => {
    return (
        <div className="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 2xl:gap-5">
            <div>
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} 
                    projectTitle={project.title}
                    projectDescription={project.description}
                    projectImage={project.image?.url}
                    projectTechStack={project.tech_stack}
                    projectGithubLink={project.github_link}
                    projectWebsiteLink={project.website_link}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectList