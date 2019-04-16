import React from 'react'
import { constants } from './constants'

const styles = netId => {
  const core = {
    backgroundColor: 'rgba(253, 206, 196, 0.8)'
  }
  const sokol = {
    backgroundColor: 'rgba(253, 206, 196, 0.8)'
  }

  if (netId in constants.NETWORKS) {
    return constants.NETWORKS[netId].TESTNET ? sokol : core
  }

  return core
}
const Loading = ({ netId }) => (
  <div className="loading-container" style={styles(netId)}>
    <div className="loading">
      <div className="loading-i" />
      <div className="loading-i" />
      <div className="loading-i" />
      <div className="loading-i" />
      <div className="loading-i" />
      <div className="loading-i" />
    </div>
  </div>
)
export default Loading
