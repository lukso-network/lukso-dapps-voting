import React from 'react'
import logoLUKSO from './lukso.png'
import { NavLink } from 'react-router-dom'

export const LogoLUKSO = ({ href = null, extraClass = '' }) => {
  return (
    <NavLink to={href} className={`sw-LogoLUKSO ${extraClass}`}>
      <img className="sw-LogoLUKSO_Image" src={logoLUKSO} alt="" />
    </NavLink>
  )
}
