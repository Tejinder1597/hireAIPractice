import { Box, Button, Card, Container, CardActions, CardContent, CardHeader, CardMedia, Divider, InputAdornment, MenuItem, Select, TextField, ThemeProvider, Typography, FormControl, InputLabel, Input, FormHelperText, Paper, Grid, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';
import 'quill-mention';
import sparkles from '../../assets/sparkles.png';
import 'react-quill/dist/quill.snow.css';
// import '../../common/quil/quil.css';

import '../../common/style.css'
import './NewJobPosting.css'
import { Height } from '@mui/icons-material';



const Font = Quill.import('formats/font');
Font.whitelist = ['sans-serif', 'serif', 'monospace'];
Quill.register(Font, true);
// var Size = Quill.import('formats/size');
// Size.whitelist = [
//     '9px',
//     '10px',
//     '11px',
//     '12px',
//     '14px',
//     '16px',
//     '18px',
//     '20px',
//     '22px',
//     '24px',
//     '26px',
//     '28px'
// ];
// Quill.register(Size, true);

const Parchment = Quill.import('parchment');
const boxAttributor = new Parchment.Attributor.Class('box', 'line', {
    scope: Parchment.Scope.INLINE,
    whitelist: ['solid', 'double', 'dotted']
});
Quill.register(boxAttributor);

// const CustomToolbar = () => (
//     <div id="toolbar">
//       <button className="ql-bold" />
//       <button className="ql-italic" />
//       <select className="ql-font">
//         {Font.whitelist.map((font, index) => (
//           <option value={font} selected={!index}>
//             {font[0].toUpperCase() + font.substr(1)}
//           </option>
//         ))}
//       </select>

//     </div>
//   );

const toolbarOptions = [

    ['bold', 'italic', 'underline'],  // toggled buttons
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image'],
    // ['clean']  // remove formatting button
];

// Editor.modules = {
//     toolbar: {
//         container: '#toolbar',
//     },
//     mention: {
//         allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
//         mentionDenotationChars: ['@', '#'],
//     },
// };

//   Editor.formats = [
//     'bold',
//     'italic',
//     'font',
//     'size',
//     'align',
//     'box',
//     'mention',
//   ];

const NewJobPosting = () => {

    const {
        register,
        control,
        handleSubmit
    } = useForm();

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <div className="contain font back">
            <h3 className='formHead JobH'>New Job Posting</h3>
            <div style={{ margin: '2vw' }}>
                <Paper
                    component="form"
                    sx={{

                        width: '96%',
                        padding: '2vw',
                        borderRadius: '13px',
                        Height: '100%',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container className='font' >
                        <Grid item className="sticky" lg={8} sx={{ borderRight: '1px dashed #545F71' }}>
                            <Container>
                                <span>Job Title</span>
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    placeholder="eg. Sales Executive"
                                    required
                                    name="title"
                                    {...register('title')}
                                    sx={{ flex: 6, marginRight: 1, width: '100%' }}
                                />
                            </Container>
                            <Container sx={{ display: 'flex', pt: 3 }}>
                                <div className='fieldContainer'>
                                    {/* <span>Job Title</span> */}
                                    {/* <TextField
                                    size="small"
                                    id="outlined-basic"
                                    placeholder="eg. Sales Executive"
                                    required
                                    name="name"
                                    {...register('name')}
                                    sx={{ flex: 6, marginRight: 3, width: '100%' }}
                                /> */}
                                    <FormControl sx={{ flex: 6 }}>
                                        <span>Company</span>
                                        <Select
                                            size="small"
                                            sx={{ flex: 1, width: '19vw' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                        // {...register('company')}

                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className='fieldContainer'>
                                    {/* <span>Job Title</span> */}
                                    {/* <TextField
                                    size="small"
                                    id="outlined-basic"
                                    placeholder="eg. Sales Executive"
                                    required
                                    name="title"
                                    {...register('title')}
                                    sx={{ flex: 6, marginRight: 1, width: '100%' }}
                                /> */}
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl >
                                            <span>Location</span>
                                            <Select
                                                size="small"
                                                sx={{ flex: 6, width: '19vw' }}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                            // {...register('company')}

                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </Container>
                            <Container>
                                <h3 className='fontHead formRightHead'>Job Details</h3>

                                <span>Summary</span>
                                <Controller className='jobEditor' sx={{ borderRadius: '1vw' }}
                                    InputLabel='Summary'
                                    name="summary"
                                    control={control}
                                    render={({ field }) => (
                                        <ReactQuill
                                            {...field}
                                            theme="snow"
                                            modules={{ toolbar: { toolbarOptions } }}
                                        />
                                    )}
                                />
                            </Container>
                            <Container sx={{ pt: 2 }}>
                                <span>Requirements</span>
                                <Controller className='jobEditor' sx={{ borderRadius: '1vw' }}
                                    InputLabel='Summary'
                                    name="requirements"
                                    control={control}
                                    render={({ field }) => (
                                        <ReactQuill
                                            {...field}
                                            theme="snow"
                                            modules={{ toolbar: { toolbarOptions } }}
                                        />
                                    )}
                                />
                            </Container>
                            <Container sx={{ pt: 2 }}>
                                <span>Responsibilites</span>
                                <Controller className='jobEditor' sx={{ borderRadius: '1vw' }}
                                    InputLabel='Summary'
                                    name="responsibilities"
                                    control={control}
                                    render={({ field }) => (
                                        <ReactQuill
                                            {...field}
                                            theme="snow"
                                            modules={{ toolbar: { toolbarOptions } }}
                                        />
                                    )}
                                />
                            </Container>
                            <Container sx={{ pt: 2 }}>
                                <span>Key Competencies</span>
                                <Controller className='jobEditor' sx={{ borderRadius: '1vw' }}
                                    InputLabel='Summary'
                                    name="keyCompetencies"
                                    control={control}
                                    render={({ field }) => (
                                        <ReactQuill
                                            {...field}
                                            theme="snow"
                                            modules={{ toolbar: { toolbarOptions } }}
                                        />
                                    )}
                                />
                            </Container>
                            <Container sx={{ pt: 2 }}>
                                <span>Qualifications</span>
                                <Controller className='jobEditor' sx={{ borderRadius: '1vw' }}
                                    InputLabel='Summary'
                                    name="qualifications"
                                    control={control}
                                    render={({ field }) => (
                                        <ReactQuill
                                            {...field}
                                            theme="snow"
                                            modules={{ toolbar: { toolbarOptions } }}
                                        />
                                    )}
                                />
                            </Container>
                        </Grid>
                        <Grid item lg={4} >
                            <Box className='fontRight '>
                                <h3>Job Metadata</h3>
                                <Container className='mContainer' sx={{ pt: 6 }}>
                                    <h4>Job Visibility</h4>

                                    <FormControl className='mSubContainer'>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="Active" control={<Radio />} label="Active" />
                                            <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                                        </RadioGroup>
                                    </FormControl>
                                </Container>
                                <Container className='mContainer' sx={{ pt: 3 }}>
                                    <h4>Nature of Job</h4>

                                    <Box className='mSubContainer' sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <FormControlLabel
                                            label="Full Time"
                                            control={<Checkbox />}
                                        />
                                        <FormControlLabel
                                            label="Part Time"
                                            control={<Checkbox />}
                                        />
                                    </Box>
                                    <FormControlLabel
                                        label="Remote"
                                        control={<Checkbox />}
                                    />
                                </Container>
                                <Container className='mContainer' sx={{ pt: 3 }}>
                                    <h4>Salary Range</h4>
                                    <Box className='mSubContainer' sx={{ display: 'flex' }}>
                                        <TextField
                                            size="small"
                                            type="number"
                                            id="outlined-basic"
                                            value='minRange'
                                            sx={{ flex: 1, marginRight: 1, width: '100%' }}
                                        />
                                        <TextField
                                            size="small"
                                            type="number"
                                            id="outlined-basic"
                                            value='maxRange'
                                            sx={{ flex: 1, marginRight: 1, width: '100%' }}
                                        />
                                    </Box>

                                </Container>
                                <Container className='mContainer' sx={{ pt: 3 }}>
                                    <h4>Number of Open Position</h4>
                                    <TextField 
                                        className='mSubContainer'
                                        size="small"
                                        id="outlined-basic"
                                        required
                                        name="noOfPostion"
                                        {...register('noOfPostion')}
                                        sx={{ flex: 6, marginRight: 1, width: '25%' }}
                                    />
                                </Container>
                                <Container className='mContainer' sx={{ pt: 3 }}>
                                    <Box className='mSubContainer' sx={{ display: 'flex' }}>
                                        <span><img src={sparkles} alt="" /></span>
                                        <h4>AI-enabled Interview</h4>
                                    </Box>
                                    <FormControlLabel control={<Checkbox />} label="Allow candidates to opt for the AI-enabled Interview" componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} />
                                </Container>
                                <Container className='mContainer' sx={{ pt: 3 }}>
                                    <h4>Related Job Domains</h4>
                                    <FormGroup className='mSubContainer' sx={{ padding: '1vw' }}>
                                        <FormControlLabel control={<Checkbox />} label="Data Science & Analytics" componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="Design & Creative Writing" />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="Engineering & Architecture" />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="IT & Networking" />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="Legal" />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="Sales & Marketing" />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="Translation" />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="Web, Mobile & Software Dev" />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="Customer Service" />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="Admin Support" />
                                        <FormControlLabel control={<Checkbox />} componentsProps={{ typography: { sx: { fontSize: '0.875rem' } } }} label="Accounting & Consulting" />
                                    </FormGroup>
                                </Container>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
                {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                >
                    Register
                </Button> */}
            </div>
        </div>
    )
}
export default NewJobPosting;