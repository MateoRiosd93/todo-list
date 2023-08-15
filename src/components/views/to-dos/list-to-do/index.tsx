import EmptyImage from '../../../../assets/illustrations/empty-todos.png'
import Todo from '../to-do'
import { useTodoState } from '../../../../store/todoState';

export default function ListTodo() {
    const { todos, filteredTodos } = useTodoState()

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
        <div className='flex justify-center items-center mt-2'>
            <ul className='w-full px-4 py-2 h-[380px] overflow-y-scroll'>
                {renderingTodos.map((todo, index) => (
                    <Todo key={`${todo}${index}`} {...todo} />
                ))}
            </ul>
        </div>
    )
}
