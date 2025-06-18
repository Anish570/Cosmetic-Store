import NavBar from "./NavBar"

export const Notfound = () => {
    return (
        <div className='content'>
            <NavBar />
            <div className='w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-3xl text-gray-600 font-bold'>
                <h1>
                    404 Page Notfound
                </h1>
            </div>
        </div >
    )
}
