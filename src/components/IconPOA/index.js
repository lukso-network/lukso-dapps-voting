import React from 'react'

export const IconPOA = ({
  backgroundColor = '#fff',
  color = '#000',
  height = 30,
  iconHeight = 8,
  iconWidth = 18,
  text = '',
  url = '',
  width = 30
}) => {
  return (
    <a
      className={`sw-IconPOA`}
      href={url}
      rel="noopener noreferrer"
      style={{ backgroundColor: backgroundColor, height: height, width: width }}
      target="_blank"
      title={text}
    >
      <svg
        className="sw-IconPOA_SVG"
        style={{ height: iconHeight, width: iconWidth }}
        viewBox="0 0 125 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color} fillRule="evenodd">
          <text fill={color} style={{ fontSize: 38 }} y="35">
            LUKSO
          </text>
        </g>
      </svg>
      <span style={{ fontSize: 0 }} className="sw-IconPOA_Text">
        {text}
      </span>
    </a>
  )
}
