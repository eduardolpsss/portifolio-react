import React from "react";
import AbilitiesImgs from "./AbilitiesImgs";

export default function Abilities() {
    return (
        <>
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
                            {/* Imgens das habilidades */}
                            <AbilitiesImgs/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Métodos de trabalho e atividades desenvolvidas */}
            <div className="container">
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
        </>
    );
}