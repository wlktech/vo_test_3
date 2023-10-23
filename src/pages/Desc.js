import React, { useState } from 'react'

export default function Desc({desc}) {
    const [showFullText, setShowFullText] = useState(false);

    const handleClick = () => {
      setShowFullText(!showFullText);
    };
  return (
    <div>
        <h6>Description - {desc ? (showFullText ? desc : desc.slice(0, 50)) : ''}</h6>
        <div className="text-end">
            <button className="btn btn-sm btn-outline-primary" onClick={handleClick}>
                {showFullText ? 'Read Less' : 'Read More'}
            </button>
        </div>
    </div>
  )
}
