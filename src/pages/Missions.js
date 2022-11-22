import React from 'react';
import '../styles/missions.css';

const Missions = () => (
  <div className="table-container">
    <table>
      <thead className="column-header">
        <tr className="column-row">
          <th className="column-data">Mission</th>
          <th className="column-data">Description</th>
          <th className="column-data">Membership</th>
          <th className="column-data">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="column-row">
          <td className="column-data-body">1</td>
          <td className="column-data-body">1</td>
          <td className="column-data-body">
            <div className="membership-stat">
              Not A Member
            </div>
          </td>
          <td className="column-data-body">
            <button type="button">
              Join Mission
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default Missions;
