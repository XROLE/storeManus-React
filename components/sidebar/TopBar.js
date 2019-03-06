import React, { Fragment } from 'react';

export default function TopBar() {
  return (
    <Fragment>
      <div className="avatar-div-container">
        <div className="avater-div">
          <img src="../../src/img/avatar.jpg" alt="Avatar" className="Avatar" />
          <p className="avatar-label">welcome: Xrole</p>
        </div>
        <div className="filter-div">
          <a href="admin-sales-viewer.html">Filter Sales By: </a>
&nbsp;
          <select name="" id="">
            <option value="">-Select All-</option>
            <option value="">Attendats</option>
            <option value="">Categories</option>
            <option value="">Date</option>
          </select>
&nbsp;
          <select name="" id="">
            <option value="">---- Select All ----</option>
            <option value="Cythia Paul">Cythia Paul</option>
            <option value="Blessing Uche">Blessing Uche</option>
            <option value="Silas Nwokeocha">Silas Nwokeocha</option>
            <option value="Idowu Samson">Idowu Samson</option>
            <option value="Mathew Jade">Mathew Jade</option>
            <option value="Will Smith">Will Smith</option>
            <option value="Cindy Eze">Cindy Eze</option>
            <option value="Simon Peter">Simon Peter</option>
          </select>
                        &nbsp;
          <button className="search-sales-by-attendant-buttton link" type="submit">
            <i className="fas fa-search" />
            <span className="search-text"> &nbsp; Search</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
}
