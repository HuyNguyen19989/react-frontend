import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import '../scss/carousel_1.scss';
import op from '../image/op.png';
import boruto from '../image/boruto.png';
import heroaca from '../image/heroaca.png';


const items = [
  {
    src: op,
    altText: 'One Piece',
    caption: 'One Piece',
    description: 'Truyen Hay VCLLLLLLLLLLL'
  },
  {
    src: boruto,
    altText: 'Boruto',
    caption: 'Boruto',
    description: 'Truyen Hay VCLLLLLLLLLLL'
  },
  {
    src: heroaca,
    altText: 'Hero academic',
    caption: 'Hero academic',
    description: 'Truyen Hay VCLLLLLLLLLLL'
  }
];

const Crltwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className='center-item-hor back-color crl-item-height shadow'
      >
        
        <img id='img_sec' src={item.src} alt={item.altText} className='center-item-ver' />
        <CarouselCaption captionText={item.description} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  const myStyle = {
    backgroundColor: 'white',
    padding: '12px'
  }

  return (
    <div style={myStyle} className='sec-1-crl'>
        <h3>Truyện trả phí</h3>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      
    >
      
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}    />
      {slides}
      
    </Carousel>
    </div>
  );
}

export default Crltwo;