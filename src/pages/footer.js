import { Box, Typography } from '@mui/material'
import React from 'react'
import { footerdata } from '../uitilis/data'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function footer() {
    return (
        <>
            <Box sx={{ width: '100%', height: ['auto', '20rem','20rem','20rem','22rem'], backgroundColor: '#0B1829' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'center', gap: ['1.5rem', '0'], alignItems: ['center', 'flex-start'], py: '3rem' }}>
                    {
                        footerdata.map((item) => (
                            <Box sx={{ width: ['70%', '25%'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '1rem'] }}>
                                <Typography sx={{ fontSize: '1.5rem', color: 'gray', fontWeight: 'bold' }}>{item.title}</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <Typography sx={{ fontSize: '1rem', color: 'white', ':hover': { letterSpacing: '0.1rem' } }}>{item.con1}</Typography>
                                    <Typography sx={{ fontSize: '1rem', color: 'white', ':hover': { letterSpacing: '0.1rem' } }}>{item.con2}</Typography>
                                    <Typography sx={{ fontSize: '1rem', color: 'white', ':hover': { letterSpacing: '0.1rem' } }}>{item.con3}</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box sx={{ width: "100%", height: "1rem", display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Box sx={{ width: '80%', height: '0.1rem', backgroundColor: 'white' }}>

                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['4rem','4rem','4rem','4rem','5rem'], position: 'relative' }}>
                    <Box sx={{ width: ['45%','30%', '30%','25%','15%'], position: 'absolute', top: ['30%','25%','25%','25%','30%'], left: ['10%','10%']}}>
                        <Typography sx={{ color: 'white', fontSize: ['1rem','1.5rem'] }}>© 2022 Framer, Inc.</Typography>
                    </Box>
                    <Box sx={{ width: ['30%','15%', '15%','15%','6%'],  display: 'flex', justifyContent: 'flex-end', gap: ['0.5rem','0.5rem','1rem'], position: 'absolute', top: ['25%','30%','28%','16%','25%'], right: ['10%','10%' ]}}>
                        <Box sx={{ width: ['2rem','2rem','2rem','3rem'], height: ['2rem','2rem','2rem','3rem'], backgroundColor: "#050c14", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                            <InstagramIcon sx={{ width: ['1rem','1rem','1rem','1.5rem'], height: ['1rem','1rem','1rem','1.5rem'], color: 'white' }} />
                        </Box>
                        <Box sx={{ width: ['2rem','2rem','2rem','3rem'], height: ['2rem','2rem','2rem','3rem'], backgroundColor: "#050c14", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                            <TwitterIcon sx={{ width: ['1rem','1rem','1rem','1.5rem'], height: ['1rem','1rem','1rem','1.5rem'], color: 'white' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default footer 