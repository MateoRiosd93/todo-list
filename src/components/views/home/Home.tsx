import HomeImage from '../../../assets/illustrations/human-men3.png'

function Home() {
  return (
    <div className='p-8 flex flex-col justify-around items-center h-screen'>
        <div>
            <img src={HomeImage} alt="Home image" />
        </div>
        <div>
            <h4 className='text-lg font-bold text-center text-xl'>Get things done with TODo</h4>
            <p className='mt-8 leading-snug text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, praesentium? Recusandae deserunt itaque similique, libero eius perspiciatis laudantium sequi debitis, fuga laboriosam dolorum vitae? Assumenda sapiente quod suscipit consectetur iste?</p>
        </div>
        <div>
            <button className='bg-slate-600 px-14 py-2 text-white font-medium rounded-sm'>Get Started</button>
        </div>
    </div>
  )
}

export default Home