import { useEffect, useState } from 'react'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  const links = [
    { name:"Home", link:"#" },
    { name:"About", link:"#" },
    { name:"Contact", link:"#" },
    { name:"Order", link:"#" }
  ]

  const options = [
    { icon: "sunny", theme:"light" },
    { icon: "moon", theme:"dark" }
  ]

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        break;
    }
  }, [theme])
  
  return (
    <>
      <div className='dark:bg-slate-900 bg-white flex flex-col md:flex-row md:justify-between'>
        <div className='z-[60] py-2 dark:bg-slate-900 bg-white'>
        <div className=''>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png" alt="" className='w-16 h-16 ml-7 cursor-pointer hover:sepia duration-150' />
          </div>
        <button onClick={() => setIsOpen(!isOpen)} className='text-3xl text-yellow-600 md:hidden absolute top-6 right-4 z-[60]'>
            <ion-icon name={isOpen ? "close-outline" : "menu-outline"}></ion-icon>
        </button>
          </div>
        <ul className={`flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mr-7 items-center absolute md:static border-t-2 border-blue-500 md:border-none dark:bg-slate-900 bg-white p-3 md:p-0 w-full md:transition-none transition-all duration-500 md:w-auto z-[50] md:z-auto ${isOpen ? 'top-20 opacity-100 ' : 'opacity-0 md:opacity-100 top-[-200px]'}`}>
        {links.map(link => {
          return(
            <a href={link.link} className='dark:text-white text-balck text-sm font-medium font-[Montserrat] hover:text-opacity-70 px-1 
 dark:border-slate-900 border-white border-r-2 hover:border-blue-500'>
              {link.name}
            </a>
          )
        })}
          <button className='text-sm bg-blue-500 md:self-center self-stretch text-white font-semibold px-5 py-2 rounded-2xl hover:sepia transition duration-150'>GET STARTED</button>
          </ul>


        
      </div>


      
      <div className='w-full min-h-screen dark:bg-slate-200 bg-slate-500 relative'>
        <div className='flex justify-center items-center absolute top-4 right-4 rounded-lg bg-white dark:bg-slate-900 overflow-hidden'>
          {options.map((opt) => (
            <button key={opt.theme} onClick={() => setTheme(opt.theme)} className={`w-6 h-6 m-1 rounded-lg text-black dark:text-white text-lg dark:hover:bg-slate-800 hover:bg-gray-200 ${theme === opt.theme ? 'dark:text-blue-600 text-yellow-600' : ''}`}>
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>




      </div>
    </>
  )
}
