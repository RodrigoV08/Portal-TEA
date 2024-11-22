import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Certifique-se de que as imagens estejam na pasta correta
import PortalTEA1 from '../Imagens/PortalTEA1.png';
import PortalTEA2 from '../Imagens/PortalTEA2.png';
import PortalTEA3 from '../Imagens/PortalTEA3.png';

const images = [PortalTEA1, PortalTEA2, PortalTEA3];

const Carrosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    
    <div className="container-fluid p-0"> 
    
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
              <img 
                className="d-block w-100" 
                src={image} 
                alt={`Slide ${index + 1}`} 
                style={{ maxHeight: '500px', objectFit: 'contain', padding: '0 20px' }}
                 // Ajuste o padding para aumentar o espaçamento lateral
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carrosel;
