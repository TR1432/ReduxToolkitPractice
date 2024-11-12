import './App.css'
import Counter from './features/counter/Counter.jsx'
import Temperature from './features/temperature/Temperature.jsx'
import Gitsearch from './features/githubsearch/Gitsearch.jsx'

function App() {
  return (
    <div className='w-full max-w-full p-5 font-sans h-fit grid grid-cols-1 gap-4 md:grid-cols-3 md:grid md:m-2  overflow-auto'>
      <div className='col-span-1 text-center font-bold md:col-span-3 text-lg'>
        <span className='dark:text-theme-ash'>Redux</span>
        <span className='dark:text-theme-yellow'> Toolkit </span>
        <span className='dark:text-theme-orange'>Practice</span>
      </div>
     <Counter/>
     <Temperature/>
     <Gitsearch/>
    </div>
  )
}

export default App
