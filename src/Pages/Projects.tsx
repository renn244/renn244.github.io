import ProjectList from "../components/Project/ProjectList"

const Projects = () => {
    return (
        <main className="mx-3 py-10 px-12">
            <article>
                <header>
                    <div className="text-2xl font-bold text-white mb-10 flex flex-col justify-center items-center">
                        <h4 className="mb-2">
                            Projects
                        </h4>
                        <h4 className="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
                            Here are some of the projects I have worked on. Not all are finished. you can also visit my github repo to look at more of my projects.
                        </h4>
                    </div>
                </header>
                <section>
                    <div data-aos="zoom-in">
                        <ProjectList projects={[]} />
                    </div>
                </section>
            </article>
        </main>
    )
}

export default Projects