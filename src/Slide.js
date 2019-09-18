import React from 'react';

const Slide = props => {
  const { name, description, imageUrl, index, activeIndex } = props;
  return (
    <div
      className={
        index === activeIndex
          ? "position-relative slide slide-active"
          : "slide"
      }
    >
      <img src={imageUrl} alt={name} className="vw-100 vh-100" />
      <p className="slide-content py-3 w-100">
        <span className="d-block mx-3 content-name">{name}</span>
        <span className="d-block mx-3 text-center content-description">{description}</span>
      </p>
    </div>
  );
}

export default Slide;