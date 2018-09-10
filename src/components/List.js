import React, { Fragment } from 'react'

const List = ({ title, array, desc }) => (
  <div className="list">
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="items">
      {array.map(x => (
        <Fragment>
          <p>
            <a href={x.link} target="blank" rel="noopener noreferrer">
              {x.name}
            </a>
          </p>

          {!desc ? <p>{x.desc}</p> : null}
        </Fragment>
      ))}
    </div>
  </div>
)

export default List
