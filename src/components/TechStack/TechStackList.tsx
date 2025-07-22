import TechStackCard from "./TechStackCard";

type TechStack = {
    name: string;
    icon: string;
    knowledgeLevel: string;
}

type TechStackProps = {
    techStack: TechStack[];
}

const TechStackList = ({ 
    techStack
}: TechStackProps) => {
    return (
        <article className="mb-[80px] md:mb-0">
            <header data-aos="fade-down">
                <div className="text-2xl font-bold text-white mb-5 flex gap-3 items-center">
                    <div className="h-[1px] w-20 bg-amber-200"></div>
                    Skills
                </div>
            </header>
            <section>
                <div className="grid grid-cols-2 gap-4 pb-12 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                    {techStack.map((stack, idx) => (
                        <TechStackCard key={idx} 
                        stackname={stack.name}
                        stackicon={stack.icon}
                        stackknowledgeLevel={stack.knowledgeLevel}
                        />
                    ))}
                </div>
            </section>
        </article>
    )
}

export default TechStackList