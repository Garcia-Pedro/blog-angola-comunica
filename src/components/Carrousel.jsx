import React, {useRef} from "react";

import "./css/carrousel.scss";
import backIcon from "../assets/images/icons/icons8_back_to_1.svg";
import nextIcon from "../assets/images/icons/icons8_next_page.svg";

export default (props) => {
    const carrousel = useRef();

    function handleLeftClick(ev)
    {
        ev.preventDefault();

        carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    }

    function handleRightClick(ev) 
    {
        ev.preventDefault();
        carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    }

  return (
    <>
      <div ref={carrousel} className="carrousel">{props.children}</div>

      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src={backIcon} alt="Anterior" />
        </button>
        <button onClick={handleRightClick}>
          <img src={nextIcon} alt="Seguinte" />
        </button>
      </div>
    </>
  );
};
