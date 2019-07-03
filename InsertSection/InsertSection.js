import React from 'react';
import './styles.css';
import SourceSection from '../Source/SourceSection';
import AssetSection from '../AssetSection/AssetSection';
import styled from 'styled-components';

import Popup from "reactjs-popup";
import {
 
  Button
  
} from './styles.js'


class InsertSection extends React.Component{
	constructor(props){
	  
    super(props);
	this.TakeClip = this.TakeClip.bind(this);
this.Takelive = this.Takelive.bind(this);
	
	   
	 }
	   
	 TakeClip(event){
	
	  //alert("TakeClip")
  }
  Takelive(event){
	  alert("Takelive")
  }
	render() {
	return (
	<div>
		<div id="Insert" className='Insert-Section'>
		 
	<Popup id="Popuppos"  trigger={<Button onClick={(event) => this.TakeClip(event)}>Insert and Take Clip</Button>
     } position="top center">
   <AssetSection/>
  </Popup>
      
      
     
    </div>
	<div className='Insert-Section1'>
		 
	
      <Popup  id="submit" trigger={ <Button onClick={(event) => this.Takelive(event)}>Insert and Take Live</Button>} position="left center">
   <SourceSection/>
  </Popup>
      
       
    </div>
	</div>
	
	);
}
}


export default  InsertSection;
