import '../styles/globals.css'
import type { AppProps } from 'next/app'

function App() {
  return (
    <div className='container h-screen w-screen mx-auto flex items-center justify-center'>
      <div className='flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 mx-4 px-6 rounded-md '>
        <div className='flex flex-row items-center'>
          <img 
          className='w-24 rounded-full' 
          alt='User Avatar'
          src='https://github.com/CaioHLuwi.png' />

          <div className='ml-4'>
            <h3 className='font-semibold text-xl'> Caio Henrique </h3>
            <h4 className="text-indigo-300 pt-1"> Front-End Developer</h4>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-2">Bio</h2>
          <p className="text-gray-300 font-light mt-1 max-w-lg text-justify">
            Hello, I'm Caio, I'm 18 years old and I've been fascinated with the world of technology in general since I was young. I always strive to stay updated about the latest advancements and trends in the field, and I believe that technology can positively transform people's lives. I'm searching for opportunities to put my knowledge into practice and contribute to the growth of the industry. I'm excited about the possibilities of learning and professional growth.
          </p>
        </div>
        
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-2">Career</h2>

          <div className="mt-4">
            <h3 className="text-yellow-500 font-medium text-xl mt-1">
              Tempos Modernos
            </h3>

            <ul className='list-disc list-inside pl-4'>
              <li className="list-item">
                Social Media
              </li>
              <li className="list-item">
                Graphic Designer
              </li>
              <li className="list-item">
                Landing Page Builder
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-yellow-500 font-medium text-xl mt-1">
              Creations Paper
            </h3>

            <ul className='list-disc list-inside pl-4'>
              <li className="list-item">
                Technical Designer
              </li>
              <li className="list-item">
                Production line
              </li>
              <li className="list-item">
                Product Photographer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
