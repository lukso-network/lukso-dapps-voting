import React from 'react'
import logoSokol from '../assets/images/logos/Lukso_Wordmark_navy.png'
import menuIconBase from '../assets/images/icons/icon-menu.svg'
import menuIconSokol from '../assets/images/icons/icon-menu-sokol.svg'
import menuOpenIconBase from '../assets/images/icons/icon-close.svg'
import menuOpenIconSokol from '../assets/images/icons/icon-close-sokol.svg'
import NavigationLinks from './NavigationLinks.jsx'
import MobileMenuLinks from './MobileMenuLinks.jsx'
import { constants } from '../constants'

export const Header = ({ netId, baseRootPath, navigationData, showMobileMenu, onMenuToggle }) => {
  const thisIsTestnet = netId in constants.NETWORKS && constants.NETWORKS[netId].TESTNET
  const headerClassName = thisIsTestnet ? 'sokol' : 'sokol'
  const logoImageName = thisIsTestnet ? logoSokol : logoSokol
  const menuIcon = thisIsTestnet ? menuIconSokol : menuIconBase
  const menuOpenIcon = thisIsTestnet ? menuOpenIconSokol : menuOpenIconBase

  return (
    <header className={`header ${headerClassName}`}>
      {showMobileMenu && (
        <div className="header-mobile-menu-container">
          {<MobileMenuLinks onMenuToggle={onMenuToggle} navigationData={navigationData} />}
        </div>
      )}
      <div className="container">
        <a className="header-logo-a" href={baseRootPath}>
          <img className="header-logo" src={logoImageName} alt="" />
        </a>
        <span className="logo-title">Voting</span>
        <div className="links-container">
          <NavigationLinks navigationData={navigationData} />
        </div>
        <div className="mobile-menu">
          <img
            alt=""
            className={showMobileMenu ? 'mobile-menu-open-icon' : 'mobile-menu-icon'}
            onClick={onMenuToggle}
            src={showMobileMenu ? menuOpenIcon : menuIcon}
          />
        </div>
      </div>
    </header>
  )
}
