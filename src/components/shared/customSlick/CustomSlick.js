import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { GrFormNext, GrFormPrevious } from 'react-icons/gr'


// const CustomArrow = ({ onClick, icon, isNext }) => {
//     return (
//         <div className={`custom-slick-arrow ${isNext ? 'next' : 'prev'}`} onClick={onClick}>
//             {icon}
//         </div>
//     )
// }

const CustomSlick = ({ children }) => {

    const settings = {
        variableWidth: true,
        adaptiveHeight: true,
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // nextArrow: <CustomArrow icon={<GrFormNext />} isNext={true} />,
        // prevArrow: <CustomArrow icon={<GrFormPrevious />} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
};

export default CustomSlick;