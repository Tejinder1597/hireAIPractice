import * as React from 'react';
import '../../common/style.css'
import './Details.css';
import { Typography, Paper, Card, CardContent, CardHeader, Container, Box, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import pngtreeLorem from '../../assets/pngtreeLorem.jpg'
// import { Typography, Div } from '@mui/material';

const Details = () => {
    const navigate = useNavigate()

    const navigateMyApplication = () => {
        navigate('/MyApplication')
    }

    return (
        <div className='contain mainCont'>
            <Box className='subMain'>
                <Typography className='font' variant="h5" component="h5">Job Details</Typography>
                <Typography onClick={navigateMyApplication} className='font' variant="p" component="p">Back to My Application</Typography>

            </Box>
            <Paper className='content'>
                {/* <Box>
                    <img src={pngtreeLorem} alt="" />
                </Box> */}
                <Card className='cardBox'>
                    <CardContent className='cardLeft'>
                        <CardMedia
                            component="img"
                            sx={{ height: '100px' }}
                            image={pngtreeLorem}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <CardHeader className='font'
                                title={<p className='title'>Data Scientist</p>}
                                subheader={<p className='subTitle'>Kiehen Group, London, UK</p>}
                            />
                        </Box>
                    </CardContent>
                    <CardContent className='cardRight'>
                        <Box className='cardTypoBox'>
                            <Typography className='font'>
                                <span className='dateTitle'>Nature of Job:</span><span className='subTitle'>Full-time</span>
                            </Typography>
                            <Typography className='font'>
                                <span className='dateTitle'>Salary Offered:</span><span className='subTitle'>100k - 140k</span>
                            </Typography>
                        </Box>
                        <Box className='cardTypoBox'>
                            <Typography className='font'>
                                <span className='dateTitle'>Posted on:</span><span className='subTitle'>20 March 2024</span>
                            </Typography>
                            <Typography className='font'>
                                <span className='dateTitle'>Position</span><span className='subTitle'>3</span>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Paper>
        </div>
    )
}

export default Details;