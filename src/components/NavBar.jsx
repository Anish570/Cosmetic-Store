import { IoIosSearch } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className='fixed top-0 left-0 z-10 flex justify-between items-center text-center text-pink-700 nav-background w-full h-navbar page-padding'>
            <div className="text-[14px] flex justify-start gap-x-1 sm:gap-x-3 md:gap-x-5 lg:gap-x-7 w-[33%] font-julius-sans-one font-semibold">
                <Link to="/">
                    <p>  Products</p>
                </Link>
                <Link to="/">
                    <p>Categories</p>
                </Link>
            </div>
            <Link to="/" className='text-[30px] julius-sans-one font-bold w-[33%]'>MakeUp Store</Link>
            <div className='flex items-center justify-end gap-x-1 sm:gap-x-3 md:gap-x-5 lg:gap-x-7 w-[33%]'>
                <IoIosSearch className='xl md:text-2xl lg:text-3xl mx-2' />
                <LiaShoppingBagSolid className='xl md:text-2xl lg:text-3xl mx-2' />
                <IoMenuOutline className='xl md:text-2xl lg:text-3xl mx-2' />
            </div>

        </div>
    )
}

export default NavBar