
type SchoolCardProps = {
    schoolName: string;
    schoolYear: string;
    schoolDescription: string;
}

const SchoolCard = ({
    schoolName, schoolYear, schoolDescription
}: SchoolCardProps) => {
    return (
        <div className="relative flex flex-col md:flex-row py-4 md:ml-4 h-auto md:h-[140px] before:hidden md:before:block before:h-[140px] before:absolute before:top-0 before:w-[2px] before:bg-[#2f353d]">
            <div aria-label="content" className="pl-0 md:pl-11">
                <h2 className="font-semibold text-sm md:text-lg">
                    {schoolName}
                </h2>
                <div className="text-sm">
                    <p className="mb-2 text-xs">
                        {schoolYear}
                    </p>
                    <p className="md:text-sm">
                        {schoolDescription}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SchoolCard