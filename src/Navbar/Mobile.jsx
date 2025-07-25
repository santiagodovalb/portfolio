import React, { useState } from 'react'
import styles from './Navbar.module.css'
import burguer from '../common/burguer.png'
import Sidebar from './Sidebar'

export default function Mobile({ lang }) {

  const [isShowSidebar, setIsShowSidebar] = useState(false)

  return (
    <>
      <img
        onClick={() => setIsShowSidebar(!isShowSidebar)}
        src={burguer}
        alt='menu icon'
        className={styles.burguer}
      />
      <div className={styles.mobLinks}>
        <Sidebar
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
          lang={lang}
        />
      </div>
    </>
  )
}
