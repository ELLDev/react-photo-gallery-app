import React from "react";
import NotFound from "./NotFound";

const PhotoContainer = (props) => {
  const results = props.data;
  const query = props.queryName;
  let photos = results.map((photo) => (
    <li key={photo.id}>
      <img
        key={photo.id}
        alt=""
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
      />
    </li>
  ));
  if (photos.length > 0) {
    return (
      <div className="photo-container">
        <h2>{query} Results</h2>
        <ul>{photos}</ul>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default PhotoContainer;
