import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-accent bg-opacity-30">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeIn">
          <span className="block">Hi, I'm</span>
          <span className="text-primary">Anoushka Shrivastava</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 animate-fadeIn animation-delay-300">
          Welcome to my portfolio website! I'm a passionate developer with a focus on creating impactful digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-600">
          <a 
            href="/AS_RESUME.pdf" 
            className="btn-primary"
            download
          >
            <Download size={20} />
            Download Resume
          </a>
          
          <a 
            href="#contact" 
            // className="bg-secondary text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300"
            className="btn-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;