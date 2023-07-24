import AddTodo from './compoenents/addTodo/AddTodo'
import Footer from './compoenents/footer/Footer'
import Header from './compoenents/header/Header'
import ListTodo from './compoenents/listTodo/ListTodo'

export default function Todos() {
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
