import styled from 'styled-components';

 export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 10px;
  border-radius: 2px;
  color: white;
  border: 2px solid palevioletblack;
  margin: 0 1em;
   width:100px;
   height:30px;
 background: #f5228c;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

 export const Table = styled.table`
width: 100%;

marginLeft:-30px;
marginRight:-30px;

border-spacing: 10px;
border-collapse: collapse;
overflow: auto;
`;

export const TableHead = styled.thead`
font-size: 4vh;
font-weight: bold;
text-align: left;
padding 2;
}
`;

export const TableData = styled.td`
font-size: 3vh;
border-right: 2px solid black;
height: 100%;
font-size: 3vh;
width:600px;
text-align:left;
padding:10px;
vertical-align: middle;
}

`;

export const TableDataGrey = styled.td`
font-size: 3vh;
width:200px;
text-align:left;
border-right: 2px solid black;

vertical-align: middle;
}
`;
export const TableDatarow = styled.tr`
font-size: 3vh;
bgcolor:#ddd;
border-right: 2px solid black;
text-align: center;
vertical-align: middle;

}
`;

export const Tbody=styled.tbody` 
    height: 500px;
    display: inline-block;
	
	margin-left:2%;
marginRight:10%;
    width: auto;
    overflow: auto;
	border: 2px solid black;
	
`;
export const mockdetailstablesection = styled.div`
 display: block;
  border-radius: 2px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 2px 2px 9px 2px darkgrey;
  width: 800px;
  overflow: scroll;
  height: 73vh;
   border: 2px solid #000000;
`


export const mockdetailstablesectiontr= styled.tr `
  display: inline-table;
  width: 800px;
  cursor: pointer;
  height: 50px;
  
`
export const mockdetailstablesectiontr1 = styled.tr  ` 
  background-color: green;
`
export const  controllersection = styled.div`
  margin-top: 20px;
  display: flex;
`

export const  controllersectionbutton = styled. button ` 
  height: 40px;
  width: 120px;
  background-color: #2185d0;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  margin-top: 5px;
  margin-right: 10px;
` 


export const  right=styled.div`
  float:right;
` 
export const left=styled.div`
  float:left;
` 

export const buttontablesection=styled.table`

  width: 800px;
`   
export const buttontablesectionred =styled.table`
  height: 40px;
  width: 100%;
  background-color: red;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  margin-top: 5px;
  margin-right: 10px;

`   