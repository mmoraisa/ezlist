import React, { Component } from 'react'
import Menu from '../components/navigation/Menu';

const Home = ({ navigation }) => {
    return (
        <Menu screenProps={{ stack: navigation }}/>
    )
}

export default Home