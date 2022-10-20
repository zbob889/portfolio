import '../style/header.css'
import ProfilePicture from '../img/picture-of-me.JPG';

export default function Header(){

    function goToGit() {
        window.open("https://github.com/zbob889");
    };

    function goToLinkedIn() {
        window.open("https://www.linkedin.com/in/zachary-roberts-b7658b253/");
    }
    

    return(
        <div className='headerContainer'>
            <img className='profilePicture' src={ProfilePicture} alt="Me wearing a beanie, glasses, and a winter coat" />
            <p className='myName'>Zachary Roberts</p>
            <p className='title'>About Me</p>
            <p className='text'>Web programming is my passion!  It satisfies my drive to problem solve and fulfills my desire 
                for life-long learning, all while letting me express myself creatively.   I'm a driven, team player that will 
                contribute to your development efforts in whatever way is needed to finish your projects on time, on budget, with 
                high quality.  I look forward to hearing from you!</p>
            <div className='aboutMeFooter'>
                <input onClick={goToGit} type='image' className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                    alt='Link to my Github' />
                <input onClick={goToLinkedIn} type='image' className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                    alt='Link to my LinkedIn' />
            </div>
        </div>
    );
};