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
            <p className='text'>Before web development, I struggled with finding a career that would scratch my brain in the right
                ways.  I love language and linguistics, formal logic, and anything and everything creative.</p>
            <p className='text'>But once I began studying web development full time via The Odin Project, I knew that I had found 
                a career path I could be passionate about.  Something that would satisfy my drive to problem solve and fulfill my 
                desire for life-long learning, all while letting me express myself creatively.</p>
            <p className='text'>Now I'm looking to use and improve my web development skills.  Have any entry level position on 
                your team and are looking for someone disciplined who loves to learn from those around them?  I'm your person.</p>
            <div className='aboutMeFooter'>
                <input onClick={goToGit} type='image' className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                    alt='Link to my Github' />
                <input onClick={goToLinkedIn} type='image' className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                    alt='Link to my LinkedIn' />
            </div>
        </div>
    );
};