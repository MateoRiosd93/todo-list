import { Link } from 'wouter'
import HomeImage from '../../../assets/illustrations/human-men.png'

export function Home() {
    return (
        <>
            <div>
                <img src={HomeImage} alt='Home image' />
            </div>
            <div>
                <h4 className='font-extrabold text-center text-2xl'>
                    <span className='text-4xl'>👋</span> Welcome the TODO app
                </h4>
                <p className='leading-snug text-center px-6 py-8 text-lg'>
                    Imagine a world where every task becomes an
                    <span className='font-bold'> opportunity</span> to shine.
                    From planning your most ambitious projects to tracking your
                    daily successes, our Todo app makes every step of the way
                    <span className='font-bold'> exciting</span> and
                    <span className='font-bold'> satisfying.</span>
                </p>
            </div>
            <div className='h-40 flex justify-center items-center '>
                <Link href='/tasks'>
                    <a className='bg-gray-700 px-16 py-2 text-white font-medium rounded-sm'>
                        Get Started
                    </a>
                </Link>
            </div>
        </>
    )
}
