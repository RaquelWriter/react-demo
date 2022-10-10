import { useState } from 'react';

function EditPost({ id, text, handleEditPost }) {

  const [postText, setPostText] = useState('');
  const characterlimit = 200;

  const handleChange = (event) => {
    if (characterlimit - event.target.value.length >= 0){
      setPostText(event.target.value);
    }
  }

  const handleEdit = () =>{
    if (postText.trim().length > 0){
      handleEditPost(postText);
      setPostText('');
    }
  }

  return(
    
    <div className='editPost'>  
      <textarea
        rows='8'
        cols='10'
        value={postText}
        placeholder=''
        onChange={handleChange}>
      </textarea>
    <div className='editpost-footer'>
      <small>{characterlimit - postText.length} remaining</small>

      <button className='save' onClick={handleEdit}>Change</button>
    </div>
    </div>

  );
};

export default EditPost;