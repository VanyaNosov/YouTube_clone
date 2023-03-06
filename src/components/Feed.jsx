import { Box, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import { fetchFromAPI } from '../utils/fetchFromApi'

import { SideBar, Videos } from './'


const Feed = () => {
  const [selectCategory, setSelectCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectCategory}`)
      .then((data) => setVideos(data.items))
      .then(a => console.log(`search?part=snippet&q=${selectCategory}`))
    }, [selectCategory]);
  return (
    <Stack sx={{flexDirection: { sx:
      'column', md: 'row'} }}>
      <Box sx={{ height: { sx: 'auto',
        md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SideBar 
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />

        <Typography className='copyright' variant='body2' sx={{
          mt: 1.5, color: '#fff'
        }}>
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto',
        height: '90vh', flex: 2 } }>
        <Typography variant='h4' fontWeight='bold' color='white'>
          {selectCategory} <span style={{color: 'red'}}>videos</span>
        </Typography>
        
        <Videos videos={videos}/> 
      </Box>
    </Stack>
  )
}

export default Feed