
import { FaBomb } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import '../stylesheets/Post.css';

function Post({ id, text, date, backgroundColor, handleDeletePost, handleEditPost }){

  return(
    <>
    <div className='post' style={{backgroundColor: backgroundColor}}>
      <span>
        {text}
      </span>
      <div className='post-footer'>
        <small>{date}</small>
        <FiEdit
          className='react-icon' id='edit-icon'
          onClick={() => handleEditPost(id, text)} 
        />
        <FaBomb
          className='react-icon'
          onClick={()=> handleDeletePost(id)}/>
      </div>
    </div>
    </>
  );
}

export default Post;