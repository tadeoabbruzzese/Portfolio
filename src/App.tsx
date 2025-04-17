import React from 'react';
import { Award, ExternalLink, Github, Linkedin, Mail, Code2, Server, Database, FileJson, Layout, Blocks, Globe, Smartphone, ShoppingCart } from 'lucide-react';
import imagenPerfil from './public/pfp.jpg';
import cHtml from './public/certificados/Certificado-Desarrollo-Web-con-HTML-EducaciónIT.jpeg';
import cMWeb from './public/certificados/Certificado-Maquetador-Web-Avanzado-EducaciónIT.jpeg';
import cGit from './public/certificados/Certificado-Git_-Desarrollo-Colaborativo-EducaciónIT.jpeg';
import cJCero from './public/certificados/Certificado-Javascript-desde-cero-EducaciónIT.jpeg';
import cJAvanzado from './public/certificados/Certificado-Javascript-Desarrollador-Avanzado-EducaciónIT.jpeg';
import cMongo from './public/certificados/Certificado-MongoDB-Fundamentos-EducaciónIT.jpeg';
import cNode from './public/certificados/Certificado-NodeJS-Backend-EducaciónIT.jpeg';
import cPoo from './public/certificados/Certificado-Introducción-al-Paradigma-de-Objetos-EducaciónIT.jpeg';
import cReact from './public/certificados/Certificado-React.JS-Developer-EducaciónIT.jpeg';
import Pescar from './public/20Pescar.png'
import cv from './public/AbbruzzeseCV.pdf'

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

interface TechStack {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Pescar 20 Años",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and secure checkout.",
    image: Pescar,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://fundacion-pescar20aniversario.vercel.app/",
    githubLink: "#"
  },
  // {
  //   title: "Pescar 20 Años",
  //   description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and secure checkout.",
  //   image: Pescar,
  //   technologies: ["React", "Node.js", "MongoDB", "Express"],
  //   liveLink: "https://fundacion-pescar20aniversario.vercel.app/",
  //   githubLink: "#"
  // },
  // {
  //   title: "Pescar 20 Años",
  //   description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and secure checkout.",
  //   image: Pescar,
  //   technologies: ["React", "Node.js", "MongoDB", "Express"],
  //   liveLink: "https://fundacion-pescar20aniversario.vercel.app/",
  //   githubLink: "#"
  // },
  
];

const techStack: TechStack[] = [
  { name: "JavaScript", icon: <FileJson className="h-8 w-8" /> },
  { name: "Node.js", icon: <Server className="h-8 w-8" /> },
  { name: "React.js", icon: <Code2 className="h-8 w-8" /> },
  { name: "HTML/CSS", icon: <Layout className="h-8 w-8" /> },
  { name: "Express", icon: <Server className="h-8 w-8" /> },
  { name: "MongoDB", icon: <Database className="h-8 w-8" /> }
];

const certificates: Certificate[] = [
  {
    title: "Desarrollo Web con HTML",
    issuer: "Educación IT",
    date: "2023",
    image: cHtml,
    link: "https://drive.google.com/file/d/1z1PxU-vjGm9qy4giLNNw5hxsH42vA4bU/view?usp=sharing"
  },
  {
    title: "Maquetador Web Avanzado",
    issuer: "Educación IT",
    date: "2023",
    image: cMWeb,
    link: "https://drive.google.com/file/d/1nulrRc7AGzSB8b4D48czQWyPot2w1HOC/view?usp=sharing"
  },
  {
    title: "Git",
    issuer: "Educación IT",
    date: "2023",
    image: cGit,
    link: "https://drive.google.com/file/d/1OVnKafHF9NunyNZY_ywqE3de_iZvU3C1/view?usp=sharing"
  },
  {
    title: "JavaScript desde Cero",
    issuer: "Educación IT",
    date: "2023",
    image: cJCero,
    link: "https://drive.google.com/file/d/1SxPaY6BRPGSwK-qKwW95EuhXRA7RyuMA/view?usp=sharing"
  },
  {
    title: "JavaScript Avanzado",
    issuer: "Educación IT",
    date: "2023",
    image: cJAvanzado,
    link: "https://drive.google.com/file/d/1SxPaY6BRPGSwK-qKwW95EuhXRA7RyuMA/view?usp=sharing"
  },
  {
    title: "Fundamentos de MongoDB",
    issuer: "Educación IT",
    date: "2023",
    image: cMongo,
    link: "https://drive.google.com/file/d/1SxPaY6BRPGSwK-qKwW95EuhXRA7RyuMA/view?usp=sharing"
  },
  {
    title: "NodeJS Backend",
    issuer: "Educación IT",
    date: "2023",
    image: cNode,
    link: "https://drive.google.com/file/d/1DouqvbOrQc0hP9HUUpAH1SlSD8JLkntR/view?usp=sharing"
  },
  {
    title: "Programación Orientada a Objetos",
    issuer: "Educación IT",
    date: "2023",
    image: cPoo,
    link: "https://drive.google.com/file/d/16mhyg2UCukAehe0eeUD8OfU4TSjDPqZw/view?usp=sharing"
  },
  {
    title: "Programación Orientada a Objetos",
    issuer: "Educación IT",
    date: "2023",
    image: cPoo,
    link: "https://drive.google.com/file/d/16mhyg2UCukAehe0eeUD8OfU4TSjDPqZw/view?usp=sharing"
  },
  {
    title: "ReactJS Frontend",
    issuer: "Educación IT",
    date: "2023",
    image: cReact,
    link: "https://drive.google.com/file/d/1CW_1chzUM_yxghH3dzwonGELm8xtn5gX/view?usp=sharing"
  },
  {
    title: "Programación Web Full Stack",
    issuer: "Digital House",
    date: "2022",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    link: "https://drive.google.com/file/d/1-43dILUmrSN--SXxb18STNQtBtSzM8Pc/view?usp=sharing"
  },

];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Blocks className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/tadeoabbruzzese" className="text-gray-500 hover:text-gray-700">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/tadeo-abbruzzese/" className="text-gray-500 hover:text-gray-700">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative">
                <img 
                  src={imagenPerfil}
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-lg shadow-lg">
                  <Code2 className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre mí</h2>
              <p className="text-xl text-gray-600 mb-8">
              Soy un apasionado desarrollador de software junior con una sólida formación en tecnologías web modernas. Me apasiona crear aplicaciones eficientes e intuitivas y estoy en constante aprendizaje de nuevas tecnologías para mejorar mis habilidades.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 transform transition duration-300 hover:scale-105">
                    <div className="text-indigo-600">
                      {tech.icon}
                    </div>
                    <span className="font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
                <a
                href={cv}
                download
                className="inline-flex items-center flex justify-center px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
                Descargar CV
              </a>
              </div>
            </div>
          </div>
          
          
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mis Proyectos</h2>
            <p className="text-lg text-gray-600">Algunos de mis proyectos en los que he trabajado</p>
          </div>

          
          <div className={`w-full ${projects.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 lg:grid-cols-2 gap-8'}`}>
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-lg">
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-indigo-600 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
                      >
                        <Globe className="h-5 w-5" />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                      >
                        <Github className="h-5 w-5" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          
          </div>
        </div>

        {/* Seccion de Certificados */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificados Profesionales</h2>
          <p className="text-lg text-gray-600">Una colección de mis logros profesionales y certificaciones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-48">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    <span>Ver Certificado</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-2">Emitida por {cert.issuer}</p>
                <p className="text-sm text-gray-500">Completado en {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2025 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;