
const Aboutme = () => {
    return (
        <div className="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5" aria-label="About me">
            <article>
                <header data-aos="fade-down">
                    <div className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                        About Me
                        <div className="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate"></div>
                    </div>
                </header>
                <section className="text-sm md:text-lg text-justify flex flex-col gap-4 lg:flex-row md:gap-8 md:justify-left md:items-center">
                    <div className="md:w-7/12">
                        <p data-aos="fade-left" data-aos-delay="300" className="mb-7">
                            I am a self-taught programmer passionate about technology and software development. 
                            My journey began with curiosity and determination, leading me to specialize in backend development, 
                            particularly with frameworks like NestJS. While I excel in building robust APIs and managing databases, 
                            I am also an aspiring full-stack developer eager to create user-friendly interfaces.
                        </p>
                        <p data-aos="fade-left" data-aos-delay="500" className="mb-3">
                            Learning independently has made me adaptable and resourceful, and I thrive on solving complex problems and mastering new tools. 
                            My goal is to become a well-rounded developer capable of contributing to meaningful projects and tackling challenges across the entire development stack.
                        </p>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="300" className="flex justify-center max-w-[470px] w-full">
                        <img className="w-9/12 rounded-full mb-3 fadein-up" src="https://avatars.githubusercontent.com/u/97150877?v=4" />
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Aboutme