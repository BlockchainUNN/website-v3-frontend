import '../App.css';
import  React, {useContext} from 'react';
import { ThemeContext } from '../Components/Theme';
import HeroHome from '../Components/HeroHome';
import PhotoCurl from '../Components/PhotoCurl';
import Skills from '../Components/Skills';
import Feedback from '../Components/Feedback';
import UpcomingEvents from '../Components/UpcomingEvents';
import PastEvents from '../Components/PastEvents';
import Partners from '../Components/Partners';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';


const Home = () => {

  const { theme } = useContext(ThemeContext);

    return (
        <div className={theme ? `App App-dark ` :  `App App-light `}>
            <HeroHome />
            <PhotoCurl />
            <Skills />
            <Feedback />
            <UpcomingEvents />
            <PastEvents />
            <Partners />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home;