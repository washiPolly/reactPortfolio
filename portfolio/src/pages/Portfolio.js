import React from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Project from "../components/Project";
import projects from "../projects.json";
import pwGenerator from "../../src/images/pwGenerator.PNG";
import workdayScheduler from "../../src/images/workdayScheduler.PNG";
import weatherDashboard from "../../src/images/weatherDash.PNG";
import burger from "../../src/images/burger.png";
import yelpcipes from "../../src/images/yelpcipes.PNG";
import project2OpenTrivia from "../../src/images/project2OpenSocialTrivia.png";
import { Link } from "react-router-dom";


function Portfolio() {
    return (
        <Wrapper>
            <Title>My Portfolio</Title>
            <Project
                name={projects[0].name}
                image={pwGenerator}
                repository={projects[0].repository}
                url={projects[0].url}
                repo={projects[0].url}
            />

            <Project
                name={projects[1].name}
                image={workdayScheduler}
                repository={projects[1].repository}
                url={projects[1].url}
                repo={projects[1].url}
            />
            <Project
                name={projects[2].name}
                image={weatherDashboard}
                repository={projects[2].repository}
                url={projects[2].url}
                repo={projects[2].url}
            />
            <Project
                name={projects[3].name}
                image={burger}
                repository={projects[3].repository}
                url={projects[3].url}
                repo={projects[3].url}
            />
            <Project
                name={projects[4].name}
                image={yelpcipes}
                repository={projects[4].repository}
                url={projects[4].url}
                repo={projects[4].url}
            />
            <Project
                name={projects[5].name}
                image={project2OpenTrivia}
                repository={projects[5].repository}
                url={projects[5].url}
                repo={projects[5].url}
            />
        </Wrapper >
    );
}

export default Portfolio;
