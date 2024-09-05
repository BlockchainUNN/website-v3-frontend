import React, { useContext } from 'react';
import { ThemeContext } from './Theme';

function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleClick = () => {
        toggleTheme();
    };

    return (
        <div className="flex items-center">
            <label className="relative inline-block w-14 h-7">
                <input 
                    type="checkbox" 
                    checked={theme === true} 
                    onChange={handleClick} 
                    className="sr-only" 
                />
                <div 
                    className={`block w-full h-full rounded-full transition-colors ${
                        theme === true ? 'bg-gradient-to-r from-green-950 to-green-500' : 'bg-gray-300'
                    }`}
                ></div>
                <div 
                    className={`dot absolute left-0 top-0 bg-white w-7 h-7 rounded-full transition-transform ${
                        theme === true ? 'translate-x-7' : 'translate-x-0'
                    }`}
                ></div>
            </label>
        </div>
    );
}

export default ThemeSwitch;