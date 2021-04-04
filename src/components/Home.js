import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { motion } from "framer-motion";
import backgroundVideo from '../components/video/background.mp4';


import '../App.css';
import Video from "./Video";
const defaultPropsProjects = {
  //background: 'linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)'
  style: { width: '100%', height: '45rem', background: 'black', transform: 'skewY(-2.5deg)' },
};
const defaultPropsContactMe = {
  style: { width: '100%', height: '35rem', background: '#0e1830', transform: 'skewY(2.5deg)', padding: "50px 0" },
};
const defaultPropsFooter = {
  style: { width: '100%', height: '5rem', background: 'black', transform: 'skewY(-2.5deg)', padding: "50px 0" },
};



function Home()
{
  return (


    <div className="App">
      <Box style={{ position: "relative", background: "l#46416" }}>
        <Video />
      </Box>

      <Box display="flex" justifyContent="center" {...defaultPropsProjects}>
        <h2 style={{ color: "white", transform: 'skewY(2.5deg)' }}>Projects</h2>
      </Box>
      <Box display="flex" justifyContent="center"  {...defaultPropsContactMe}>
        {/* <Box borderRadius="50%" {...defaultProps} />
        <Box borderRadius="borderRadius" {...defaultProps} />
        <Box borderRadius={16} {...defaultProps} /> */}
        <h2 style={{ color: "white", transform: 'skewY(-2.5deg)' }}>ContactMe </h2>
      </Box>
      <Box display="flex" justifyContent="center" {...defaultPropsFooter}>

        <h2 style={{ color: "white", transform: 'skewY(2.5deg)' }}>Footer</h2>
      </Box>



    </div >

  )
}

export default Home;
