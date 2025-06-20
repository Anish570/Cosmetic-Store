import ProductSection from './HomeComponent/ProductSection'
import SectionHeading from './HomeComponent/SectionHeading'
import Products from '../../SampleDatas/Products'
const NewArrivals = () => {
    return (
        <div>
            <SectionHeading title="New Arrivals" />
            <ProductSection products={Products} />
        </div>
    )
}

export default NewArrivals