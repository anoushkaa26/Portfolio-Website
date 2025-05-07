import React from 'react';

const projects = [
  {
    title: "E-Commerce Website",
    description: "Developed a responsive e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/anoushkaa26/Fashion-Hub"
  },
  {
    title: "Product Management System",
    description: "Developed a web-based Product Management System using Java, Spring Boot, Thymeleaf, and MySQL, implementing CRUD operations, image upload (MultipartFile), and RESTful APIs.",
    technologies: ["Thymeleaf", "Springboot", "Tomcat", "MySql"],
    link: "https://github.com/anoushkaa26/Product-Management-"
  },
  {
    title: "Weather Forecast App",
    description: "Built a weather forecast application that provides real-time weather updates, forecasts, and location-based weather information.",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    link: "https://github.com/anoushkaa26/weather-app"
  },
  {
    title: "StudyBuddy App",
    description: "A Flutter-based study collaboration application that helps students connect, learn, and grow together.",
    technologies: ["Flutter", "Dart", "Firebase","C++","CMake","Swift","HTML","C"],
    link: "https://github.com/anoushkaa26/sepm"
  },
  {
    title: "Heal-Net",
    description: "A web-based platform for healthcare providers to search for doctors , categories of doctors and book appointments.",
    technologies: ["HTML", "CSS", "JavaScript", "Doctor API"],
    link: "https://github.com/anoushkaa26/Heal-Net"
  },
  {
    title: "Sentio-Sentiment-Analysis-Model",
    description: "This project is a simple sentiment analysis web application built with Streamlit. It uses TextBlob for basic sentiment analysis (polarity and subjectivity) and VADER Sentiment to analyze the sentiment of individual tokens (words) in a given text.",
    technologies: ["Python", "Streamlit"],
    link: "https://github.com/anoushkaa26/Sentio-Sentiment-Analysis-Model"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-default">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-secondary">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-accent bg-opacity-30 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;