/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import data from '../../assets/db.json';

function ElementsList({ component }) {
  function showDate(date) {
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);
    return `${day}/${month}/${year}`;
  }
  return (
    <ul>
      <li className="elementItem">
        {component === 'designs' ? (
          <>
            <div className="itemDetail">
              Name
            </div>
            <div className="itemDetail">
              Courses
            </div>
            <div className="itemDetail">
              Wales
            </div>
            <div className="itemDetail">
              Last update
            </div>
            <div className="itemDetail">
              By
            </div>
          </>
        ) : (
          <>
            <div className="itemDetail">
              Name
            </div>
            <div className="itemDetail">
              Machine name
            </div>
            <div className="itemDetail">
              Machine width
            </div>
            <div className="itemDetail">
              Courses
            </div>
            <div className="itemDetail">
              Last updated
            </div>
          </>
        )}

      </li>
      {
        data[component].map((item) => (
          <li className="elementItem" key={item.id}>
            {component === 'designs' ? (
              <>
                <div className="itemDetail">
                  {item.name}
                </div>
                <div className="itemDetail">
                  {item.courses}
                </div>
                <div className="itemDetail">
                  {item.wales}
                </div>
                <div className="itemDetail">
                  {showDate(item.updated)}
                </div>
                <div className="itemDetail">
                  {item.user_id_last_update}
                </div>
              </>
            ) : (
              <>
                <div className="itemDetail">
                  {item.name}
                </div>
                <div className="itemDetail">
                  {item.machine_name}
                </div>
                <div className="itemDetail">
                  {item.machine_width}
                </div>
                <div className="itemDetail">
                  {item.courses}
                </div>
                <div className="itemDetail">
                  {showDate(item.updated)}
                </div>
              </>
            )}
          </li>
        ))
      }
    </ul>
  );
}

export default ElementsList;
