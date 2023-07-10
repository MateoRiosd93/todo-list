import Todo from '../todo/Todo'

const TODOS = [
    {
        name: 'Study English one hour from Monday to Friday.',
        creationDate: '12-10-2023',
        completed: false,
    },
    {
        name: 'Learn NodeJS on platzi.',
        creationDate: '11-15-2023',
        completed: true,
    },
    {
        name: 'Study Tailwinds CSS, and animations.',
        creationDate: '10-15-2023',
        completed: true,
    },
    {
        name: 'Review the new features of ECMAscript.',
        creationDate: '11-03-2023',
        completed: true,
    }
]

export default function ListTodo() {
    return (
        <div className='flex justify-center items-center mt-2'>
            <ul className='w-full px-4 py-2 h-[380px] overflow-y-scroll'>
                {TODOS.map((todo, index) => (
                    <Todo key={`${todo}${index}`} {...todo} />
                ))}
            </ul>
        </div>
    )
}
