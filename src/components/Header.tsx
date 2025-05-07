// import React from 'react';
// import { Sun, Moon } from 'lucide-react';

// interface HeaderProps {
//   darkMode: boolean;
//   toggleTheme: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
//   return (
//     <header className="sticky top-0 z-50 bg-default bg-opacity-95 backdrop-blur-sm shadow-sm">
//       <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex justify-between items-center">
//       <a href="#" className="flex items-center">
//         {/* Profile picture/logo */}
//         <img 
//             src= "/logo.png" 
//             alt="Anoushka Shrivastava" 
//             className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary mr-3"
//           />
//           {/* Optional: Keep the text or remove it */}
//           {/* <span className="text-xl md:text-2xl font-bold text-primary hidden md:inline-block">AS</span> */}
//         </a>

        
//         <nav className="hidden md:flex space-x-6">
//           <a href="#about" className="text-default hover:text-primary transition-colors">About</a>
//           <a href="#skills" className="text-default hover:text-primary transition-colors">Skills</a>
//           <a href="#projects" className="text-default hover:text-primary transition-colors">Projects</a>
//           <a href="#education" className="text-default hover:text-primary transition-colors">Education</a>
//           <a href="#certificates" className="text-default hover:text-primary transition-colors">Certificates</a>
//           <a href="#activities" className="text-default hover:text-primary transition-colors">Activities</a>
//           <a href="#contact" className="text-default hover:text-primary transition-colors">Contact</a>
//         </nav>
        
//         <div className="flex items-center gap-4">
//           <button 
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
//             aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//           >
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
          
//           {/* <a 
//             href="/resume.pdf" 
//             className="hidden md:inline-block bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
//             download
//           >
//             Download CV
//           </a> */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';

// interface HeaderProps {
//   darkMode: boolean;
//   toggleTheme: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
//   return (
//     <header className="sticky top-0 z-50 bg-default bg-opacity-95 backdrop-blur-sm shadow-sm">
//       <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex justify-between items-center">
//         <a href="#" className="flex items-center">
//           <img 
//             src="/logo.png" 
//             alt="Anoushka Shrivastava" 
//             className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary mr-3"
//           />
//         </a>

//         <nav className="hidden md:flex space-x-6">
//           {/* Your navigation links */}
//         </nav>
        
//         <div className="flex items-center gap-4">
//           <button 
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
//             aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//           >
//             {/* Custom images instead of Lucide icons */}
//             {darkMode ? (
//               <img 
//                 src="/sun.png" 
//                 alt="Light mode" 
//                 className="w-5 h-5" 
//               />
//             ) : (
//               <img 
//                 src="/new-moon.png" 
//                 alt="Dark mode" 
//                 className="w-5 h-5" 
//               />
//             )}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 bg-default bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Anoushka Shrivastava" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary mr-3"
          />
        </a>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-default hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-default hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-default hover:text-primary transition-colors">Projects</a>
          <a href="#education" className="text-default hover:text-primary transition-colors">Education</a>
          <a href="#certificates" className="text-default hover:text-primary transition-colors">Certificates</a>
          <a href="#activities" className="text-default hover:text-primary transition-colors">Activities</a>
          <a href="#contact" className="text-default hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {/* Replace with your image files */}
            {darkMode ? (
              <img 
                src="/sun.png" 
                alt="Light mode" 
                className="w-5 h-5" 
              />
            ) : (
              <img 
                src="/new-moon.png" 
                alt="Dark mode" 
                className="w-5 h-5" 
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;