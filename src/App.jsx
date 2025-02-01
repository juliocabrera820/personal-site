import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="w-32 h-32" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={reactLogo} className="w-32 h-32 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Vite + React
      </h1>
      
      <div className="text-center space-y-4">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                     transition-colors font-semibold shadow-lg hover:shadow-xl"
        >
          count is {count}
        </button>
        
        <p className="text-gray-700">
          Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App