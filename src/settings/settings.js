import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../index/components/menu'
import SelectSetting from './components/selectSetting'
import ChangeSetting from './components/changeSetting'

function Container () {
  const blurModd = useSelector(state => state.blurMod)

  return (
    <div className={blurModd === true ? 'container-blur-mod' : 'container'}>
      <Menu />
      <SelectSetting />
      <ChangeSetting />
    </div>

  )
}

export default Container
