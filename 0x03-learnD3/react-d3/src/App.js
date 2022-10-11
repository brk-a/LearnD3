import React from "react";
import './App.css';
import { useState } from 'react';
import BarChart from './components/BarChart'

const App = () => {
  const [data, setData] = useState([25, 30, 45, 10, 65, 75]);

  const handleAddData = () => {
    setData([...data, Math.round(Math.random() * 100)]);
  }

  const handleFilter = () => {
    setData(data.filter(value => value <= 35));
  }

  const handleUpdate = () => {
    setData(data.map(value => value + 15));
  }
  

  return(
    <React.Fragment>
      <BarChart data={data}/>
      <button onClick={handleUpdate}>Update Data</button>
      <button onClick={handleFilter}>Filter Data</button>
      <button onClick={handleAddData}>Add Data</button>
    </React.Fragment>
  );
}

export default App