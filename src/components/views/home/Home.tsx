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
                    Imagina un mundo donde cada tarea se convierte en una
                    <span className='font-bold'> oportunidad</span> para
                    brillar. Desde la planificación de tus proyectos más
                    ambiciosos hasta el seguimiento de tus éxitos diarios,
                    nuestra Todo app hace que cada paso del camino sea
                    <span className='font-bold'> emocionante</span> y
                    <span className='font-bold'> satisfactorio.</span>
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
