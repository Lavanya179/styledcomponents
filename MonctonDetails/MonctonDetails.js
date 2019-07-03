import React, { Component } from "react";
import { moctonDetailsMockData } from './mockData';
import './styles.css';
import styled from 'styled-components';
//import Table from 'rc-table';
//import { Table } from 'antd';
import 'antd/dist/antd.css';
import 'rc-table/assets/index.css';
import $ from 'jquery';
import './styles.js';
import {
 
  Button,Table,TableHead,TableData,TableDataGrey,TableDatarow,Tbody
  
} from './styles.js'
var selecteddata=[];

const columns1 = [
  {
    title: 'Time',
    dataIndex: 'time',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Time',
    dataIndex: 'address',
  },
];

const data1 = [
  {
   Id:0,
    time: '00:10:00:00',
    address: ' 00:10:00:00' ,
    description: 'Comercial 1 pepsi',
  },
 
    {Id:1, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:2, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:3,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:5, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:5, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:6,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:7, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:8,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:9,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:10,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:11, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:12, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:13,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
	
    { Id:14,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:15,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:16,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    { Id:17,time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:18, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:19, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:20, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:21, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:22, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:23, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    { Id:24,id:1,time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
    {Id:25, time: '18:10:00:00', description: 'Comercial 1 pepsi', address: ' 00:10:00:00' },
    {Id:26, time: '18:00:00:00', description: 'ST XX News of 6', address: ' 00:10:00:00' },
	
];

class MonctonDetails extends Component {
	 constructor(props){
	  selecteddata=[];
    super(props);
	
this.Delete = this.Delete.bind(this);
this.CUE = this.CUE.bind(this);
this.HOLD = this.HOLD.bind(this);
this.TAKE = this.TAKE.bind(this);	
	   
	 }
	
  Delete(Courses){
	 
	    if(selecteddata!=undefined){
		  
	    for(var i=0;i<Courses.length;i++)
	  {

	  if(Courses[i].id==selecteddata.id){
		
		  Courses.splice(i,1);
		  break ;
	  }
	  
	  }
	    setTimeout(() => {
  this.setState({ data: Courses });
}, 1000);
	  
  }
	
  }
  CUE(Courses){
	  alert(JSON.stringify(selecteddata))
	  if(selecteddata != undefined){
	 Courses.push(selecteddata);
	  
	  setTimeout(() => {
  this.setState({ data: Courses });
 
}, 1000);

	  }
  }
  HOLD(event){
	  alert("HOLD")
  }
  TAKE(event){
	  alert("TAKE")
  }
  User(user){
	  selecteddata=user;
	  //alert("User"+user)
  }
  render() {
	    this.setState.data=data1;
		//console.log("selecteddata"+JSON.stringify(  this.setState.data));
    return (
	 <div className='MonctonDetails'>
      
       
     <Table id="Courses" >
  
    <Tbody >
      
      {  this.setState.data.map(userdata => 
	  <div className="myborder">
        <tr1  id="user" onClick={(user) => this.User(userdata)}>
          <td className="tabletd" >{userdata.time}</td>
          <td className="tabletd1">{userdata.description}</td>
          <td className="tabletd">{userdata.address}</td>
        
        </tr1 >
		</div>
       )}
    </Tbody>
	 
	
	</Table>
	  <controllersection>
        
			<Table>
			<tr1>
			<td className='left'>
			
			<Button style={{backgroundColor:"red"}} id="delete" onClick={(Courses) => this.Delete(data1)} >Delete</Button>
			</td>
			<td className='right'>
			
			<Button onClick={(event) => this.CUE(data1)}>CUE</Button>
			<Button   onClick={(event) => this.HOLD(event)}>HOLD</Button>
			<Button onClick={(event) => this.TAKE(event)}>TAKE</Button>
			
			</td>
			</tr1>
          </Table>
		  
       
	   
	</controllersection>
    </div>
    );
  }
}


export default MonctonDetails;
