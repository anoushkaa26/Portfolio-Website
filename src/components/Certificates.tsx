import React from 'react';

const certificates = [
  {
    title: "ORACLE JAVA SE 11 DEVELOPER",
    issuer: "Oracle",
    date: "2025",
    description: "Java SE 11 Developer",
    link: "https://drive.google.com/file/d/15ZlsFTILKOEcKb1O9_QwkqoI_2LfPVXT/view?usp=sharing"
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    description: "Cloud Infrastructure",
    link: "https://drive.google.com/file/d/1aI3OO2RMI2016rTR4xdu0AdTq2FGo9PM/view?usp=drive_link"
  },
  {
    title: "Data Mining",
    issuer: "NPTEL",
    date: "2025",
    description: "Data Mining and Analytics",
    link: "https://drive.google.com/file/d/1uA7spn8xl8MWbTEdwDNFBbt2-pXAaY58/view?usp=drive_link"
  },
  {
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft",
    date: "2024",
    description: "Data Analysis",
    link: "https://drive.google.com/file/d/11qA8SAC6YVYeRdiGY6cPldersm6PcchL/view?usp=drive_link"
  },
  {
    title: "Object Oriented Programming in Java ",
    issuer: "Coursera",
    date: "2023",
    description: " Java",
    link: "https://drive.google.com/file/d/1K8XPZSpPg4z4_5JEwieSk_hTahuI8obp/view?usp=drive_link"
  },
  {
    title: "SCALER - DBMS COURSE",
    issuer: "SCALER",
    date: "2024",
    description: "DBMS",
    link: "https://drive.google.com/file/d/1oHPYh7X-XFHNmRV1ObEY5sYMKA76_PRo/view?usp=drive_link"
  },
  
  
  
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-default">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-secondary font-medium">{cert.issuer}</span>
                <span className="text-sm text-secondary">{cert.date}</span>
              </div>
              <p className="mb-4">{cert.description}</p>
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center"
              >
                View Certificate
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default Certificates;