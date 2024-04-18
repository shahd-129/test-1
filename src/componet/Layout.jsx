import React from 'react'
import { Outlet } from 'react-router-dom'
import {Sidebar  , Navbar} from '../componet'
import { Box } from '@mui/material'

export default function Layout() {
  return (
    <Box>
<Navbar/>
<Box>
  <Outlet/>
</Box>
<Sidebar/>
    </Box>
  

  )
}
