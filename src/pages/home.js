import { Button, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import { homedata, homecard } from '../uitilis/data'
import Form from '../components/mui/form'
import Accordion from '../components/mui/list'

function home() {
    return (
        <>
            <Box sx={{ backgroundColor: '#0B1829' }}>
                <Box sx={{ width: '100%', height: ['56rem', '60rem', '34rem', '46rem', '56rem'], backgroundImage: 'url(/hero-bg.webp)', backgroundposition: 'center', backgroundSize: 'cover', backgroundrepeat: 'no-repeat', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: ['1rem', '1rem', '1.5rem', '1.5rem', '2rem'], opacity: '0.9' }}>
                    <Box sx={{ width: ['100%', '70%', '80%', '80%', '70%'] }}>
                        <Typography sx={{ fontSize: ['1.5rem', '2.5rem', '3rem', '3.5rem', '4rem'], color: '#6897E4', fontWeight: 'bold', textAlign: 'center' }}>Welcome to Aattral Private Limited</Typography>
                    </Box>
                    <Box sx={{ width: ['90%', '50%', '35%', '30%', '35%'] }}>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1.5rem', '2rem', "2.5rem"], color: '#f2f2f2', fontWeight: 'bold', textAlign: 'center' }}>Powering Your Future with Intelligent Solutions</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Button sx={{ border: '1px solid #6897E4', backgroundColor: '#6897E4', color: 'white', fontSize: ['12px', '16px', '12px', '12px', '16px'], width: ['auto'], height: ['auto'], ":hover": { backgroundColor: '#1f55ad', border: '1px solid #1f55ad' } }}>Get Started</Button>
                        <Button sx={{ border: '1px solid #262626', backgroundColor: '#262626', color: 'white', fontSize: ['12px', '16px', '12px', '12px', '16px'], width: ['auto'], height: ['auto'], ":hover": { border: '1px solid #fff' } }}>Learn More</Button>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['42rem', '60rem', '50rem', '60rem'], display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0rem' }}>
                    <Box sx={{ py: ['1rem', '1rem', '1rem', '2rem'], display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '3rem', '4rem'], fontWeight: 'bold', color: '#5389E0' }}>About Us</Typography>
                    </Box>
                    <Box sx={{ width: '100%', height: ['38rem', '50rem'], display: 'flex', flexDirection: ['column-reverse', 'column-reverse', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['2rem', '3rem', '3rem', '4rem', '6rem'] }}>
                        <Box sx={{ width: ['80%', '80%', '40%', '30%', '30%'], height: ['18rem', '35rem', '30rem', '30rem', '35rem'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem', '1.5rem', '1.5rem', '2rem'], color: 'gray', textAlign: 'justify' }}>At Aattral Private Limited, we are committed to delivering advanced technologies that reshape industries, enhance operations, and maximize productivity. Our groundbreaking collection of smart solutions aims to radically change how you handle your resources, observe energy usage, and automate procedures. Explore how our state-of-the-art services can drive your organization towards a wiser, eco-friendly future.</Typography>
                        </Box>
                        <Box sx={{ width: ['90%', '90%', '40%', '40%'], height: ['15rem', '40rem', '35rem', '40rem'], backgroundImage: 'url(/about-img.webp)', backgroundposition: 'center', backgroundSize: 'cover', backgroundrepeat: 'no-repeat' }}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['10rem', '15rem', '15rem', '15rem', "25rem"], backgroundColor: '' }}>
                    <Box>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '3rem', '4rem'], fontWeight: 'bold', color: '#5389E0', textAlign: 'center' }}>Trusted By</Typography>
                    </Box>
                    <Box sx={{ width: '100%', height: ['6rem', '10rem', '10rem', '12rem', '20rem'], display: 'flex', justifyContent: 'center', alignItems: 'center', gap: ['1rem', '2rem', '3rem', '4rem', '6rem'] }}>
                        <Box sx={{ width: ['3rem', '4rem', '5rem', '5rem', '6rem'], height: ['3rem', '4rem', '5rem', '5rem', '6rem'], backgroundImage: 'url(/logo1.webp)', backgroundposition: 'center', backgroundSize: 'cover', backgroundrepeat: 'no-repeat', }}>

                        </Box>
                        <Box sx={{ width: ['3rem', '4rem', '5rem', '5rem', '6rem'], height: ['3rem', '4rem', '5rem', '5rem', '6rem'], backgroundImage: 'url(/logo2.webp)', backgroundposition: 'center', backgroundSize: 'cover', backgroundrepeat: 'no-repeat', }}>

                        </Box>
                        <Box sx={{ width: ['3rem', '4rem', '5rem', '5rem', '6rem'], height: ['3rem', '4rem', '5rem', '5rem', '6rem'], backgroundImage: 'url(/logo3.webp)', backgroundposition: 'center', backgroundSize: 'cover', backgroundrepeat: 'no-repeat', }}>

                        </Box>
                        <Box sx={{ width: ['3rem', '4rem', '5rem', '5rem', '6rem'], height: ['3rem', '4rem', '5rem', '5rem', '6rem'], backgroundImage: 'url(/logo4.webp)', backgroundposition: 'center', backgroundSize: 'cover', backgroundrepeat: 'no-repeat', }}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: 'auto' }}>
                    {
                        homedata.map((item, index) => (

                            index % 2 === 0 ?

                                (
                                    <Box sx={{ width: '100%', height: ['45rem', '60rem', '28rem', '35rem', '50rem'], display: 'flex', flexDirection: ['column-reverse', 'column-reverse', 'row', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['1rem', '1rem', '2rem', '3rem', '10rem'] }}>
                                        <Box sx={{ width: ['90%', '90%', '40%', '40%', '30%'], height: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '' }}>
                                            <Typography sx={{ width: ['100%', '100%', '100%'], fontSize: ['1.5rem', '3rem', '1.5rem', '2rem', '4rem'], color: '#5389E0', fontWeight: 'bold', lineHeight: ['2rem', '4rem', '3rem', '3rem', '4.5rem'] }}>{item.title}</Typography>
                                            <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem', '2rem'], color: 'gray' }}>{item.subtitle}</Typography>
                                            <Box sx={{ display: 'flex', gap: '1rem' }}>
                                                <Button sx={{ border: '1px solid #6897E4', backgroundColor: '#6897E4', color: 'white', fontSize: ['12px', '16px', '12px', '12px', '16px'], width: ['auto'], height: ['auto'], ":hover": { backgroundColor: '#1f55ad', border: '1px solid #1f55ad' } }}>Get Started</Button>
                                                <Button sx={{ border: '1px solid #262626', backgroundColor: '#262626', color: 'white', fontSize: ['12px', '16px', '12px', '12px', '16px'], width: ['auto'], height: ['auto'], ":hover": { border: '1px solid #fff' } }}>Learn More</Button>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: ['90%', '90%', '40%', '40%', '30%'], height: ['20rem', '30rem', '20rem', '25rem', '30rem'], backgroundImage: item.img, backgroundposition: 'center', backgroundSize: 'cover', backgroundrepeat: 'no-repeat', borderRadius: '16px' }}>

                                        </Box>
                                    </Box>
                                ) : (<Box sx={{ width: '100%', height: ['45rem', '60rem', '28rem', '35rem', '50rem'], display: 'flex', flexDirection: ['column', 'column', 'row', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['1rem', '1rem', '2rem', '3rem', '10rem'] }}>
                                    <Box sx={{ width: ['90%', '90%', '40%', '40%', '30%'], height: ['20rem', '30rem', '20rem', '25rem', '30rem'], backgroundImage: item.img, backgroundposition: 'center', backgroundSize: 'cover', backgroundrepeat: 'no-repeat', borderRadius: '16px' }}>

                                    </Box>
                                    <Box sx={{ width: ['90%', '90%', '40%', '40%', '30%'], height: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '' }}>
                                        <Typography sx={{ width: ['100%', '100%', '100%'], fontSize: ['1.5rem', '3rem', '1.5rem', '2rem', '4rem'], color: '#5389E0', fontWeight: 'bold', lineHeight: ['2rem', '4rem', '3rem', '3rem', '4.5rem'] }}>{item.title}</Typography>
                                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem', '2rem'], color: 'gray' }}>{item.subtitle}</Typography>
                                        <Box sx={{ display: 'flex', gap: '1rem' }}>
                                            <Button sx={{ border: '1px solid #6897E4', backgroundColor: '#6897E4', color: 'white', fontSize: ['12px', '16px', '12px', '12px', '16px'], width: ['auto'], height: ['auto'], ":hover": { backgroundColor: '#1f55ad', border: '1px solid #1f55ad' } }}>Get Started</Button>
                                            <Button sx={{ border: '1px solid #262626', backgroundColor: '#262626', color: 'white', fontSize: ['12px', '16px', '12px', '12px', '16px'], width: ['auto'], height: ['auto'], ":hover": { border: '1px solid #fff' } }}>Learn More</Button>
                                        </Box>
                                    </Box>

                                </Box>)

                        ))
                    }


                </Box>
                <Box sx={{ width: '100%', height: ['auto', 'auto', '30rem', '50rem'], display: 'flex', flexDirection: ['column', 'column', 'row'], gap: ['1rem', '1.5rem'], justifyContent: 'center', alignItems: 'center' }}>
                    {
                        homecard.map((item) => (

                            <Box sx={{ width: ['80%', '80%', '23%', '23%', '17%'], height: ['25rem', '20rem', '20rem', '25rem', "25rem"], backgroundColor: 'white', borderRadius: '12px', padding: ['1.5rem', '3rem', '1rem', '1.5rem', '3rem'], display: 'flex', flexDirection: 'column', gap: ['1.5rem', '2rem', '1.5rem', '1.5rem', '2rem'] }}>
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <Box sx={{ width: ['4rem', '5rem', '4rem', '5rem', '5rem'], height: ['4rem', '5rem', '4rem', '5rem', '5rem'], borderRadius: '50%', backgroundImage: item.profile, backgroundposition: 'center', backgroundSize: 'cover', backgroundrepeat: 'no-repeat', }}>

                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '1.5rem', '1.5rem'], color: '#5389E0', fontWeight: '500' }}>{item.title}</Typography>
                                        <Typography sx={{ fontSize: '1rem', color: 'gray' }}>{item.subtitle}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1rem', '1.5rem', '1.5rem'], color: 'gray' }}>{item.para}</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box sx={{ width: '100%', height: ['30rem', '30rem'], display: 'flex', gap: '1rem', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                    <Box>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '3rem', '4rem'], fontWeight: 'bold', color: '#5389E0', textAlign: 'center' }}>Contact</Typography>
                    </Box>
                    <Box sx={{ width: ['95%', '70%', '30%'], display: 'flex', justifyContent: 'center' }}>
                        <Form />
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['auto', 'auto', 'auto', 'auto', 'auto'], display: 'flex', flexDirection: 'column', alignItems: 'center', gap: ['1rem', '2rem', '2rem', '2rem', '3rem'], py: ['2rem', '2rem', '2rem', '2rem', '6rem'] }}>
                    <Box>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '3rem', '4rem'], fontWeight: 'bold', color: '#5389E0', textAlign: 'center' }}>FAQ</Typography>
                    </Box>
                    <Box sx={{ width: ['90%', '80%'] }}>
                        <Accordion />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default home