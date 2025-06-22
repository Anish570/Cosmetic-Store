import Slider from './Slider'
import NewArrivals from './NewArrivals'
import TopSold from './TopSold'
import Reviews from './Reviews'
import ExploreMore from './ExploreMore'

const HomePage = () => {
    return (
        <div className=''>
            <Slider />
            <div className='page-padding'>
                <NewArrivals desired_index={3} />
                <TopSold desired_index={5} />
                <ExploreMore />
                <Reviews />
            </div>
        </div>
    )
}

export default HomePage