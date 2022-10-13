import '../style/footer.css';
import ProfilePicture from '../img/picture-of-me.JPG';
import EmailImg from '../img/email.png';
import PhoneImg from '../img/phone.png'

export default function Footer(){

    function goToGit() {
        window.open("https://github.com/zbob889");
    };

    function goToLinkedIn() {
        window.open("https://www.linkedin.com/in/zachary-roberts-b7658b253/");
    }

    return(
        <div className='footerContainer'>
            <div className='contactInfo'>
                <p className='contactMe'>Contact Me</p>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                <div>
                    {/* <p>1234 Random Road</p> */}
                    <p>Arnhem, Netherlands </p>
                </div>
                <div>
                    <div className='phoneAndEmail'>
                        <img className='footerIcon' src={PhoneImg} alt="Phone" />
                        <p>+31 06 82 81 88 84</p>
                    </div>
                    <div className='phoneAndEmail'>
                        <img className='footerIcon' src={EmailImg} alt="Email" />
                        <p>zroberts1138@gmail.com</p>
                    </div>
                </div>
                <div className='footerIcons'>
                    <input onClick={goToGit} type='image' className='footerIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                        alt='Link to my Github' />
                    <input onClick={goToLinkedIn} type='image' className='footerIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                        alt='Link to my LinkedIn' />
                </div>
            </div>
            <img className='footerPicture' src={ProfilePicture} alt="Me wearing a beanie, glasses, and a winter coat" />
        </div>
    );
};