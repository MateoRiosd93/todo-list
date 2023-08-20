import { Link } from 'wouter'
import HomeImage from '../../../assets/illustrations/human-men.png'

export function Home() {
    return (
        <>
            <div>
                <img className='w-[260px]' src={HomeImage} alt='Home image' />
            </div>
            <div>
                <h4 className='font-extrabold text-center text-xl dark:text-slate-100'>
                    <span className='text-4xl'>👋</span> Welcome the TODO app
                </h4>
                <p className='leading-7- text-center px-5 py-6 mb-4 text-sm dark:text-slate-100'>
                    Imagine a world where every task becomes an
                    <span className='font-bold'> opportunity</span> to shine.
                    From planning your most ambitious projects to tracking your
                    daily successes, our Todo app makes every step of the way
                    <span className='font-bold'> exciting</span> and
                    <span className='font-bold'> satisfying.</span>
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <Link href='/to-dos'>
                    <a className='bg-gray-700 px-12 py-2 text-white font-semibold rounded-sm dark:bg-slate-100 dark:text-slate-800 md:mb-4'>
                        Get Started
                    </a>
                </Link>
            </div>
        </>
    )
}
