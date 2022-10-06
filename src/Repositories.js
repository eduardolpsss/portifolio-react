// Feito por Eduardo Pontes
import React from "react";
class Repositories extends React.Component{
    render(){
        return(
        <div className="Repositories">
            <div className="row">
                <div className="col">
                    <div className="card text-white backgroundCard">
                        <h5 className="text-center card-header">portifolioReact</h5>
                        <div className="card-body">
                            <h5 className="text-center card-title">This React.js Portifolio</h5>
                            <div className="text-center">
                                <img className="img-fluid float-center" src="/images/repoImgs/portifolioReact.png" alt="" width={255} height={255}/>
                            </div>
                            <p className="card-text paragrafoCard">Personal portfolio made using the framework provided by React.js to help document the development of repositories on GitHub as well as  education, work samples and skills.</p>
                            <div className="text-center">
                                <a href="https://github.com/eduardolpsss/portifolioReact" target="_blank" rel="noreferrer" className="btn btn-dark">Go to this repository</a>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
                <div className="col">
                    <div className="card text-white backgroundCard">
                        <h5 className="text-center card-header">processoSeletivoHeptaCrud</h5>
                        <div className="card-body">
                            <h5 className="text-center card-title">Java and Vue.js Crud System</h5>
                            <div className="text-center">
                                <img className="img-fluid float-center" src="/images/repoImgs/processoSeletivoHeptaCrud.png" alt="" width={255} height={255}/>
                            </div>
                            <p className="card-text paragrafoCard">System developed specifically for the selection process of Java Jr. at Hepta Tecnologia, I used the Java language with SpringBoot and other dependencies on its back-end and Vue.js on its front-end.</p>
                            <div className="text-center">
                                <a href="https://github.com/eduardolpsss/processo-seletivo-hepta-crud" target="_blank" rel="noreferrer" className="btn btn-dark">Go to this repository</a>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card text-white backgroundCard">
                        <h5 className="text-center card-header">pizzariaSalieri</h5>
                        <div className="card-body">
                            <h5 className="text-center card-title">Java Pizzaria System</h5>
                            <div className="text-center">
                                <img className="img-fluid float-center" src="/images/repoImgs/pizzariaSalieri.png" alt="" width={250}/>
                            </div>
                            <p className="card-text paragrafoCard">Project developed in the field of OOP, aims to focus on the specialties of Java regarding the pillars of the subject. The chosen theme was a virtual menu from a fictional pizzeria called Salieri.</p>
                            <div className="text-center">
                                <a href="https://github.com/eduardolpsss/pizzariaSalieri" target="_blank" rel="noreferrer" className="btn btn-dark">Go to this repository</a>
                            </div>
                        </div>
                    </div>   
                    <br/>
                </div>

                <div className="col">
                    <div className="card text-white backgroundCard">
                        <h5 className="text-center card-header">myFirstHomeStateOfficeSystem</h5>
                        <div className="card-body">
                            <h5 className="text-center card-title">Java State Office System</h5>
                            <div className="text-center">
                                <img className="img-fluid float-center" src="/images/repoImgs/MPC.png" alt="" width={255} height={255}/>
                            </div>
                            <p className="card-text paragrafoCard">The My First Home project is a Java SE program in order to make things easier in a real estate office, through it you can register properties, users and sellers, and the program provides a complete tracking platform.</p>
                            <div className="text-center">
                                <a href="https://github.com/eduardolpsss/tsToJsWithGulp" target="_blank" rel="noreferrer" className="btn btn-dark">Go to this repository</a>
                            </div>
                        </div>
                    </div> 
                    <br/> 
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card text-white backgroundCard">
                        <h5 className="text-center card-header">webCrudApplication</h5>
                        <div className="card-body">
                            <h5 className="text-center card-title">Node.js Crud System</h5>
                            <div className="text-center">
                                <img className="img-fluid float-center" src="/images/repoImgs/webCrudApp.png" alt="" width={255} height={255}/>
                            </div>
                            <p className="card-text paragrafoCard">Fullstack app using the Express framework and others Node.js packages with HTML, CSS (including Bootstrap) and JavaScript to make queries using MySQL with specific program accompaniment. The purpose of this project is to study the connection of Express and the construction of a CRUD together with a database.</p>
                            <div className="text-center">
                                <a href="https://github.com/eduardolpsss/webCrudApplication" target="_blank" rel="noreferrer" className="btn btn-dark">Go to this repository</a>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>

                <div className="col">
                    <div className="card text-white backgroundCard">
                        <h5 className="text-center card-header">wordleCloneApp</h5>
                        <div className="card-body">
                            <h5 className="text-center card-title">WindUp Wordle Clone Application</h5>
                            <div className="text-center">
                                <img className="img-fluid float-center" src="/images/repoImgs/wordleCloneApp.png" alt="" width={255} height={255}/>
                            </div>
                            <p className="card-text paragrafoCard">Clone of the game Wordle made with HTML, CSS (Animate.css) and JavaScript. An API (WordsAPI) was used through Node.js to request the words used in the game, to run it, a key is needed. the Wordle clone was developed together with a registration and ranking system of players for the web development subject.</p>
                            <div className="text-center">
                                <a href="https://github.com/eduardolpsss/wordleCloneApp" target="_blank" rel="noreferrer" className="btn btn-dark">Go to this repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    };
};

export default Repositories;