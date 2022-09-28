import '../style/project-card.css';
import linkImg from '../img/open-in-new.png';

export default function ProjectCard(props){


    const {gitUrl, imgAlt, projectDesc, projectImg, projectName, projectUrl} = props;

    function goToGit(){
        window.open(`${gitUrl}`);
    };

    function goToProject(){
        window.open(`${projectUrl}`);
    };

    console.log(gitUrl);

    return(
        <div className="projectCard">
            <img className="projectImg" src={projectImg} alt={imgAlt} />
            <div className='projectInfo'>
                <div className='projectHeader'>
                    <p className='projectName'>{projectName}</p>
                    <div className='projectIcons'>
                        <input onClick={goToGit} type='image' className='projectIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='Link to git-project' />
                        <input onClick={goToProject} type='image' className='projectIcon' src={linkImg} alt="Link to project" />
                    </div>
                </div>
                <p className='projectDescription'>{projectDesc}</p>
            </div>
        </div>
    );
};