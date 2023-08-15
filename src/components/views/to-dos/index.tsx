import AddTodo from './add-todo'
import Footer from './footer'
import Header from './header'
import ListTodo from './list-to-do'

export function ToDos() {
    return (
        <div className='h-screen w-screen flex flex-col justify-between items-center'>
            <Header />
            <div className='flex flex-col h-2/3 gap-6'>
                <AddTodo/>
                <ListTodo/>
            </div>
            <Footer />
        </div>
    )
}
