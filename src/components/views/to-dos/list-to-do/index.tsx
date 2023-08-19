import { useState, useEffect } from 'react'
import EmptyImage from '../../../../assets/illustrations/empty-todos.png'
import Todo from '../to-do'
import { useTodoState } from '../../../../store/todoState'
import { LoadingTodo } from '../skeleton-to-do'

export default function ListTodo() {
    const [loading, setLoading] = useState(false)
    const { todos, filteredTodos } = useTodoState()

    useEffect(() => {
        if (localStorage.getItem('TODOS')) {
            setLoading(true)
        }

        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    if (!todos.length) {
        return (
            <div className='flex flex-col justify-center items-center gap-4 mt-6'>
                <img className='w-64' src={EmptyImage} alt='Empty TODOs' />
                <p className='text-xl font-light text-center mt-50 dark:text-slate-100'>
                    {`Add your things todo's`}
                </p>
            </div>
        )
    }

    const renderingTodos = filteredTodos.length ? filteredTodos : todos

    return (
        <div className='w-full flex justify-center items-center mt-2'>
            <ul className='w-full flex flex-col items-center px-4 h-[380px] overflow-y-scroll'>
                {renderingTodos.map((todo, index) =>
                    loading ? (
                        <LoadingTodo key={`${todo}${index}`} />
                    ) : (
                        <Todo key={`${todo}${index}`} {...todo} />
                    )
                )}
            </ul>
        </div>
    )
}
