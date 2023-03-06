import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'

import { Videos } from './'


const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);
  return (
    <Box>
      <Box p={2} sx={{overflowY: 'auto',
        height: '90vh', flex: 2 } }>
        <Typography variant='h4' fontWeight='bold' color='white'>
          Search Results for: <span style={{color: 'red'}}>{searchTerm}</span> videos
        </Typography>
        
        <Videos videos={videos}/> 
      </Box>
    </Box>
  )
}

export default SearchFeed