import SchoolCard from "./SchoolCard";

type School = {
    name: string;
    year: string;
    description: string;
}

type SchoolListProps = {
    schools: School[]
}

const SchoolList = ({
    schools = []
}: SchoolListProps) => {
    return (
        <article>
            <header data-aos="fade-down">
                <div className="text-2xl font-bold text-white mb-5 flex gap-3 items-center">
                    <div className="h-[1px] w-20 bg-amber-200"></div>
                    Education
                </div>
            </header>
                <section className="md:pb-12">
                    {schools.map((school, idx) => (
                        <SchoolCard key={idx} 
                        schoolName={school.name}
                        schoolYear={school.year}
                        schoolDescription={school.description}
                        />
                    ))}
                </section>
        </article>
    )
}

export default SchoolList