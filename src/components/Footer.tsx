import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anoushka Shrivastava</h3>
            {/* <p className="mb-4 opacity-90">
              A passionate developer focused on creating impactful digital experiences.
            </p> */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/anoushkaa26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/anoushka-shrivastava-7999a8255/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:anoushkashri26@gmail.com"
                className="hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#education" className="hover:text-accent transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Chennai, India</p>
            <p className="mb-2">+91 87574243XX</p>
            <p>anoushkashri26@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Anoushka Shrivastava. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;