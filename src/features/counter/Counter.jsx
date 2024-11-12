import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import "./counter.css"

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='col-span-1 min-h-full rounded-lg dark:bg-theme-ash dark:text-theme-yellow h-[200px] p-2'>
      <div className='text-center tracking-wide font-bold text-lg mb-4'>Redux Counter</div>
      <div className=' flex flex-row justify-between items-center ps-10 pe-10'>
        <button className='dark:bg-theme-orange p-1 h-fit rounded-lg md:rounded-none active:scale-90 md:hover:rounded-lg duration-100'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='text-6xl'>{count}</span>
        <button className='dark:bg-theme-orange p-1 h-fit rounded-lg md:rounded-none active:scale-90 md:hover:rounded-lg duration-100'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter