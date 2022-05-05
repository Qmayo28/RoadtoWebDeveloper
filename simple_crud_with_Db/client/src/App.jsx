import './App.css';
import { useState } from 'react';
import Axios from 'axios';
function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);
  const [newWage, setNewWage] = useState(0);

  // const DisplayInfo = () => {
  //   console.log(name + age + country + position + wage);
  // }; -Sample

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      alert('ADDED!');
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      console.log(response);
      setEmployeeList(response.data);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put('http://localhost:3001/update', {
      wage: newWage,
      id: id,
    }).then((response) => {
      alert('Updated');
      setEmployeeList(
        employeeList.map((val) => {
          return val.id == id
            ? {
                name: val.name,
                country: val.country,
                age: val.age,
                position: val.position,
                wage: newWage,
              }
            : val;
        })
      );
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        {/* <button onClick={DisplayInfo}>Add Employee</button> -Sample */}
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>
        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div className="container">
                //put div to looks nicer
                <table>
                  <tr>
                    <td className="Property">
                      <h3>ID:</h3>
                    </td>
                    <td>
                      <h3>{val.id}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="Property">
                      <h3>Name: </h3>
                    </td>
                    <td>
                      <h3>{val.name}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="Property">
                      <h3>Age: </h3>
                    </td>
                    <td>
                      <h3>{val.age}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="Property">
                      <h3>Country: </h3>
                    </td>
                    <td>
                      <h3>{val.country}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="Property">
                      <h3>Position: </h3>
                    </td>
                    <td>
                      <h3>{val.position}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="Property">
                      <h3>Wage: </h3>
                    </td>
                    <td>
                      <h3>{val.wage}</h3>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="updateDelete">
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {' '}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
