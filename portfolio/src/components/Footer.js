import '../style/footer.css';
import ProfilePicture from '../img/placeholder-picture.jpeg';
import EmailImg from '../img/email.png';
import PhoneImg from '../img/phone.png'

export default function Footer(){

    return(
        <div className='footerContainer'>
            <div className='contactInfo'>
                <p className='contactMe'>Contact Me</p>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                <div>
                    <p>1234 Random Road</p>
                    <p>Random Town, Random State 12345</p>
                </div>
                <div>
                    <div className='phoneAndEmail'>
                        <img className='footerIcon' src={PhoneImg} alt="Phone" />
                        <p>555-555-5555</p>
                    </div>
                    <div className='phoneAndEmail'>
                        <img className='footerIcon' src={EmailImg} alt="Email" />
                        <p>email@gmail.com</p>
                    </div>
                </div>
                <div className='footerIcons'>
                    <img className='footerIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                        alt='Link to my Github' />
                    <img className='footerIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                        alt='Link to my LinkedIn' />
                </div>
            </div>
            <img className='footerPicture' src={ProfilePicture} alt="Me wearing a beanie, glasses, and a winter coat" />
        </div>
    );
};