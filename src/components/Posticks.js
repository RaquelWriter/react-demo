
import { useState } from 'react';
import { nanoid } from 'nanoid';
import '../stylesheets/Button.css';
import '../stylesheets/Posticks.css';

import Post from '../components/Post';
import AddPost from '../components/AddPost';
import SearchPosts from '../components/SearchPosts';
import EditPost from '../components/EditPost';

function Posticks(){
  const [posts, setPosts] = useState([
    {
      id: nanoid(),
      text: "All that glitters is not gold.",
      date: "15/04/2020"
    },
    {
      id: nanoid(),
      text: "Ask, and it shall be given you; seek, and you shall find.",
      date: "15/08/2020"
    },  
    {
      id: nanoid(),
      text: "Not all those who wander are lost.",
      date: "25/04/2021"
    },
    {
      id: nanoid(),
      text: "The truth will set you free.",
      date: "30/09/2022"
    },
    {
      id: nanoid(),
      text: "To err is human; to forgive, divine.",
      date: "01/01/2022"
    }
  ]);

  const addPost = (text) => {
    const date = new Date();
    const newPost = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const lastPost = [...posts, newPost];
    setPosts(lastPost);
  };

  const deletePost = (id) => {
    const resultPosts = posts.filter((item) => item.id !==id);
    /*const resultPosts = posts.splice(id, 1);*/
    setPosts(resultPosts);
  }

  /* TO DO */
  const [isPopUpVisible, setPopUpVisible] = useState('hidden');

  const editPost = (id, text) => {
    /*setPopUpVisible('visible');*/
    console.log(id + text);
    setPosts (prevState => {
      const newState = prevState.map(item => {
        // If found the id, replace the text
        if (item.id === id) {
          return {...item, text: text};
        }
        // If not, return the object as it was before
        return item;
      });
      return newState;
    });
  }

  /* SEARCH FILTER */
 const [searchPost, setSearchPost] = useState(''); 
 const searchingArr = posts.filter((item) => item.text.toLowerCase().includes(searchPost));

 /* CHANGE COLOR OF THE POSTS */
 const [colorPost, setColorPost] = useState('lightyellow');
 const manageColorPost = (color) => {
  setColorPost(color);
 }
  return(
    <>
    
    <div className='container' id='container'>
      <h1>POSTICKS</h1>
      <div className='choose-color-div'>Choose a color:
        <div className='small-box' id='choose-blue-box' onClick={() => manageColorPost('lightblue')}></div>
        <div className='small-box' id='choose-pink-box' onClick={() => manageColorPost('lightpink')}></div>
        <div className='small-box' id='choose-coral-box' onClick={() => manageColorPost('lightcoral')}></div>
        <div className='small-box' id='choose-yellow-box' onClick={() => manageColorPost('lightyellow')}></div>
     </div>
      <div><SearchPosts handleSearchPost={setSearchPost}/></div>
      <div className='container-post-list'>
      {
        // (item.filter((item) => item.text.toLowerCase().includes(searchPost))) 
        // If the search text is in the posts then show them
        (searchingArr !== undefined) ?
          searchingArr.map((item) => (
            <Post 
              id={item.id}
              text={item.text}
              date={item.date}
              backgroundColor={colorPost}
              handleDeletePost={deletePost}
              handleEditPost={editPost}
            />
          ))
        :
        console.log('NO ES UNDEFINED')
      }
      <AddPost
        handleAddPost={addPost}/>
      </div>
      
      <div className='popUpWindow' id='popup' style={{visibility:isPopUpVisible}}>
        <EditPost 
          handleEditPost={editPost}/>
      </div>

    </div>

    </>
  );
}
export default Posticks;