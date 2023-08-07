import { Link } from 'wouter'
import NotFoundImage from '../../../assets/illustrations/not-found.png'

export function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center gap-16 mt-12'>
            <img src={NotFoundImage} alt='Page not found' className='w-80' />
            <Link href='/'>
                <a className='bg-gray-700 px-16 py-2 text-white font-medium rounded-sm'>
                    Back to home
                </a>
            </Link>
        </div>
    )
}
