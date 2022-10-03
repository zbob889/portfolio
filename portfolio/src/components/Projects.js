import '../style/project.css';
import ProjectCard from './ProjectCard';
import BattleshipImg from '../img/project-img/Battleship-App.png';
import WeatherImg from '../img/project-img/Weather-App.png';
import PenStore from '../img/project-img/PenStore.png';

export default function Projects(){

    return(
        <div className='totalProject'>
            <div className='myWork'>My work</div>
            <div className='projectContainer'>
                <ProjectCard
                    projectUrl='https://zbob889.github.io/battleship/dist/index.html'
                    gitUrl='https://github.com/zbob889/battleship'
                    projectImg={BattleshipImg}
                    imgAlt='My battleship app'
                    projectName='Battleship'
                    projectDesc='Play Battleship against a computer.'
                />

                <ProjectCard 
                    projectUrl='https://zbob889.github.io/weather-app/dist/index.html'
                    gitUrl='https://github.com/zbob889/weather-app'
                    projectImg={WeatherImg}
                    imgAlt='My weather app'
                    projectName='Weather App'
                    projectDesc='See the current weather anywhere in the world.'
                />

            <ProjectCard
                    projectUrl='https://zbob889.github.io/shopping-cart/#/'
                    gitUrl='https://github.com/zbob889/shopping-cart'
                    projectImg={PenStore}
                    imgAlt='My shopping cart app'
                    projectName='Shopping Cart App'
                    projectDesc='A mock shopping cart for a fictional pen store.'
                />
            </div>
        </div>
    );
};