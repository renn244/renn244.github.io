import Aboutme from "../components/Aboutme"
import SchoolList from "../components/School/SchoolList"
import TechStackList from "../components/TechStack/TechStackList"

const About = () => {
    return (
        <>
            <Aboutme />
            <div className="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3" aria-label="Skills">

                <SchoolList schools={[]} />

                <TechStackList techStack={[]} />
                
            </div>
        </>
    )
}

export default About