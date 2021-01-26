import React, { useState, useContext } from "react";
import FileBase from "react-file-base64";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../../context/auth";
import { CREATE_POST } from "../../util/graphql";

// import { useForm } from "../../util/hooks";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  // const { values, onChange, onSubmit } = useForm(createPostCallback, {
  //   title: "",
  //   content: "",
  //   tags: "",
  //   selectedFile: "",
  // });
  const [values, setValues] = useState({
    title: "",
    content: "",
    tags: "",
    selectedFile: "",
  });
  const [createPost, { error, loading }] = useMutation(CREATE_POST, {
    variables: values,
    update(_, result) {
      values.title = "";
      values.content = "";
      values.tags = "";
      values.selectedFile = "";
      window.location = "/";
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
  };

  return (
    <div className="add-new-post">
      <div className="add-post">
        <div className="title">
          <h2>Create New Post</h2>
        </div>
        <div className="creator">
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/3177/3177440.svg"
            alt=""
          />
          <p>{user.username}</p>
        </div>
        <form onSubmit={handleSubmit} className="form-add">
          <input
            required
            type="text"
            name="tags"
            placeholder="Tags"
            value={values.tags}
            onChange={(e) =>
              setValues({ ...values, tags: e.target.value.split(",") })
            }
          />
          <input
            type="text"
            name="title"
            placeholder="What's on your mind?"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            required
          />
          <input
            required
            type="text"
            name="content"
            placeholder="Content"
            value={values.content}
            onChange={(e) => setValues({ ...values, content: e.target.value })}
          />
          <div>
            <FileBase
              type="file"
              multiple={false}
              name="file"
              value={values.selectedFile}
              onDone={({ base64 }) =>
                setValues({ ...values, selectedFile: base64 })
              }
            />
          </div>
          <button>{loading ? "Loading ..." : "Post"}</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
