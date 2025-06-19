const SectionHeading = ({ title = "Cosmetic Store" }) => {
    return (
        <div>
            <div className='h-title flex items-center justify-center bg-foreground text-2xl gap-x-4 font-bold julius-sans-one'>
                <span className="w-[160px] h-[3px] rounded-md bg-black" />
                {title} Julius
                <span className="w-[160px] h-[3px] rounded-md bg-black" />
            </div>
            <div className='h-title flex items-center justify-center bg-foreground text-2xl font-bold font-matangi'>{title} matangi-bold अनिश</div>
        </div>
    )
}
export default SectionHeading