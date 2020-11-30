import React, { useState } from 'react';

function App() {

  const [common, setCommon] = useState(0);
  const [uncommon, setUncommon] = useState(0);
  const [rare, setRare] = useState(0);
  const [epic, setEpic] = useState(0);
  const [legendary, setLegendary] = useState(0);
  const [blackIce, setBlackIce] = useState(0);
  const [duplicate, setDuplicate] = useState(0);

  const increaseCounter = (pack) => {
    switch(pack) {
      case 0:
      setCommon(common+1)
      break
      case 1:
      setUncommon(uncommon+1)
      break
      case 2:
      setRare(rare+1)
      break
      case 3:
      setEpic(epic+1)
      break
      case 4:
      setLegendary(legendary+1)
      break
      case 5:
      setBlackIce(blackIce+1)
      break
      case 6:
      setDuplicate(duplicate+1)
      break
      default :
      return
    }
  }

  return (
    <div className="container mt-5 pt-5">
      <table  className='table text-center'>
        <th>Common</th>
        <th>Uncommon</th>
        <th>Rare</th>
        <th>Epic</th>
        <th>Legendary</th>
        <th>Black Ice</th>
        <th>Duplicate</th>
        <tr>
          <td> {common} </td>
          <td> {uncommon} </td>
          <td> {rare} </td>
          <td> {epic} </td>
          <td> {legendary} </td>
          <td> {blackIce} </td>
          <td> {duplicate} </td>
        </tr>
        <tr>
          <td> <button className='btn btn-light' onClick={() => increaseCounter(0)} >Common</button> </td>
          <td> <button className='btn btn-success' onClick={() => increaseCounter(1)} >Uncommon</button> </td>
          <td> <button className='btn btn-primary' onClick={() => increaseCounter(2)} >Rare</button> </td>
          <td> <button className='btn btn-danger' onClick={() => increaseCounter(3)} >Epic</button> </td>
          <td> <button className='btn btn-warning' onClick={() => increaseCounter(4)} >Legendary</button> </td>
          <td> <button className='btn btn-info' onClick={() => increaseCounter(5)} >Black Ice</button> </td>
          <td> <button className='btn btn-dark' onClick={() => increaseCounter(6)} >Duplicate</button> </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
