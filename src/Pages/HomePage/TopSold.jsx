import ProductSection from './HomeComponent/ProductSection'
import SectionHeading from './HomeComponent/SectionHeading'
import Products from '../../SampleDatas/Products'
const TopSold = () => {
    return (
        <div>
            <SectionHeading title="Best Seller" />
            <ProductSection desired_index={5} products={Products} />
        </div>
    )
}

export default TopSold