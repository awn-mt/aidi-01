// LikeButton.js
import React, { useState } from "react";
import "./App.css";
function LikeButton() {
const [likes, setLikes] = useState(0);
const [liked, setLiked] = useState(false);
return (
<button
 className={`like-button ${liked ? 'liked' : ''}`}
 onClick={() => {
   setLikes(likes + 1);
   setLiked(true);
 }}
  >
   {likes} Likes
  </button>
);
}
export default LikeButton;
