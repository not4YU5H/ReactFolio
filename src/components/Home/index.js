import {Link} from 'react-router-dom';
import LogoTitleA from '../../assets/images/logo-A.png';
import LogoTitleJ from '../../assets/images/logo-J.png';
import './index.scss'
import Typed from "react-typed"
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray1 = ['y','u','s','h']
    const nameArray2 = ['a','i','n']
    // const jobArray = ['A','n','d','r','o','i','d',' ','D','e','v','e','l','o','p','e','r']

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1 id='name-head'>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> 
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitleA} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray1}
                idx={15} />
                <img src={LogoTitleJ} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray2}
                idx={16} />
                <br />
                </h1>
                <h1 id='typing-anim'>
                    <Typed strings={["Student","Android Developer","Web Developer"]} typeSpeed={150} backSpeed={100} loop />
                </h1>
                <br/>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );

}

export default Home