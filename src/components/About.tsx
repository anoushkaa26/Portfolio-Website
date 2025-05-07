import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-default">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-primary">
              <img 
                src="https://i.postimg.cc/BnjxcDTq/picc.jpg" 
                alt="Anoushka Shrivastava" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Hello there! 👋</h3>
            <p className="mb-4 text-lg">
              I'm Anoushka Shrivastava, a dedicated professional with a passion for technology and problem-solving. I specialize in developing creative solutions that address real-world challenges.
            </p>
            <p className="mb-4 text-lg">
              With a strong foundation in programming and a keen eye for detail, I strive to create applications that are not only functional but also user-friendly and visually appealing.
            </p>
            <p className="mb-4 text-lg">
              My journey in technology has equipped me with a diverse skill set, from frontend development to backend technologies, allowing me to craft comprehensive solutions for various needs.
            </p>
            <p className="text-lg">
            When I'm not coding, you'll likely find me exploring new tech trends, contributing to open-source,reading books, listening to music or sipping coffee while dreaming up my next big idea ☕💡.
              {/* When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enhancing my skills through continuous learning. */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;