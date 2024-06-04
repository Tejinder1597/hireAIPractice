import * as React from 'react';
import pngtreeLorem from '../../assets/pngtreeLorem.jpg';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, InputAdornment, MenuItem, Paper, Select, TextField, ThemeProvider, Typography } from '@mui/material'


import '../../common/style.css';
import '../../common/style.css'
import { useNavigate } from 'react-router-dom';

const MyApplication = () => {

    const navigate= useNavigate();
    const appliedFeed = [
        {
            compLogo: pngtreeLorem,
            jobName: 'Front End Developer',
            location: 'Pune, India',
            postDate: '22/05/2024',
            jobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae vel rerum suscipit aliquam eum a esse, sapiente quam vitae iure ea saepe doloremque laudantium culpa doloribus autem, fugiat minima consequatur."
        }
    ]

    const handleViewDetails = () =>{
        navigate('/Details')
    }

    return (
        <div className="contain font back">
            <h3 className='fontHead applicationH'>My Applications</h3>
            {/* <div className='applicationContain'> */}
            <Paper sx={{ margin: '2vw' }}>
                <h3 style={{ paddingTop: '3vw' }} className='fontHead applicationH'>Active</h3>
                {appliedFeed.map((job) =>
                    <Card sx={{ display: 'flex', height: '15vw', boxShadow: 'none', borderRadius: 0 }}>
                        <CardMedia
                            component="img"
                            sx={{ flex: 1, height: '100px' }}
                            image={job.compLogo}
                        />
                        <CardContent sx={{ flex: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <CardHeader className='font'
                                    title={<p className='title'>{job.jobName}</p>}
                                    subheader={<p className='subTitle'>{job.location}</p>}
                                />
                                {/* <Typography paragraph>{job.postDate}</Typography> */}
                                <Typography sx={{
                                    background: '#CCECEB',
                                    padding: '0.5vw 2vw',
                                    borderRadius: '0.4vw'
                                }} className='font processing'>
                                    <span className='dateTitle subTitle '>Processing / AI Interview Ready</span>
                                </Typography>
                            </Box>
                            <Typography variant="p" component="p">{job.jobDescription}</Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: '1.2vw' }}>
                            <Button
                                sx={{
                                    textTransform: 'none !important',
                                    marginBottom: '1vw !important',
                                    padding: '0.8vw 2.7vw!important',
                                    background: '#5F6DB9!important '
                                }}
                                className='btns' onClick={handleViewDetails} variant="contained" size="medium">View Details</Button>
                            {/* <Button className='btns' variant="contained" size="medium">Learn More</Button> */}
                            <Typography className='font'>
                                <span className='dateTitle'>Applied on:</span><span className='subTitle'>{job.postDate}</span>
                            </Typography>
                        </CardActions>
                    </Card>
                    
                    )}
                    <Divider></Divider> 
                    <h3 style={{ paddingTop: '3vw' }} className='fontHead applicationH'>Archieve</h3>
                    <Box sx={{height: '10vw'}}>

                    </Box>
            </Paper>
            {/* </div> */}
        </div>
    )
}

export default MyApplication;
