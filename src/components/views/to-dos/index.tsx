import AddTodo from './add-todo'
import Footer from './footer'
import Header from './header'
import ListTodo from './list-to-do'

export function ToDos() {
    return (
        <div className='h-screen w-full flex flex-col justify-between items-center relative'>
            <Header />
            <div className='w-full flex flex-col h-2/3 gap-6 md:w-3/4 md:mt-14 lg:w-1/2'>
                <AddTodo/>
                <ListTodo/>
            </div>
            <Footer />
        </div>
    )
}
