import { motion } from 'framer-motion';
import Button from './components/Button'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Avatar from './assets/avatar.jpeg'
import Navbar from './components/Navbar';
import RecentWorks from './components/RecentWorks';
import Recognitions from './components/Recognitions';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img 
                src={Avatar}
                alt="Julio Cabrera" 
                className="rounded-3xl w-48 h-48 object-cover"
              />
              <h1 className="text-4xl md:text-5xl font-serif mt-6 mb-4">I am Julio Cabrera</h1>
              <p className="text-xl text-gray-600">Software Engineer based in Mexico.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Software engineer dedicated to crafting innovative and high-impact digital experiences.</h2>
              <div className="flex gap-4 justify-center">
                <Button href='https://x.com/arielcabrera_11' text="Talk with me" />
                <Button variant="secondary" href="https://www.linkedin.com/in/julio-cabrera-820" text="See my work"/>
              </div>
            </motion.div>
          </div>

          <Experience />
          <Recognitions />
          <Services />
        <RecentWorks />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App