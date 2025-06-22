import { Link } from 'react-router-dom'
import SectionHeading from '../Pages/HomePage/HomeComponent/SectionHeading'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <SectionHeading title="Footer" />
            <section className='flex items-center justify-center gap-4 text-xl sm:text-3xl md:4xl lg:5xl font-matangi font-bold'>
                <h2>   Find us on social media: </h2>
                <Link to="#">
                    <FaSquareFacebook className='text-blue-500' />
                </Link>
                <Link to="#">
                    <FaSquareWhatsapp className='text-green-500' />
                </Link>
                <Link to="#">
                    <FaSquareInstagram className='text-pink-600' />
                </Link>
            </section>
            <div className="w-full h-[20dvh] md:h-[40dvh] bg-gray-500 text-white flex items-center justify-center">

            </div>
        </div>
    )
}

export default Footer