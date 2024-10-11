import React from 'react'
import { useState,useEffect } from 'react'
import {useLocation} from 'react-router-dom'
function Tabs() {
  const[activeTab,setActivetab]=useState();
  // const params=useLocation();

  // useEffect(()=>{
  //   setActivetab(params.hash);
  // },[params])

  return (
    <div role="tablist" className="tabs tabs-bordered">
    <a role="tab" href="/#hot"
    onClick={()=>setActivetab(0)}
     className={`tab text-lg font-bold hover:text-green-600 ${activeTab===0 && 'tab-active  '}`}
     >🔥Hot</a>
    <a role="tab" href="/#new" 
    onClick={()=>setActivetab(1)}
    className={`tab text-lg font-bold hover:text-green-600 ${activeTab===1 && 'tab-active  '}`}>✨New</a>
    <a role="tab" href="/#top" 
    onClick={()=>setActivetab(2)}
    className={`tab text-lg font-bold hover:text-green-600 ${activeTab===2 && 'tab-active  '}`}>🏆Top</a>
    </div>
  )
}

export default Tabs