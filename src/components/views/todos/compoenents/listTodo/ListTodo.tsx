import { useTodoState } from '../../../../../store/todoState'
import Todo from '../todo/Todo'


export default function ListTodo() {

    const { todos } = useTodoState()

    if(!todos.length){
        return (
            <p className='text-xl font-light text-center mt-50'>Crea tus primeros TODOs</p>
        )
    }

    return (
        <div className='flex justify-center items-center mt-2'>
            <ul className='w-full px-4 py-2 h-[380px] overflow-y-scroll'>
                {todos.map((todo, index) => (
                    <Todo key={`${todo}${index}`} {...todo} />
                ))}
            </ul>
        </div>
    )
}
``