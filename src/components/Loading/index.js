import React from 'react'
//import xDaiLogo from './xdai.svg'
import poaLogo from './core.svg'
import luksoLogo from './lukso.png'
import sokolLogo from './sokol.svg'
import kovanLogo from './kovan.svg'

const getLogoSrc = networkBranch => {
  return (
    {
      core: poaLogo,
      l14: luksoLogo,
      sokol: sokolLogo,
      //dai: xDaiLogo,
      kovan: kovanLogo
    }[networkBranch] || luksoLogo
  )
}

export const Loading = ({ networkBranch }) => {
  return (
    <div className={`ld-Loading ld-Loading-${networkBranch}`}>
      <img className={`ld-Loading_Image ld-Loading_Image-${networkBranch}`} src={getLogoSrc(networkBranch)} alt="" />
      <div className="ld-Loading_Animation">
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
        <div className="ld-Loading_AnimationItem" />
      </div>
    </div>
  )
}
