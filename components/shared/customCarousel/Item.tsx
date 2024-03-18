import Image from "next/image";
import React from "react";

export const CarouselItem = ({ s }: any) => {
    return (
        <div className="carousel-item" >
            <div>
                <img width={100} height={100} alt="" className="carousel-img" src={s} />
            </div>

        </div>
    );
};