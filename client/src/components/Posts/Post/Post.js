import React, { useState } from "react";
import moment from "moment";

const Post = (props) => {
  const [checkText, setCheckText] = useState(false);
  const [checkSelectButton, setCheckSelectButton] = useState(false);

  return (
    <div className="post">
      <div className="creator">
        <img
          src="https://khoahocphattrien.vn/Images/Uploaded/Share/2016/12/20/Nhung-buc-anh-dep-nhat-2016-chia-se-tren-Flickr_4.jpg"
          alt=""
        />
        <p>Creator</p>
        <div
          id="select-button"
          onClick={() => setCheckSelectButton(!checkSelectButton)}
        >
          <div id="button"></div>
        </div>
      </div>
      {checkSelectButton && (
        <div id="select-box">
          <p>Update</p>
          <p>Delete</p>
          <p onClick={() => setCheckSelectButton(!checkSelectButton)}>Cancel</p>
        </div>
      )}
      {checkSelectButton && <div id="bg"></div>}
      <div className="post-details">
        <img src={props.post.selectedFile} alt={props.post.title} />
        <div className="like-post">
          <ul>
            <li>
              <svg
                aria-label="Like"
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </li>
            <li>
              <svg
                aria-label="Comment"
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  clip-rule="evenodd"
                  d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </li>
          </ul>
          <p> {props.post.likeCount} likes</p>
        </div>
        <div className="content">
          <p>
            <span id="username">Creator</span>
            <span>{props.post.title}</span>
          </p>
          <p id="tags">{props.post.tags.map((tag) => `#${tag} `)}</p>
          <p>
            <span className="teaser">{props.post.content.slice(0, 60)}</span>
            {checkText && (
              <span className="complete">
                {props.post.content.slice(60, props.post.content.length)}
              </span>
            )}
            {props.post.content.length > 60 && !checkText && (
              <span className="more" onClick={() => setCheckText(!checkText)}>
                ... See more
              </span>
            )}
            {checkText && (
              <span className="more" onClick={() => setCheckText(!checkText)}>
                &nbsp;Hidden
              </span>
            )}
          </p>
        </div>
        <p id="post-date">
          {moment(props.post.createAt).startOf("hour").format("LL")}{" "}
        </p>
      </div>

      <div className="comment">
        <input type="text" placeholder="Add a comment" />
        <button disabled>Post</button>
      </div>
    </div>
  );
};

export default Post;
