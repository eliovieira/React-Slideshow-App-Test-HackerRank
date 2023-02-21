import React from "react";
import { useState } from "react";

function Slides({ slides }) {
  const [activeSlideId, setActiveSlideId] = useState(0);

  return (
    <div>
      <h1>teste</h1>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => setActiveSlideId(0)}
        >
          Restart
        </button>

        <button
          data-testid="button-prev"
          className="small"
          onClick={() => setActiveSlideId(activeSlideId - 1)}
          disabled={activeSlideId === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => setActiveSlideId(activeSlideId + 1)}
          disabled={activeSlideId === slides.length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[activeSlideId].title}</h1>
        <p data-testid="text">{slides[activeSlideId].text}</p>
      </div>
    </div>
  );
}

export default Slides;
