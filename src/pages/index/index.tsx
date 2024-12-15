import React from 'react'
import Slideshow from '../../components/Slideshow';

export const MainIndex = () => {
    const images = [
        "https://soft.store/upload/slider/banner1.webp",
        "https://soft.store/upload/slider/banner2.webp",
        "https://soft.store/upload/slider/banner3.webp",
      ];

    const routes = [
        "/route1",
        "/route2",
        "/route3",
    ];

    return (
        <div className="w-full bg-transparent h-48 sm:h-56 md:h-64 lg:h-72">
          <Slideshow images={images} routes={routes} interval={3000} />
        </div>
    );
}
