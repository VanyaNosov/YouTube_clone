import { Link } from "react-router-dom"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, CardContent, Typography, Card, CardMedia } from "@mui/material"

import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({channelDetail, marginTop}) => {
  console.log(marginTop)
  return (
    <Box
      sx={{
        borderRadius: '20px',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop: marginTop
      }}
      >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || 
            demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ width: '180px', height: '180px', borderRadius: '50%', mb: 2, border: '1px solid #e3e3e3' }}
          /> 
          <Typography variant="h6" color='#fff'>
            {channelDetail?.snippet?.title}
            <CheckCircleIcon sx={{ fontSize: 12, color: 'gray', ml: '5px' }}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography color='#FFFF'>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard