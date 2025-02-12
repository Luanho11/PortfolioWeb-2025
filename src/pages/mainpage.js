// Importaciones principales
import React, { useEffect } from 'react';
import Header from '../components/Header';
import ParticlesBackground from '../Particles/ParticlesBackground';

import CVDownloadButton from '../components/CVDownloadButton ';

// Estilos
import './mainpage.css';

// Recursos
import Laptop from '../assets/laptop.png';
import APIHoteles from '../assets/APIHoteles.PNG';
import Authentication from '../assets/Authentication.PNG';
import CRUD from '../assets/CRUD.PNG';
import TIENDA from '../assets/TIENDA.PNG';

// Iconos
import { DiMysql, DiMongodb } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaNode, FaBootstrap, FaFileWord, FaFileExcel, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiThymeleaf, SiPostman, SiSwagger } from 'react-icons/si';
import { IoInformationCircle } from "react-icons/io5";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaMusic } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";

// Hook personalizado para la animación al hacer scroll
const useScrollAnimation = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.3 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};

const MainPage = () => {
    useScrollAnimation();

    return (
        <div>
            {/* Encabezado y fondo de partículas */}
            <Header />
            <ParticlesBackground />

            {/* Sección principal */}
            <div className="main-container fade-in">
                <div className="nombre">
                    <p>Hola,</p>
                    <p>soy <span className="luis">Luis Hostos</span>,</p>
                    <p>Desarrollador Full Stack</p>
                    <h4>
                        Actualmente residiendo en Lima, Lima, SJL, me gusta diseñar páginas webs <span className="din">dinámicas y estáticas</span>
                    </h4>
                    <a href="https://github.com/Luanho11">Visitar mi repositorio</a>
                </div>
            </div>

            <div class="content_about-me fade-in"  id="about-me">
                <IoInformationCircle color='#09a980' className='info_icon'/>
                <h2>Sobre mí</h2>
                <p>
                    Hola, me presento, me llamo <span className='hostos'>Luis Angel Hostos Hostos </span> y soy un estudiante técnico <span className='egresado'>egresado </span>
                    en <span className='egresado'>computación e informática</span>, estoy entusiasmado en busca de nuevas oportunidades laborales como desarrollador
                    donde pueda seguir aprendiendo y expandiendo mis habilidades.
                </p>

                <div>
                    <div>
                        <h2>Información Personal</h2>
                        <div>
                            <div className='info_per'>
                                <p>Cumpleaños</p>
                                <p>Teléfono</p>
                                <p>Email</p>
                                <p>Dirección</p>
                                <p>Github</p>
                                <p>Estado laboral</p>
                            </div>
                            <div>
                                <p>11/09/2001</p>
                                <p>( +51 ) 970 465 608</p>
                                <p>luis.hostos.hostos@gmail.com</p>
                                <p>Lima, Lima, SJL</p>
                                <p><a href='https://github.com/Luanho11' className='linkgithub'>https://github.com/Luanho11</a></p>
                                <p><span className='freelance'>FREELANCE</span></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        <CVDownloadButton/>

                    </div>

                    <div>
                        <h2>Mis gustos</h2>
                        <br></br>
                        <div>
                            <div  class="content_interest-container">
                                <div className='content_interest'>
                                    <IoLogoGameControllerB />
                                    <p>JUEGOS</p>
                                </div>
                                <div className='content_interest'>
                                    <FaMusic />
                                    <p>MUSICA</p>
                                </div>
                                <div className='content_interest'>
                                    <FaWindows />
                                    <p>WINDOWS</p>
                                </div>
                                <div className='content_interest'>
                                    <MdAttachMoney />
                                    <p>MONEY</p>
                                </div>
                                <div className='content_interest'>
                                    <GiCoffeeCup />
                                    <p>CAFÉ</p>
                                </div>
                                <div className='content_interest'>
                                    <FaDumbbell />
                                    <p>GIMNASIO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de lenguajes y herramientas */}
            <main className="main fade-in">
                <section className="section-left">
                    <p>Lenguajes de programación y</p>
                    <p className="herramientas">Herramientas de Productividad</p>
                    <h6>
                        Para más detalle, por favor siéntanse libres de revisar mis <span className="proy">proyectos</span>, más abajo hay detalle de cada proyecto y
                        sus respectivos lenguaje y herramientas usados.
                    </h6>
                </section>

                <section className="section-right">
                    {/** Lista de herramientas con íconos */}
                    <div className="word important">MySQL <DiMysql color="#017a9d" /></div>
                    <div className="word normal">SQL Server <TbSql /></div>
                    <div className="word important">Java <FaJava /></div>
                    <div className="word small">MongoDB <DiMongodb color="#4faa41" /></div>
                    <div className="word important">JavaScript <IoLogoJavascript color="#f5de19" /></div>
                    <div className="word small">C#</div>
                    <div className="word important">React <FaReact color="#61dafb" /></div>
                    <div className="word small">.NET</div>
                    <div className="word small">HTML <FaHtml5 color="#f06125" /></div>
                    <div className="word small">CSS <FaCss3Alt color="#74bae4" /></div>
                    <div className="word normal">Node.js <FaNode color="#8cc404" /></div>
                    <div className="word small">Thymeleaf <SiThymeleaf color="#005f0f" /></div>
                    <div className="word normal">Postman <SiPostman color="#ff6c38" /></div>
                    <div className="word small">Bootstrap <FaBootstrap color="#7311f6" /></div>
                    <div className="word small">Swagger-ui <SiSwagger color="#6c9c04" /></div>
                    <div className="word small">Word <FaFileWord color="#122f83" /></div>
                    <div className="word small">Excel <FaFileExcel color="#007239" /></div>
                    <div className="word small">Git <FaGithub color="#1c1f24" /></div>
                </section>
            </main>

            {/* Proyectos individuales */}
            <h1 className="proy_indiv" id='proyectos'>PROYECTOS INDIVIDUALES</h1>
            <div className="content3 fade-in">
                {[{
                    img: Authentication,
                    title: "Authentication",
                    description: "Proyecto de autenticación usando JWT, Tokens, manejo de roles, recuperación de contraseña por email y rutas protegidas.",
                    link: "https://github.com/Luanho11/AuthenticationProject",
                }, {
                    img: CRUD,
                    title: "CRUD",
                    description: "Proyecto básico de CRUD (Create, Read, Update, Delete) backend en spring java y frontend en React.",
                    link: "https://github.com/Luanho11/CRUD",
                }, {
                    img: APIHoteles,
                    title: "API Hoteles",
                    description: "Sistema de Gestión de Hoteles (BACKEND) usando Java Spring Maven.",
                    link: "https://github.com/Luanho11/API-Hoteles",
                }, {
                    img: TIENDA,
                    title: "Ecommerce Básico",
                    description: "Frontend de un ecommerce básico realizado individualmente en HTML, CSS y JS para una empresa de Tacos Mex/Per",
                    link: "https://github.com/Luanho11/TacosMarcial",
                }].map((project, index) => (
                    <div key={index} onClick={() => window.open(project.link, '_blank')}>
                        <img src={project.img} alt={project.title} />
                        <h6>{project.title}</h6>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
