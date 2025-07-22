
type TechStackCardProps = {
    stackname: string;
    stackicon: string;
    stackknowledgeLevel: string;
}

const TechStackCard = ({ stackname, stackicon, stackknowledgeLevel }: TechStackCardProps) => {
    return (
        <div className="flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3 h-[82px]">
            <div className="flex items-center justify-center lg:p-2">
                <img width="45" height="45" loading="lazy" className="h-10 w-10" src={stackicon} alt={stackname} />
            </div>
            <div className="flex items-center text-sm md:text-base lg:text-lg">
                <h1 className="font-medium text-secondary transition-all duration-300 translate-y-0">
                    {stackname}
                </h1>
                <div className="opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {stackknowledgeLevel}
                </div>
            </div>
        </div>
    )
}

export default TechStackCard