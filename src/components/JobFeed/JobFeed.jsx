import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, InputAdornment, MenuItem, Select, TextField, ThemeProvider, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import './JobFeed.css'
import '../../common/style.css'
import logoipsum332 from '../../assets/logoipsum332.svg'
import pngtreeLorem from '../../assets/pngtreeLorem.jpg'
import { useNavigate } from 'react-router-dom';

const JobFeed = () => {

    const jobsFeed = [
        {
            compLogo: pngtreeLorem,
            jobName: 'Data Scientist',
            location: 'Hyderabad, India',
            postDate: '22/05/2024',
            jobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae vel rerum suscipit aliquam eum a esse, sapiente quam vitae iure ea saepe doloremque laudantium culpa doloribus autem, fugiat minima consequatur."
        },
        {
            compLogo: pngtreeLorem,
            jobName: 'Front End Developer',
            location: 'Pune, India',
            postDate: '22/05/2024',
            jobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae vel rerum suscipit aliquam eum a esse, sapiente quam vitae iure ea saepe doloremque laudantium culpa doloribus autem, fugiat minima consequatur."
        },
        {
            compLogo: pngtreeLorem,
            jobName: 'Data Scientist',
            location: 'Hyderabad, India',
            postDate: '22/05/2024',
            jobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae vel rerum suscipit aliquam eum a esse, sapiente quam vitae iure ea saepe doloremque laudantium culpa doloribus autem, fugiat minima consequatur."
        }
    ];

    const navigate = useNavigate();

    const handleApplyNow = () =>{
        navigate('/JobDetails')
    }

    const handleNewJobApply = ()=>{
        navigate('/NewJobPosting')
    }


    return (
        <div className="contain font back">
            <h3 className='fontHead JobH'>Jobs Feed</h3>
            <button onClick={handleNewJobApply}>New Job Posting</button>
            <div style={{ background: '#FFFFFF', margin: '2vw'  }}>
                <Box
                    component="form"
                    className="sticky"
                    sx={{
                        display: 'flex', // Use flexbox layout
                        justifyContent: 'space-between', // Ensure spacing between elements
                        alignItems: 'center',
                        padding: '2vw',
                        borderRadius: '13px'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        size="small"
                        id="outlined-basic"
                        placeholder="Search Keyword"
                        sx={{ flex: 2, marginRight: 1 }} // 60% width equivalent
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label=""
                        size="small"
                        value='Location'
                        sx={{ flex: 1, marginRight: 1 }} // 30% width equivalent
                    ></Select>
                    <Select
                        size="small"
                        sx={{ flex: 1 }} // 30% width equivalent
                    >
                        <MenuItem value="">
                            Category
                        </MenuItem>
                    </Select>
                    <TextField
                        size="small"
                        id="outlined-basic"
                        placeholder='Search Jobs'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='start' >
                                    <SearchIcon style={{ fontWeight: 'bold', color: '#545F71' }} />
                                </InputAdornment>
                            ),
                            style: { fontWeight: 'bold', color: '#545F71' }
                        }}
                        sx={{ flex: 1, border: 'none', marginLeft: 1, background: '#EEF1F4', borderWidth: 0 }}
                    />

                </Box>
                <Divider></Divider>
                {jobsFeed.map((job) =>
                    // <Box>
                    //     <h5>{job.jobName}</h5>
                    // </Box>
                    <Card sx={{ display: 'flex',height: '15vw', borderBottom: '1px dashed black', borderRadius: 0 }}>
                        <CardMedia
                            component="img"
                            sx={{ flex: 1, height: '100px' }}
                            image={job.compLogo}
                        />
                        <CardContent sx={{ flex: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                                <CardHeader className='font'
                                    title={<p className='title'>{job.jobName}</p>}
                                    subheader={<p className='subTitle'>{job.location}</p>}
                                />
                                {/* <Typography paragraph>{job.postDate}</Typography> */}
                                <Typography className='font'>
                                    <span className='dateTitle'>Posted on:</span><span className='subTitle'>{job.postDate}</span>
                                </Typography>
                            </Box>
                            <Typography variant="p" component="p">{job.jobDescription}</Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', flex: 1 ,flexDirection: 'column',marginTop: '2vw' }}>
                            <Button className='btnsA ' variant="contained" onClick={handleApplyNow} size="medium">Apply Now</Button>
                            <Button className='btnsL' variant="contained" size="medium">Learn More</Button>
                        </CardActions>
                        <Divider></Divider>
                    </Card>
                    
                )}
            </div>
        </div>
    )
}


export default JobFeed