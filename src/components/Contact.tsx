import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-default">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-primary" />
                <span>+91 87574243XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-primary" />
                <a 
                  href="mailto:anoushkashri26@gmail.com" 
                  className="flex items-center hover:text-primary  cursor-pointer  transition-colors"
                  >
                  <span>anoushkashri26@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 mr-4 text-primary" />
                <a 
                  href="https://www.linkedin.com/in/anoushka-shrivastava-7999a8255/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/anoushka-shrivastava
                </a>
              </div>
              <div className="flex items-center">
                <Github className="w-6 h-6 mr-4 text-primary" />
                <a 
                  href="https://github.com/anoushkaa26" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/anoushkaa26
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md border border-secondary bg-card text-default"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md border border-secondary bg-card text-default"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 rounded-md border border-secondary bg-card text-default"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;