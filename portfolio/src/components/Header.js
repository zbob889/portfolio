import '../style/header.css'
import ProfilePicture from '../img/placeholder-picture.jpeg';

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
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='aboutMeFooter'>
                <input onClick={goToGit} type='image' className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                    alt='Link to my Github' />
                <input onClick={goToLinkedIn} type='image' className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                    alt='Link to my LinkedIn' />
            </div>
        </div>
    );
};