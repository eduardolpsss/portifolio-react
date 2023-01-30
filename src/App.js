// Feito por Eduardo Pontes
import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";
import BotaoTop from "./components/BotaoTop";
import Typewriter from "./components/Typewriter";
import Repositories from "./components/Repositories";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />

        <div className='Navbar shadow-sm p-3 mb-5 rounded'>
            <nav className="navbar navbar-expand-lg navbar">
                <a className="navbar-brand" href=""><img className="img-fluid" src="/images/menuIcon.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa-solid fa-align-justify"></i></button>
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#habilidades">Abilities</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projetos">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contato">Contact information</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Networks</a>  
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="https://github.com/eduardolpsss" target="_blank" rel="noreferrer">Github</a>
                          <a className="dropdown-item" href="https://www.linkedin.com/in/eduardolpsss/" target="_blank" rel="noreferrer">Linkedin</a>
                          <div className="dropdown-divider">
                          </div>
                          <a className="dropdown-item" href="mailto:eduardo.pontes2801@gmail.com">Email me</a>
                          <a className="dropdown-item" href="https://api.whatsapp.com/send?phone=5561985019585&text=Olá%20Eduardo,%20">WhatsApp</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My resume</a>  
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/docs/Eduardo-Luiz-Pontes-de-Souza.pdf">pt-BR</a>
                        <a className="dropdown-item" href="/docs/Eduardo-Luiz-Pontes-de-Souza_en.pdf">en-US</a>
                      </div>
                    </li>
                  </ul>

                  {/* <!-- theme switcher  --> */}
                  <div className="toggle">
                    <div className="text-right">
                      <input id="switch" type="checkbox" name="switch-theme" onClick={toggleTheme}/>
                      <label htmlFor="switch"></label>
                    </div>
                  </div> 
                  <br/>  

                </div>
            </nav>  
        </div> 
        
        {/* Introdução */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-flex">
                <Typewriter/>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p>
                Full-stack developer with a bachelor's degree in Computer Science from Universidade Católica de Brasília (UCB), experience in client-side and server-side development, frameworks and databases. Active, always looking for the best way to handle and premeditate possible problems. I participate easily in teamwork, communicative, technical, agile and helpful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section id="habilidades">
          <div className="container">
              <hr/>
              <div className="row">
                <div className="col-12 text-center">
                  <h1>Abilities</h1>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                  <p>
                    I have developed and continue to develop skills in the following languages and frameworks:
                  </p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12 text-center">
                  <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="40" style={{margin: 5}}/></a>  
                  <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="40" style={{margin: 5, backgroundColor: 'white'}}/></a>  
                  <a href="https://www.javascript.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="40" style={{margin: 5}}/></a>   
                  <a href="https://www.typescriptlang.org/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="40" style={{margin: 5}}/></a>  
                  <a href="https://reactjs.org/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="40" style={{margin: 5}}/></a>  
                  <a href="https://redux.js.org/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" height="40" style={{margin: 5}}/></a>  
                  <a href="https://nextjs.org/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/nextjs.png" alt="NextJS" height="40" style={{margin: 5}}/></a>  
                  <a href="https://mui.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/mui.png" alt="Material UI" height="40" style={{margin: 5}}/></a>  
                  <a href="https://vuejs.org/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg" alt="Vue.js" height="40" style={{margin: 5}}/></a>  
                  <a href="https://www.tailwindcss.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="Tailwind CSS" height="40" style={{margin: 5}}/></a>  
                  <a href="https://www.php.net/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/php-original.svg" alt="PHP" height="40" style={{margin: 5}}/></a>  
                  <a href="https://laravel.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg" alt="Laravel" height="40" style={{margin: 5}}/></a>  
                  <a href="https://symfony.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/symfony_black_03.svg" alt="Symfony" height="40" style={{margin: 5}}/></a>  
                  <a href="https://codeigniter.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/codeigniter.svg" alt="CodeIgniter" height="40" style={{margin: 5}}/></a>  
                  <a href="https://www.java.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" alt="Java" height="40" style={{margin: 5}}/></a>  
                  <a href="https://www.python.org/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="40" style={{margin: 5}}/></a>  
                  <a href="https://flask.palletsprojects.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/flask.png" alt="Flask" height="40" style={{margin: 5, backgroundColor: 'white'}}/></a>  
                  <a href="https://www.docker.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="Docker" height="40" style={{margin: 5}}/></a>  
                  <a href="https://www.nginx.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/nginx-original.svg" alt="Nginx" height="40" style={{margin: 5}}/></a>  
                  <a href="https://www.mongodb.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="40" style={{margin: 5}}/></a>  
                  <a href="https://www.mysql.com/"  target="_blank" rel="noreferrer"><img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="40" style={{margin: 5}}/></a>  
                </div>
              </div>
          </div>
        </section>

        {/* Métodos de trabalho e atividades desenvolvidas */}
        <section>
          <div className="container" id="experiencias">
            <div className="row">
              <div className="col-12">
                <p>Working methods and developed activities</p>
              </div>
            </div>

            <div className="row">
              <ul>
                <li>Agile methods (sprints) with GitHub Projects, Jyra and Trello;</li>
                <li>Challenge Based Learning (CBL);</li>
                <li>UX/UI with Figma;</li>
                <li>Responsive development (mobile view);</li>
                <li>Software analysis and design (documentation);</li>
                <li>
                  Web - Javascript, Angular, React.js, Next, Vue.js, Node.js, HTML, CSS, jQuery, Bootstrap, Webpack, Gulp and MySQL;
                </li>
                <li>
                  Java fundamentals - POO, Functional Programming, MongoDB, Spring Boot, JavaFX, JPA and Hibernate.
                </li>
                <li>
                  Database management with MySQL and MongoDB.
                </li>
                <li>
                  Build, share, and run containerized application development on Docker. 
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experiências profissionais */}
        <section>
          <div className="container" id="experiencias">
            <hr/>
            
            <div className="row">
              <div className="col-12 text-center">
                <h1>Professional experiences</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p>
                  <b>WEB/CODIM | CENTRAL BANK OF BRAZIL | 2021 - 2022 | REMOTE</b>
                </p>
              </div>
            </div>

            <div className="row">
              <ul>
                <li>As a member of the web development team, I participated daily in the department's decisions through meetings regarding the maintenance, updating and correction of codes in the internet and corporate intranet environments of the Central Bank of Brazil. I participated in the migration of old structures to the new format, publication of documents and other files in the production environments of the bank.</li>
              </ul>
            </div>

            <div className="row">
              <div className="col-12">
                <p>
                  <b>DEVELOPMENT OF THE SYSTEM OF REGISTRATION AND MANAGEMENT OF EXTENSION PROJECTS OF THE CATHOLIC UNIVERSITY OF BRASÍLIA | JAN 2022 - DEC 2022</b>
                </p>
              </div>
            </div>

            <div className="row">
              <ul>
                <li>
                Acting in the front-end team, development with React (using the Matrial-UI component library). I was also present in the back-end development in Node. Project developed with the help of agile methods (Scrum with board in GitHub projects and Challenge Based Learning), the responsive web application (MVP) was developed to improve and automate the entire existing structure, which involves teachers, students and foreigners in the administration process, registration and participation in the university extension projects. <b>This project was presented and defended to the board of the Universidade Católica de Brasília as the end-of-course thesis, obtaining maximum grade.</b>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other Experiences */}
        <section>
          <div className="container" id="experiencias">
            <hr/>
            
            <div className="row">
              <div className="col-12 text-center">
                <h1>Other experiences</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p>
                  <b>PHP, Node, Java and Python together with React and Vue.js front-end libraries:</b>
                </p>
              </div>
            </div>

            <div className="row">
              <ul>
                <li>
                  To develop RESTful applications using various libraries and tools related to the languages, e.g. build automation tool (Maven), microservices with SpringBoot and Flask, Laravel with Inertia.js together with React. I have experience with MySQL and MongoDB databases. Repositories available on my GitHub.
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-12">
                <p>
                  <b>InovaAsbac Challenge Hackathon</b>
                </p>
              </div>
            </div>

            <div className="row">
              <ul>
                <li>
                  Fenasbac Institute (Sept. 06, 07 and 08, 2019 totaling 48 hours). 
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Projetos */}
        <section id="projetos">
          <div className="container">
            <hr/>
            
            <div className="row">
              <div className="col-12 text-center">
                <h1>Projects</h1>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12">
                <p>
                  The projects I have produced and participated in are currently hosted on my GitHub (some repositories are currently private).
                </p>
                <br/>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12 text-center">
                <a href="https://github.com/eduardolpsss?tab=repositories" target="_blank" rel="noreferrer">
                  <button type="button" className="btn btn-dark">Go to my repositories</button>
                </a>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <p>
                  Here are details about some of my repositories on GitHub:
                </p>
                <br/>
              </div>
            </div>

            <Repositories/>
            
            <br/><br/>
          </div>
        </section>

        {/* Entre em contato comigo */}
        <section>
          <div className="container" id="contato">
            <hr/>
            <div className="row">
              <div className="col-12 text-center">
                <h1>Contact information and resume</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 col-12">
                <p>
                  <i className="fa-solid fa-location-dot"></i> Brasília - DF/Brasil
                </p>
                <p>
                  I'm always learning, you can get in touch with me through the following networks:
                </p>

                
                <div className="text-center">
                  <a href="https://github.com/eduardolpsss" target="_blank" rel="noreferrer" title="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/eduardolpsss/" target="_blank" rel="noreferrer" title="LinkedIn">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="mailto:eduardo.pontes2801@gmail.com" title="Send me an e-mail">
                    <i className="fa-brands fa-google"></i>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5561985019585&text=Olá%20Eduardo,%20%20" target="_blank" rel="noreferrer" title="Get in touch with me through WhatsApp">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="/docs/Eduardo-Luiz-Pontes-de-Souza.pdf" target="_blank" rel="noreferrer" title="My Resume"><i className="fa-solid fa-file"></i></a>
                </div>
              </div>
                  
              {/* Imagem de perfil */}
              <div className="col-md-4 col-12 text-center mt-md-0 mt-2">
                <img className="img-fluid float-center imagem-perfil" src="/images/perfil.jpeg" alt="" width={255}/>
              </div>
            </div>
            <hr/>
          </div>
        </section>

        <div className="Footer" >    
          <footer className="text-center">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p>
                    Made by Eduardo Pontes
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <BotaoTop/>

      </Fragment>
    </ThemeProvider>
  );
}

export default App;
