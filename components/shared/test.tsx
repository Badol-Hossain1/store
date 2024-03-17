'use client'
import React, { useState } from 'react';

const FormComponent = () => {
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


        <div className="relative">

            <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
                required
                value={name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            <span className="absolute top-0 left-0 ml-2 mt-2 text-gray-500 palceholder">Name<span className="text-red-500">*</span></span>
        </div>


    );
};

export default FormComponent;
