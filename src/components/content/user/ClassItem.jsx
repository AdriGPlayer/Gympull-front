import React from 'react'

export default function ClassItem({ name, date }) {
  return (
    <div>
        <li className="class-list-item">
            <span className="class-icon">📅</span> 
            <div>
                <p className="class-item__name">{name}</p>
                <p className="class-item__date">{date}</p>
            </div>
        </li>
    </div>
  )
}
