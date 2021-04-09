import React from 'react';

const Video = ({ videoSrcURL, ...props }) => (
  <div className="video">
    < iframe
      src={videoSrcURL}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      width="560"
      height="315"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      title="DevOps Party Games episode video"
    />
  </div>


)
export default Video