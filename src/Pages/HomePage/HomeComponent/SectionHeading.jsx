const SectionHeading = ({ title = "Cosmetic Store" }) => {
    return (
        <div className='h-title flex items-center justify-center text-3xl gap-x-4 font-bold julius-sans-one'>
            <span className="w-[160px] h-[3px] rounded-md bg-black" />
            {title}
            <span className="w-[160px] h-[3px] rounded-md bg-black" />
        </div>
    )
}
export default SectionHeading