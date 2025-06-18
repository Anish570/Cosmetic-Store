import { IoIosSearch } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMenuOutline } from "react-icons/io5";
const NavBar = () => {
    return (
        <div className='flex justify-between items-center text-center text-pink-700 bg-foreground w-full h-navbar'>
            <div className="bg-blue-200 w-[33%]">
                {/* place other items here */}
            </div>
            <div className='text-lg font-bold bg-yellow-200 w-[33%]'>MakeUp Store</div>
            <div className='flex items-center justify-end gap-x-1 sm:gap-x-3 md:gap-x-5 lg:gap-x-7 bg-green-200 w-[33%]'>
                <IoIosSearch className='text-2xl mx-2' />
                <LiaShoppingBagSolid className='text-2xl mx-2' />
                <IoMenuOutline className='text-2xl mx-2' />
            </div>

        </div>
    )
}

export default NavBar