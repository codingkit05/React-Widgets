import React, { useState } from "react";
import css from "./style.css";

const Widget = () => {
  const [translation, setTranslation] = useState(0);

  const handleBtnClick = (translationValue) => {
    setTranslation(translationValue);
  };

  return (
    <>
      <div className="widget d-flex flex-column justify-content-center align-items-center">
        <div className="box container px-0 overflow-hidden d-flex justify-content-center">
          <div className="btns row gx-0">
            <div className="col">
              <button
                className="btn py-2 fw-medium btn-1 border-danger"
                type="button"
                onClick={() => handleBtnClick(0)}
              >
                ------ Detail-First ------
              </button>
            </div>
            <div className="col">
              <button
                className="btn py-2 fw-medium btn-2 border-warning"
                type="button"
                onClick={() => handleBtnClick(-100)}
              >
                ------ Detail-Second ------
              </button>
            </div>
            <div className="col">
              <button
                className="btn py-2 fw-medium btn-3 border-success"
                type="button"
                onClick={() => handleBtnClick(-200)}
              >
                ------ Detail-Third ------
              </button>
            </div>
          </div>
        </div>
        <div className="box-2 text-center overflow-hidden">
          <div className="detail d-flex">
            <div
              className="para"
              style={{ transform: `translateX(${translation}%)` }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
              amet earum voluptas ullam recusandae cupiditate temporibus esse
              dolorem odit unde incidunt nisi magni dignissimos odio ut!
              Repellendus, repellat molestiae, iusto illum porro nostrum rerum
              cupiditate, omnis necessitatibus quam voluptates expedita officiis
              iure optio. Expedita perferendis, impedit laboriosam voluptatum
              officiis eveniet nihil. Aliquam quibusdam ducimus dicta harum
              voluptatem? Asperiores.❤️❤️❤️❤️
            </div>
            <div
              className="para"
              style={{ transform: `translateX(${translation}%)` }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
              amet earum voluptas ullam recusandae cupiditate temporibus esse
              dolorem odit unde incidunt nisi magni dignissimos odio ut!
              Repellendus, repellat molestiae, iusto illum porro nostrum rerum
              cupiditate, omnis necessitatibus quam voluptates expedita officiis
              iure optio. Expedita perferendis, impedit laboriosam voluptatum
              officiis eveniet nihil. Aliquam quibusdam ducimus dicta harum
              voluptatem? Asperiores.💛💛💛💛
            </div>
            <div
              className="para"
              style={{ transform: `translateX(${translation}%)` }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
              amet earum voluptas ullam recusandae cupiditate temporibus esse
              dolorem odit unde incidunt nisi magni dignissimos odio ut!
              Repellendus, repellat molestiae, iusto illum porro nostrum rerum
              cupiditate, omnis necessitatibus quam voluptates expedita officiis
              iure optio. Expedita perferendis, impedit laboriosam voluptatum
              officiis eveniet nihil. Aliquam quibusdam ducimus dicta harum
              voluptatem? Asperiores.💚💚💚💚
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
