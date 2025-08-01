
const Home = () => {
    return (
        <main className="mt-10 md:mt-1 flex flex-col gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
            <div data-aos="fade-left" className="flex justify-center">
                <img src="https://avatars.githubusercontent.com/u/97150877?v=4" fetchPriority="high" width="300" height="300"
                className="w-10/12 md:h-auto rounded-full border-4 border-amber-200"/>
            </div>
            <div className="space-y-2 text-left px-10 text-center md:text-left">
                <p data-aos="fade-right" className="text-amber-200">
                    Hello classNamemates!, I'm
                </p>
                <h1 data-aos="fade-up" className="text-4xl font-bold md:text-5xl text-white ">
                    Renato Santos
                </h1>
                <p data-aos="zoom-in" data-aos-delay="300" className="text-lg text-white cursor-pointer underline-offset-4 hover:underline flex gap-2">
                    <img width="20px" src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" />renatodsantosjr9@gmail.com
                </p>
                <p data-aos="fade-right" data-aos-delay="300" className="text-white pr-4 max-w-[300px]  pb-0 md:pb-8 lg:pb-12 ">
                    I am an aspiring full stack developer that focuses on backend development and it's maintainability and scalability through testing. 
                </p>
            </div>
        </main>
    )
}

export default Home