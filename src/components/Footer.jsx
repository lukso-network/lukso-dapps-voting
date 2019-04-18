import React from 'react'
import { Link } from 'react-router-dom'
import Socials from './Socials.jsx'
import { constants } from '../constants'

export const Footer = ({ netId }) => {
  const footerClassName = netId in constants.NETWORKS && constants.NETWORKS[netId].TESTNET ? 'sokol' : ''

  return (
    <footer className={`footer ${footerClassName}`}>
      <div className="container">
        <Link to="/poa-dapps-voting" className={`footer-logo ${footerClassName}`} />
        <p className="footer-rights">
          Built by{' '}
          <a target="_blank" href="https://poa.network">
            POA Network
          </a>. All rights reserved.
        </p>
        <Socials />
      </div>
    </footer>
  )
}
