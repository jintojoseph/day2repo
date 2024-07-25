import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = ({person}) => {
  const [counter,setCounter]=useState(0);
  const [form,setForm]=useState({
    "sname":person.sname,
    "adm" : person.adm,
    "department" : person.department,
    "semester":person.semester
  })
  let showData=()=>{
    console.log(form);
  }
  // let valueAdd=()=>{
  //   setCounter(counter+1);
  // }
  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
    // console.log(e);
  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Name"
        name='sname'
        value={form.sname}
        onChange={valueCap}
       
      />
      
       <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Admission"
        name='adm'
        value={form.adm}
        onChange={valueCap}
      />
       <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Department"
        name='department'
        value={form.department}
        onChange={valueCap}
      /> 
       <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Semester"
        name='semester'
        value={form.semester}
        onChange={valueCap}
      /> <br />
     <br /> <Button variant="contained" onClick={showData}>SUBMIT</Button>
     <br />
     {/* <small>button is clicked {counter} times</small> */}
    </div>
  </Box>
  )
}

export default Add