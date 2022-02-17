import '../styles/Main.css';
import image from '../images/profile.jpeg';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';

export default function Main() {
    return (
        <div className='Content'>
            <img src={image} className="App-image" alt="image" />
                <h1 className='Name'>Mégane Londoño</h1>
                <h3 className='JobTitle'>Web Designer</h3>
                <p className='Company'>Lenus eHealth</p>
                <a href="mailto:megane.londono@hotmail.com" target="_blank"><button className='Email'><img src={email} className="Btn-Email" alt="email" />Email</button></a>
                <a href="https://www.linkedin.com/in/meganelondonohermann/" target="_blank"><button className='LinkedIn'><img src={linkedin} className="Btn-Linkedin" alt="linkedin" />LinkedIn</button></a>
                
                <h2>About</h2>
                <p className='About'>I am a Web Designer based in Malmö, Sweden with a 
                passion for anything creative. I love frontend programming,
                as much as I like working with my hands on different DIY projects.</p>
                <h2>Interests</h2>
                <p className='Interests'>Drawer. Photographer. Foodie. Reader.
                Music enthusiast. Coffee addict.</p>
        </div>
    );
}