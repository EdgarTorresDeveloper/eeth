import React from 'react';

const HomeScreen =()=>{
    return(
        <div className="home__main">
            <div className="header-screen">
                <h2>HOME</h2>
                <hr/>
            </div>
            <div className="home__header columns is-centered mt-10">

                <div className="card column is-full-mobile is-two-thirds-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd animate__animated animate__fadeIn">
                    
                    <div className="card-header">
                        <h4 className="card-header-title">EDUCATION</h4>
                    </div>

                    <section className="card-content">
                        <div className="content">
                            <div>
                                <h5>BACHELOR DEGREE</h5>
                                <p>COMPUTER ENGINEERING<br/>
                                UTEG OLIMPICA / 2016 - 2020 / FINISHED
                                </p>
                            </div>
                            <br/>
                            <div>
                                <h5>CERTIFICATES</h5>
                                <h6>WEB PROGRAMMING</h6>
                                <p>Guadalajara, Jalisco, Mexíco, 9th June 2016</p>

                                <h6>COMPUTER NETWORKING</h6>
                                <p>Guadalajara, Jalisco, Mexíco, 1st November 2018</p>

                                <h6>PROULEX'S ENGLISH</h6>
                                <p>Guadalajara, Jalisco, Mexíco, 15th December 2020</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="card column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd animate__animated animate__fadeIn">
                    
                    <div className="card-header">
                        <h4 className="card-header-title">OBJECTIVES</h4>
                    </div>

                    <section className="card-content">
                        <div className="content">
                            <ul>
                                <li>#.Get more experience as Web Developer</li>
                                <li>#.Work with teams to complete many tasks/projects </li>
                                <li>#.Perfect english</li>
                                <li>#.Learn new technologies</li>
                                <li>#.Optimize code blocks / apply good practices on my projects</li>
                                <li>#.Learn more design to have new/great techniques</li>
                                <li>#.Up-to-date every day</li>
                                <li>#.Be more quick designing and programming</li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>

            <div className="home__content columns mt-10 ">

                <div className="card column is-four-fifths mt-10 animate__animated animate__fadeInUp">

                    <div className="card-header">
                       <h4 className="card-header-title">Hello World... I am Edgar</h4> 
                    </div>
                    
                    <section className="card-content">
                        <div className="content">
                            <p>I want to focus on upgrade my skills as web developer. <br/>
                            I have worked on many projects as a freelancer, helping family and friends about how to solve their problems using my skills, also I have
                            developed many projects in college. I have created and developed as a fullstack developer, programming, designing styles and creating database structure, pseudocode, documentations and handbooks.<br/>
                            I don't only developed on the web, I also programmed software for mobile, desktop, Embedded systems.
                            </p>
                            <p>
                                I have experience in a company that develop apps and web sites, I have worked more of 3 year as full stack developer. I have been on ten projects and finished six successfully approximately.
                                I use Jira, bitbucket and Github to upload my progress every day. <br/>
                                I work as a Full-Stack but Front-end is my passion and my strongest skill, I love to design and comsume APIs in front-end. Also I know responsive website and create components to motivate user to use my webs and apps.
                            </p>
                        </div>       
                    </section>

                    <footer className="card-footer">
                        <p>Thanks for visit my web site!.</p>
                    </footer>

                </div>

            </div>

        </div>


    );
}

export default HomeScreen;