
const ReviewCard = ({ username, profile, review }) => {
    return (
        <div className="p-2 bg-white shadow-lg w-[300px] h-[200px] rounded-md  space-y-4 font-sans">
            <section className="flex items-center gap-2">
                <img
                    src={profile}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = "/fallback.png";
                    }}
                />
                <p className="text-sm text-textSecondary font-semibold">by {username}</p>
            </section>
            <p className="text-[14px] text-gray-500 font-sans font-light text-textSecondary ">
                {review}
            </p>
        </div>
    )
}

export default ReviewCard