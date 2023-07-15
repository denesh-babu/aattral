import { Box, Button,Typography } from '@mui/material'
import React from 'react'

function home2() {
    return (
        <>
            <Box sx={{ backgroundColor: '#0B1829' }}>
                <Box sx={{ width: '100%', height: ['46rem', '60rem', '35rem', '46rem', '56rem'], backgroundColor: '#0B1829', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '0rem' }}>
                        <Typography sx={{ fontSize: ['3rem', '6rem', '8rem', '10rem'], fontWeight: 'bold', fontFamily: '&quot;Limelight&quot,sans-serif', color: '#F2D799' }}>Revolutionize</Typography>
                        <Typography sx={{ fontSize: ['0.5rem', '1rem', '1rem', '1.5rem'], color: '#F2D799', letterSpacing: ['0.5rem', '1rem', '1.5rem', '1.5rem'] }}>YOUR MAINTENANCE PRACTICES</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['25rem', '30rem', '25rem', '25rem', '30rem'], display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['1rem', '2rem', '3rem', '6rem'], backgroundColor: '#050c14' }}>
                    <Box sx={{ width: ['90%', '90%', '45%', '35%'], color: 'white' }}>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '3rem', '3rem', '4rem'], fontWeight: 'bold' }}>Unleash the Power of Predictive Maintenance</Typography>
                    </Box>
                    <Box sx={{ width: ['90%', '90%', '45%', '35%'] }}>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1.5rem', '1.5rem', '2rem'], color: 'gray' }}>Welcome to the Smart Predictive Maintenance System! Our cutting-edge solution is designed to revolutionize your maintenance practices, maximize equipment lifespan, and minimize downtime. Experience the future of maintenance management.</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['auto', 'auto', 'auto', '65rem'], backgroundColor: '#0B1829', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: ['2rem', '1rem', '2rem'], flexWrap: 'wrap' }}>
                    <Box sx={{ width: ['80%', '85%', '45%', '50%'], height: 'auto', backgroundColor: '#0f253e', borderRadius: ['1rem', "2rem"], display: 'flex', flexDirection: 'column', alignItems: 'center', p: ['1.5rem', '2rem', '1.5rem', '2rem'], gap: ['1rem', '2rem', '1.5rem', "2rem"] }}>
                        <Box sx={{ width: '100%' }}>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Monitoring</Typography>
                            <Typography sx={{ color: 'white', fontSize: '1rem' }}>Real-time equipment health tracking</Typography>
                        </Box>
                        <Box sx={{ width: '100%', height: ['20rem', '20rem', '15rem', '20rem'], backgroundImage: 'url(/home2-card-img1.webp)', backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover', borderRadius: ['4px', '8px'] }}>

                        </Box>
                    </Box>
                    <Box sx={{ width: ['80%', '37%', '30%', '25%'], height: 'auto', backgroundColor: '#0f253e', borderRadius: ['1rem', "2rem"], display: 'flex', flexDirection: 'column', alignItems: 'center', p: ['1.5rem', '2rem', '1.5rem', '2rem'], gap: ['1rem', '2rem', '1.5rem', "2rem"] }}>
                        <Box sx={{ width: '100%' }}>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Analytics</Typography>
                            <Typography sx={{ color: 'white', fontSize: '1rem' }}>Predictive failure detection</Typography>
                        </Box>
                        <Box sx={{ width: '100%', height: ['20rem', '20rem', '15rem', '20rem'], backgroundImage: 'url(/home2-card-img2.webp)', backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover', borderRadius: ['4px', '8px'] }}>

                        </Box>
                    </Box>
                    <Box sx={{ width: ['80%', '37%', '30%', '25%'], height: 'auto', backgroundColor: '#0f253e', borderRadius: ['1rem', "2rem"], display: 'flex', flexDirection: 'column', alignItems: 'center', p: ['1.5rem', '2rem', '1.5rem', '2rem'], gap: ['1rem', '2rem', '1.5rem', "2rem"] }}>
                        <Box sx={{ width: '100%' }}>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Scheduling</Typography>
                            <Typography sx={{ color: 'white', fontSize: '1rem' }}>Intelligent maintenance optimization</Typography>
                        </Box>
                        <Box sx={{ width: '100%', height: ['20rem', '20rem', '15rem', '20rem'], backgroundImage: 'url(/home2-card-img3.webp)', backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover', borderRadius: ['4px', '8px'] }}>

                        </Box>
                    </Box>
                    <Box sx={{ width: ['80%', '85%', '45%', '50%'], height: 'auto', backgroundColor: '#0f253e', borderRadius: ['1rem', "2rem"], display: 'flex', flexDirection: 'column', alignItems: 'center', p: ['1.5rem', '2rem', '1.5rem', '2rem'], gap: ['1rem', '2rem', '1.5rem', "2rem"] }}>
                        <Box sx={{ width: '100%' }}>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Optimization</Typography>
                            <Typography sx={{ color: 'white', fontSize: '1rem' }}>Data-driven performance enhancement</Typography>
                        </Box>
                        <Box sx={{ width: '100%', height: ['20rem', '20rem', '15rem', '20rem'], backgroundImage: 'url(/home2-card-img4.webp)', backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover', borderRadius: ['4px', '8px'] }}>

                        </Box>
                    </Box>
                 
                </Box>
                 <Box sx={{width:'auto',height:'30rem',backgroundColor:'grey',py:'10rem',px:'15rem'}}>
                   <Typography sx={{fontSize:'4rem',fontWeight:'bold'}}>Experience Unbeatable Benefits</Typography>
                   <Typography sx={{fontSize:'2rem'}}>Say goodbye to unexpected downtime and costly breakdowns.</Typography>
                </Box>
            </Box>
        </>
    )
}

export default home2
