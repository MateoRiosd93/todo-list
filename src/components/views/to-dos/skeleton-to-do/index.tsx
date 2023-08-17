export function LoadingTodo() {
    return (
        <div role='status' className='px-3 pb-4 pt-1 my-3 items-center animate-pulse max-w-lg border border-gray-200 divide-y divide-gray-200 rounded shadow dark:divide-gray-700 md:p-6 dark:border-gray-700'>
            <div className='flex items-center w-full space-x-2 my-4'>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24'></div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
            </div>
            <div className='flex items-center w-full space-x-2 max-w-[480px]'>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24'></div>
            </div>
            <span className='sr-only'>Loading...</span>
        </div>
    )
}
