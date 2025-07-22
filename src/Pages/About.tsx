import Aboutme from "../components/Aboutme"
import SchoolList from "../components/School/SchoolList"
import TechStackList from "../components/TechStack/TechStackList"
import schoolData from "../data/School.data.json";
import techStack from "../data/TechStack.data.json";

const About = () => {
    const schools = schoolData;
    const techStacks = techStack;

    return (
        <>
            <Aboutme />
            <div className="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3" aria-label="Skills">

                <SchoolList schools={schools || []} />

                <TechStackList techStack={techStacks || []} />
                
            </div>
        </>
    )
}

export default About