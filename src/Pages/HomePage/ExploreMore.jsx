import SectionHeading from './HomeComponent/SectionHeading'
import Products from '../../SampleDatas/Products'
import ProductSection from './HomeComponent/ProductSection'
const ExploreMore = () => {
    return (
        <div>
            <SectionHeading title="Explore More" />
            <ProductSection products={Products} />
        </div>
    )
}

export default ExploreMore 