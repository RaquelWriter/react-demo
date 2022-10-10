import { useState } from 'react';
import '../stylesheets/AddPost.css';

function AddPost({ handleAddPost }) {
  const [postText, setPostText] = useState('');
  const characterlimit = 200;

  const handleChange = (event) => {
    if (characterlimit - event.target.value.length >= 0) {
      setPostText(event.target.value);
    }
  };

  const handleSave = () => {
    if (postText.trim().length > 0) {
      handleAddPost(postText);
      setPostText('');
    }
  };

  return (
    <div className='post new'>
      <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a Post'
        value={postText}
        onChange={handleChange}
      ></textarea>
      <div className='post-footer'>
        <small>{characterlimit - postText.length} remaining</small>

        <button className='save' onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddPost;
