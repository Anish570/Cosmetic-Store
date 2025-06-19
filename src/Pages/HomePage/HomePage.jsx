import Slider from './Slider'
import NewArrivals from './NewArrivals'
import TopSold from './TopSold'
import Reviews from './Reviews'

const HomePage = () => {
    return (
        <div className='h-main bg-gray-200'>
            <Slider />
            <div className='page-padding'>
                <NewArrivals />
                <TopSold />
                <Reviews />
            </div>
        </div>
    )
}

export default HomePage