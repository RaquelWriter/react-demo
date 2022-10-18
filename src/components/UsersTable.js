import { useState, useEffect } from 'react';
import '../stylesheets/UsersTable.css';

function UsersTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log('ERROR FETCHING FROM JSON ' + err));
  }, []);

  const [selectedCity, setSelectedCity] = useState([]);
  const handleUsersTable = (event) => {
    return setSelectedCity(event.target.value);
  };
  /*
  const [showAllUsers, setShowAllUsers] = useState(true);
  const handleShowAll = () => {
    return(

    );
  };
  */

  return (
    <>
      <div className='container'>
        <h1>USERS DATABASE</h1>
        <form className='form-container'>
          <label className='filterByCityText'>Filter by city:</label>
          <select onChange={handleUsersTable}>
            <option value=''>All</option>
            {data.map((item) => {
              return (
                <option value={item.address.city}>{item.address.city}</option>
              );
            })}
          </select>
        </form>
        <div className='table'>
          {data
            .filter((item) =>
              selectedCity.length !== 0
                ? item.address.city === selectedCity
                : item
            )
            .map((item) => {
              /*{data.map(item =>{ */
              return (
                <>
                  <tr key={item.id}>
                    <th colSpan='2'>
                      ID #{item.id} | Name: {item.name}
                    </th>
                  </tr>
                  <tr>
                    <td>Username</td>
                    <td>{item.username}</td>
                  </tr>
                  <tr>
                    <td>E-mail</td>
                    <td>{item.email}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>
                      {item.address.street}, {item.address.city}
                    </td>
                  </tr>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default UsersTable;
