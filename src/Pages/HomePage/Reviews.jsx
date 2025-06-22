import ReviewCard from './HomeComponent/ReviewCard';
import SectionHeading from './HomeComponent/SectionHeading'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
const Reviews = () => {
    const dummyReviews = [
        {
            id: 1,
            username: "John Doe",
            profile: "https://via.placeholder.com/150",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            username: "Jane Smith",
            profile: "https://via.placeholder.com/150",
            review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 3,
            username: "Alice Johnson",
            profile: "https://via.placeholder.com/150",
            review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ]

    return (
        <div className="w-full bg-background py-10">
            <SectionHeading title="Reviews" />
            {/* make a carousel with left and right button arrow to slide the reviews */}
            <div className="flex justify-center items-center">
                <button className="p-2  rounded-l-md">
                    <MdOutlineArrowBackIos className='text-3xl sm:text-4xl md:text-5xl' />
                </button>
                <div className="flex justify-center items-center p-1 pb-10 gap-5 overflow-x-auto">
                    {dummyReviews.map((review) => (
                        <div key={review.id}>
                            <ReviewCard
                                username={review.username}
                                profile={review.profile}
                                review={review.review}
                            />
                        </div>
                    ))}
                </div>

                <button className="p-2  rounded-r-md">
                    <MdOutlineArrowForwardIos className='text-3xl sm:text-4xl md:text-5xl ' />
                </button>

            </div>
        </div >
    )
}
export default Reviews