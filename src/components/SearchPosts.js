import { FiSearch } from 'react-icons/fi';
import '../stylesheets/Posticks.css';

function SearchPosts({ handleSearchPost }) {
  return (
    <div className='search'>
      <FiSearch
        className='search-icon' 
        color='white'/>
      <input 
        onChange={(event) => handleSearchPost(event.target.value)}
        type='text' placeholder='Search...'
      />
    </div>
  );
};

export default SearchPosts;