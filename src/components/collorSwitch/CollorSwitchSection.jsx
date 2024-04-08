import { useState } from 'react';
import arrow from '../../assets/arrow.svg'
import './CollorSwitchSection.css'

const colors = ['#009B72', '#6761A8', '#347E8D', '#AD636C', '#798186'];

const CollorSwitchSection = () =>{
   
    let [colorIndex, setColorIndex] = useState(0);
    
    const switchColor = () =>{
        setColorIndex(colorIndex + 1)
        if(colorIndex === 4){
            setColorIndex(0);
        }
    }

    return(
        <div style={{backgroundColor: colors[colorIndex]}}>
            <div className='collor-switch-section'>
                <h1 className='app-title'>Collor Flipper</h1>
                <p  style={{color: colors[colorIndex]}} className='background-color-section'> Background Color: {colors[colorIndex]} </p>
                <p className='subsection-text'>Press This Button</p>
                <img className='arrow-down-image' src={arrow} alt="arrow-down" />
                <button onClick={switchColor} className='click-me-button'>CLICK ME</button>
                <p className='subsection-text'>And See What Happens</p>
            </div>
        </div>
    )
}

export default CollorSwitchSection;