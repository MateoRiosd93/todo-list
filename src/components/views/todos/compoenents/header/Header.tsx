import { useDates } from '../../../../../hooks/useDates'

export default function Header() {
    const { dates } = useDates()

    return (
        <header className='w-screen flex justify-around items-center'>
            <div className='flex justify-items-stretch'>
                <h3 className='font-extrabold text-7xl text-center text-gray-800 dark:text-slate-100'>
                    {dates.day}
                </h3>
                <div className='flex flex-col justify-end ml-2'>
                    <h5 className='font-extrabold text-2xl text-gray-500 dark:text-slate-300'>
                        {dates.month}
                    </h5>
                    <h6 className='font-extrabold text-2xl text-gray-700 dark:text-slate-400'>
                        {dates.year}
                    </h6>
                </div>
            </div>
            <div className='flex flex-col justify-end h-full'>
                <h2 className='font-extrabold text-3xl text-gray-800 dark:text-slate-100'>
                    {dates.dayComleted}
                </h2>
            </div>
        </header>
    )
}
