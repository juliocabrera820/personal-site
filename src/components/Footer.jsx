import { 
  Mail, 
  MapPin, 
} from 'lucide-react';
import Avatar from '../assets/avatar.jpeg';

const Footer = () => (
  <footer className="bg-black text-white py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={Avatar} 
              alt="Julio Cabrera" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-serif text-xl">Julio Cabrera</h3>
              <p className="text-gray-400">Software Engineer</p>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6 pr-12">
          Creative and resourceful software engineer, capable of transforming ideas into innovative digital solutions that solve complex problems.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">References</h4>
          <nav className="space-y-4">
            <a href="/services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="/works" className="block text-gray-400 hover:text-white transition-colors">Works</a>
            <a href="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
          </nav>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Get in Touch</h4>
          <div className="space-y-4">
            <a href="mailto:hello@albertflores.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>juliocabrera820@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Mérida, Yucatán, México</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Julio Cabrera. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;