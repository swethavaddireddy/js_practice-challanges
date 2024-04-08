import './App.css'
import React, { useState } from 'react';

function App() {

  const employees = [
    {
      id: 1,
      name: 'swetha',
      role: 'UI Developer',
      salary: 1000
    },
    {
      id: 2,
      name: 'ram',
      role: 'GST officer',
      salary: 2000
    },
    {
      id: 3,
      name: 'raju',
      role: 'UI Developer',
      salary: 3000
    }
  ]
  const [employeeList, setEmployeeList] = useState(employees);

  const initialCheckedItems = employeeList.reduce((acc, emp) => {
    acc[emp.id] = false;
    return acc;
  }, {})
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

  const deleteEmployee = (employee) => {
    const filterEmployees = employeeList.filter((emp) => emp.id !== employee.id);
    setEmployeeList(filterEmployees);
  }
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th><input type='checkbox' checked={Object.values(checkedItems).every(Boolean)} onChange={(e) => {
              const newValue = e.target.checked;
              const updated = employeeList.reduce((acc, employee) => {
                acc[employee.id] = newValue
                return acc;
              }, {})
              setCheckedItems(updated)
            }} /></th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => (
            <tr key={employee.id}>
              <td>
                <input type='checkbox' checked={!!checkedItems[employee.id]} onChange={(e) => {
                  const newValue = e.target.checked;
                  const updated = { ...checkedItems, [employee.id]: newValue };
                  setCheckedItems(updated);
                }} />
              </td>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => deleteEmployee(employee)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
