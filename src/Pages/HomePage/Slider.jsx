import { useState } from 'react'
import { banner02, banner03
} from '../../assets/images'

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [
        banner01, banner02, banner03, banner02, banner01, banner03
    ]

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <main className='relative h-main w-full overflow-hidden bg-background'>
            <section className='relative w-full h-full'>
                <img
                    src={images[currentIndex]}
                    alt="bannerImage"
                    className='w-full h-full object-cover transition-all duration-500 ease-in-out'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent'></div>

                <button
                    className='absolute top-1/2 left-4 -translate-y-1/2 bg-foreground/20 hover:bg-foreground/30 backdrop-blur-sm text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 border border-foreground/20 shadow-lg'
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    className='absolute top-1/2 right-4 -translate-y-1/2 bg-foreground/20 hover:bg-foreground/30 backdrop-blur-sm text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 border border-foreground/20 shadow-lg'
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3'>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-foreground scale-125 shadow-lg'
                                : 'bg-foreground/50 hover:bg-foreground/70'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className='absolute top-6 right-6 bg-primary/30 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-medium border border-foreground/20 shadow-lg roboto-condensed-medium'>
                    {currentIndex + 1} / {images.length}
                </div>

                <div className='absolute top-6 left-6 bg-accent/20 backdrop-blur-sm p-2 rounded-full border border-accent/30 shadow-lg'>
                    <div className='w-2 h-2 bg-accent rounded-full'></div>
                </div>
              
            </section>
        </main>
    )
}

export default Slider