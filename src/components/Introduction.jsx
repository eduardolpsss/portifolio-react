import React from "react";
import Typewriter from "./Typewriter";

export default function Introduction() {
    return (
        <>
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
                        I graduated in Computer Science from the Catholic University of Brasilia, I have experience working as a FullStack developer, I developed several personal and academic projects that brought me autonomy in the search and resolution of different problems, either working in teams using agile methods or in personal projects. I have solid knowledge in <b>React, Vue.js, Java and PHP (Laravel)</b> besides frameworks and databases. I always seek to develop myself daily in my area of occupation, always improving my skills.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}