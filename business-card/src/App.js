import image from './profile.jpeg';
import facebook from './facebook.png';
import instagram from './instagram.png';
import pinterest from './pinterest.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
        <div className='CardBg'>
              <div className='Content'>
                <img src={image} className="App-image" alt="image" />
                <h1 className='Name'>Mégane Londoño</h1>
                <h3 className='JobTitle'>Web Designer</h3>
                <p className='Company'>Lenus eHealth</p>
                <a href="mailto:megane.londono@hotmail.com" target="_blank"><button className='Email'>Email</button></a>
                <a href="https://www.linkedin.com/in/meganelondonohermann/" target="_blank"><button className='LinkedIn'>LinkedIn</button></a>
                <h2>About</h2>
                <p className='About'>I am a Web Designer based in Malmö, Sweden with a 
                passion for anything creative. I love frontend programming,
                as much as I like working with my hands on different DIY projects.</p>
                <h2>Interests</h2>
                <p className='Interests'>Drawer. Photographer. Foodie. Reader.
                Music enthusiast. Coffee addict.</p>
              </div>
              <div className='Footer'>
                <a href="https://www.facebook.com/megane.londono/" target="_blank"><img src={facebook} className="SoMeIcon" alt="SoMe-icon-1" /></a>
                <a href="https://www.instagram.com/meganelndn/" target="_blank"><img src={instagram} className="SoMeIcon" alt="SoMe-icon-2" /></a>
                <a href="https://www.pinterest.es/meganexx/" target="_blank"><img src={pinterest} className="SoMeIcon" alt="SoMe-icon-3" /></a>
              </div>

        </div>
    </div>
  );
}