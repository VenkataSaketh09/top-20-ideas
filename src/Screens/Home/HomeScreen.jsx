import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Tabs from './components/Tabs'
import {db} from './../../../utils/index'
import {Ideas} from './../../../utils/schema'
import { desc } from 'drizzle-orm'
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react'
import IdeaList from './components/IdeaList'
function Home() {
  const params=useLocation();
  const [ideasList,setIdeaslist]=useState([]);

  useEffect(()=>{
    GetAllIdeas();
  },[params]);

  const GetAllIdeas=async()=>{
    const result=await db.select().from(Ideas)
    .orderBy(desc(params.hash=='#hot'|| params.hash=='#top'?Ideas.vote:Ideas.id))
    .limit(20);
    console.log(result);
    setIdeaslist(result);

  }
  return (
    <>
    <Header />
    <Hero/>
    <Tabs />
    <IdeaList ideaList={ideasList} refreshData={GetAllIdeas}/>
    </>
    
  )
}

export default Home