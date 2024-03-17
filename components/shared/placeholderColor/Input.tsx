"use client"
import React, { useState } from 'react';

function PassInput({ contry = 'Select', showInputPassword = false, showVisibilityToggle = false, showSelectOption = false, placeholder = 'Password *' }) {
    const [showPassword, setShowPassword] = useState(false);


    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const [name, setName] = useState('');


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        }
    };

    const handleInputFocus = (e: any) => {
        e.target.nextElementSibling.classList.add('hidden');
    };

    const handleInputBlur = (e: any) => {
        const $this = e.target;
        if ($this.value.length === 0) {
            $this.nextElementSibling.classList.remove('hidden');
        }
    };


    return (
        <div className="mt-2 relative">
            <input
                placeholder={placeholder}
                className='focus:outline-none border-b py-2 text-xs w-full pr-10'
                type={showPassword ? "text" : "password"}
            />
            {showVisibilityToggle && (
                <button
                    type="button"
                    onClick={handleTogglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center justify-center h-full w-10 text-gray-400 hover:text-gray-700 focus:outline-none"
                >
                    <span className="material-symbols-outlined">
                        {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                </button>
            )}
        </div>
    );
}

export default PassInput;