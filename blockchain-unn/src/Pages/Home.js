import '../App.css';
import  React, {useContext} from 'react';
import { ThemeContext } from '../Components/Theme';
import HeroHome from '../Components/HeroHome';


const Home = () => {

  const { theme } = useContext(ThemeContext);

    return (
        <div className={theme ? `App App-dark ` :  `App App-light `}>
            <HeroHome />
        </div>
    )
}

export default Home;