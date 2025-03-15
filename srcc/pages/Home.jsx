import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Department from '../components/Department';
import Message from '../components/Message';

const Home = () => {
  return (
    <>
        <Hero title={"Welcome to medical institute"} imageUrl={"/hero.png"}/>
    </> 
 )
}

export default Home