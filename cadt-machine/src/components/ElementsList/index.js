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

  function initials(name) {
    const separate = name.split('');
    const initial = `${separate[0].charAt(0)}${separate[0].charAt(0)}`;
    return initial;
  }

  return (
    <ul>
      <li className="elementTitle">
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
        data[component].slice(0, 4).map((item) => (
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
                  <div className="userName">
                    {item.user_id_last_update === 1 ? (
                      initials(data.users[0].name)
                    ) : (
                      initials(data.users[1].name)
                    )}
                  </div>
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
