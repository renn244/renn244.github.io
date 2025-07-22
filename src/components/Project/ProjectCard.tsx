import { useState } from "react";

type ProjectCardProps = {
    projectTitle: string;
    projectDescription: string;
    projectImage?: string;
    projectTechStack: string;
    projectGithubLink: string;
    projectWebsiteLink?: string;
}

const ProjectCard = ({
    projectTitle,
    projectDescription,
    projectImage,
    projectTechStack,
    projectGithubLink,
    projectWebsiteLink
}: ProjectCardProps) => {
    const [openDialog, setOpenDialog] = useState(false);

    return (
         <div className="flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 transition-all hover:translate-y-[-10px]">
            {projectImage && (
                <div aria-label="images" className="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0">
                    <img onClick={() => setOpenDialog(true)} loading="lazy" className="w-full h-48 object-cover rounded-xl" src={projectImage} alt="" />
                </div>
            )}
            <div aria-label="content" className="w-full flex flex-col gap-2 text-sm md:text-base lg:text-lg">
                <h1 className="font-medium text-secondary text-left">
                    {projectTitle}
                </h1>
                <p className="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                    {projectDescription}
                </p>
                <div className="w-full mt-4 text-normal text-sm text-left text-amber-200">
                    {projectTechStack}
                </div>
                <div className="w-full flex justify-end">
                    <div className="flex cursor-pointer items-end gap-2 text-primary">
                        <a href={projectGithubLink}>
                            <img src="media/github.svg" />
                        </a>
                        {projectWebsiteLink && (
                            <a href={projectWebsiteLink}>
                                <img src="media/view.svg" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <dialog open={openDialog} onClose={() => setOpenDialog(false)} className="dialog bg-transparent">
                <div className="max-w-[1000px] w-full flex items-center gap-3 relative outline-none">
                    <div className="flex space-x-7 items-center overflow-hidden w-[1000px]">
                        <div id={`image-${projectTitle}`} className="flex transition-all duration-300 ease-in-out">
                            <img className="w-full h-full object-cover" src={projectImage} alt="" />
                        </div>
                    </div>
                    <div className="h-[461px]"> 
                        <img onClick={() => setOpenDialog(false)} aria-label="button close" className="text-white relative top-0" src="media/close.svg" />
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ProjectCard