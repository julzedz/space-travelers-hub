import React from 'react';
import '../styles/missions.css';

const Missions = () => (
  <div className="table-container">
    <table>
      <thead className="column-header">
        <tr className="header-column-row">
          <th className="column-data">Mission</th>
          <th className="column-data">Description</th>
          <th className="column-data">Membership</th>
          <th className="column-data">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="body-column-row">
          <td className="column-data-body">1</td>
          <td className="column-data-body">1</td>
          <td className="column-data-body">
            <div className="membership-stat">
              NOT A MEMBER
            </div>
          </td>
          <td className="column-data-body">
            <button className="join-misson" type="button">
              Join Mission
            </button>
          </td>
        </tr>
        <tr className="body-column-row">
          <td className="column-data-body">2</td>
          <td className="column-data-body">2</td>
          <td className="column-data-body">
            <div className="active-membership-stat">
              Active Member
            </div>
          </td>
          <td className="column-data-body">
            <button className="leave-misson" type="button">
              Leave Mission
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default Missions;
