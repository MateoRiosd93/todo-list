import { Link } from 'wouter'
import HomeImage from '../../../assets/illustrations/human-men3.png'

export function Home() {
    return (
        <>
            <div>
                <img src={HomeImage} alt='Home image' />
            </div>
            <div className='p-8'>
                <h4 className='font-bold text-center text-xl'>
                    Get things done with TODo
                </h4>
                <p className='mt-8 leading-snug text-center'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam, praesentium Recusandae deserunt itaque similique,
                    libero eius perspiciatis laudantium sequi debitis, fuga
                    laboriosam dolorum vitae Assumenda sapiente quod suscipit
                    consectetur iste.
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
