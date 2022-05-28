import React from "react";
import "./styles.scss";

export function Iframe({ embedId }) {
  return (
    <div class=" video__responsive">
      <iframe
        width="512px"
        height="297px"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
