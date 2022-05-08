import React from 'react';
import './Sales.css'

const Sales = () => {
    return (
        <div>
<table className='container'>
  <tr>
    <th>Year</th>
    <th>Sale</th>
    <th>Estimated</th>
  </tr>
  <tr>
    <td>2019</td>
    <td>5320</td>
    <td>6000</td>
  </tr>
  <tr>
    <td>2020</td>
    <td>7504</td>
    <td>10000</td>
  </tr>
  <tr>
    <td>2021</td>
    <td>9572</td>
    <td>10000</td>
  </tr>
  <tr>
    <td>2022</td>
    <td>7152</td>
    <td>15000</td>
  </tr>
</table>
</div>
    );
};

export default Sales;