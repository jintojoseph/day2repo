import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
// const rows=[{"name":"joyel","adm":"12212456","department":"chemistry","semester":"4th"},
//             {"name":"jitto","adm":"12212457","department":"physics","semester":"5th"},
//             {"name":"Abin","adm":"12212450","department":"BCA","semester":"6th"}
//             ]

const View = () => {
  const[rows,setRows]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      setRows(res.data.users);
    })
  },[])
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell align="right">Last Name</TableCell>
          <TableCell align="right">Gender</TableCell>
          <TableCell align="right">Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.firstName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.firstName}
            </TableCell>
            <TableCell align="right">{row.lastName}</TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default View