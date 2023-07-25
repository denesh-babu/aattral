import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { footerdata } from '../uitilis/data';

function solar() {
    return (
        <>
            <Box sx={{ backgroundColor: '#F9961F' }}>
                <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: ['90%', '90%', '80%', '82%', '81%'], height: ['35rem', '60rem', '70rem'], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: ['1rem', '4rem', '8rem'] }}>
                        <Box>
                            <Typography sx={{ fontSize: ['2rem', '4.5rem', '5rem', '7rem', '11rem'], fontWeight: 'bold', fontFamily: 'nunito', textAlign: ['center', 'center', 'left'], letterSpacing: ['0.5rem', '1rem', '1.5rem'] }}>SOLARPOWER</Typography>
                            <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1.5rem'], textAlign: ['center', 'left'] }}>Advanced Monitoring Solution.</Typography>
                                <Typography sx={{ display: ['none', 'block'], fontSize: ['1rem', '1rem', '1.5rem'] }}>Explore Now</Typography>
                                <Typography sx={{ display: ['none', 'block'], fontSize: ['1rem', '1rem', '1.5rem'] }}>July 11, 2023</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ width: '100%', height: ['20rem', '30rem', '40rem'], backgroundImage: 'url(/solar-bg1.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '2rem', }}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ width: '100%', height: ['37rem', '55rem', '30rem', '35rem'], display: 'flex', flexDirection: ['column-reverse', 'column-reverse', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['1rem', '1rem', '3rem'] }}>
                        <Box sx={{ width: ['90%', '90%', '35%'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '1rem', '1rem'] }}>
                            <Typography sx={{ fontSize: ['1.5rem', '2.5rem', '2rem', '2.5rem'], fontWeight: 'bold', fontFamily: 'limelight', color: 'black' }}>Revolutionizing Industries with Customized Solutions</Typography>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], width: ['95%', '90%'], color: 'black' }}>From manufacturing to healthcare, transportation to energy, our Smart Predictive Maintenance System caters to diverse industries, ensuring seamless operations and optimized asset management.</Typography>
                        </Box>
                        <Box sx={{ width: ['90%', '90%', '35%'], height: ['20rem', '30rem', '25rem', '30rem'], backgroundImage: 'url(/solar-sec1-img1.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '1.5rem' }}>

                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', height: ['auto', 'auto', '30rem', '35rem'], display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['1rem', '1rem', '3rem'] }}>
                        <Box sx={{ width: ['90%', '90%', '35%'], height: ['20rem', '30rem', '25rem', '30rem'], backgroundImage: 'url(/solar-sec1-img2.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '1.5rem' }}>

                        </Box>
                        <Box sx={{ width: ['90%', '90%', '35%'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '1rem'] }}>
                            <Typography sx={{ fontSize: ['1.5rem', '2.5rem', '2rem', '2.5rem'], fontWeight: 'bold', fontFamily: 'limelight', color: 'black' }}>Effortless Implementation & Unparalleled Support</Typography>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], width: ['95%', '90%'], color: 'black' }}>Our team of experts will guide you through every step of the process, from assessment to integration, providing comprehensive training and ongoing support for peak performance.</Typography>
                        </Box>

                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: ['90%', '90%', '80%'], height: ['auto', 'auto', 'auto', 'auto', '55rem'], py: ['2rem', '3rem', '3rem', '4rem', '0'], display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                        <Box sx={{ width: ['100%', '100%', '29%', '30%'], height: ['27rem', '35rem', '25rem', '38rem', '40rem'], display: 'flex', flexDirection: 'column', gap: ['2rem', '2rem', '1.5rem', '2rem', '3rem'] }}>
                            <Box sx={{ width: '100%', height: ['20rem', '25rem', '15rem', '20rem', '25rem'], backgroundImage: 'url(/solar-sec2-img1.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '1.5rem' }}>

                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem'] }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontWeight: 'bold' }}>Residential Solutions</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'] }}>Optimize residential solar installations for efficient energy generation and improved ROI.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['100%', '100%', '29%', '30%'], height: ['27rem', '35rem', '25rem', '38rem', '40rem'], display: 'flex', flexDirection: 'column', gap: ['2rem', '2rem', '1.5rem', '2rem', '3rem'] }}>
                            <Box sx={{ width: '100%', height: ['20rem', '25rem', '15rem', '20rem', '25rem'], backgroundImage: 'url(/solar-sec2-img2.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '1.5rem' }}>

                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem'] }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontWeight: 'bold' }}>Commercial Solutions</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'] }}>Track and manage commercial-scale solar projects for maximized productivity and energy usage.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['100%', '100%', '29%', '30%'], height: ['27rem', '35rem', '25rem', '38rem', '40rem'], display: 'flex', flexDirection: 'column', gap: ['2rem', '2rem', '1.5rem', '2rem', '3rem'] }}>
                            <Box sx={{ width: '100%', height: ['20rem', '25rem', '15rem', '20rem', '25rem'], backgroundImage: 'url(/solar-sec2-img3.webp)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '1.5rem' }}>

                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem'] }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontWeight: 'bold' }}>Solar Farms</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'] }}>Monitor and optimize large solar farms to achieve the highest level of renewable energy generation.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['15rem', '25rem', '30rem', '40rem', '56rem'], backgroundImage: 'url(/solar-bg2.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: ['67%', '51%', '51%', '51%', '41%'] }}>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '4rem', '5rem', '6rem'], fontWeight: 'bold', fontFamily: 'abril-fatface', color: 'white' }}>Transcend Energy Boundaries Today.</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', py: ['2rem', '3rem', '4rem', '6rem', '8rem'], height: 'auto', display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['1rem', '1.5rem', '2rem', '5rem'] }}>
                    <Box sx={{ width: ['90%', '90%', '42%', '39%', '40%'], height: ['7rem', '8rem', '13rem', '13rem', '17rem'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '1rem', '1rem', '1.5rem'] }}>
                        <Typography sx={{ fontSize: ['1.5rem', '2rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold' }}>The Implementation Journey</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'] }}>Joining the Solar Revolution doesn't need to be complicated. We’re here to guide you every step of the way.</Typography>
                    </Box>
                    <Box sx={{ width: ['90%', '90%', '42%', '39%', '40%'], height: ['12rem', '16rem', '13rem', '13rem', '17rem'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '1rem', '1rem', '1.5rem'] }}>
                        <Typography sx={{ fontSize: ['1.5rem', '2rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold' }}>Implementation Steps</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Assessment & Analysis</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Step 1</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Solution Design & Customization</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Step 2</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Installation & Integration</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Step 3</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Ongoing Support & Updates</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Step 4</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ width: "100%", height: ['55rem', '45rem', '40rem', '45rem'], display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['2rem', '2rem', '2rem', '3rem', '4rem'] }}>
                    <Box sx={{ width: ['90%', '70%', '40%', '35%', '28%'], height: ['25rem', '20rem', '25rem', '30rem'], borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", gap: '2rem', backgroundColor: '#F58A08' }}>
                        <Typography sx={{ color: 'black', width: '85%', fontSize: '1.5rem', fontFamily: 'libre baskerville', textAlign: 'center' }}>The Solar Monitoring System helped us elevate our energy production and optimize our solar infrastructure - couldn't be happier!</Typography>
                        <Typography sx={{ fontSize: "1rem", fontFamily: 'libre baskerville', fontWeight: 'bold', color: 'black' }}>SolarWave</Typography>
                    </Box>
                    <Box sx={{ width: ['90%', '70%', '40%', '35%', '28%'], height: ['25rem', '20rem', '25rem', '30rem'], borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", gap: '2rem', backgroundColor: '#F58A08' }}>
                        <Typography sx={{ color: 'black', width: '85%', fontSize: '1.5rem', fontFamily: 'libre baskerville', textAlign: 'center' }}>Fantastic results! Our solar investments were significantly improved thanks to the monitoring and optimization solutions.</Typography>
                        <Typography sx={{ fontSize: "1rem", fontFamily: 'libre baskerville', fontWeight: 'bold', color: 'black' }}>GreenPower</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['20rem', '20rem', '30rem', '30rem', '35rem'], display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: ['90%', '65%', '90%', '60%', '40%'], height: ['20rem', '20rem', '30rem', '30rem', '35rem'], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: ['1rem', '1rem', '1.5rem', '2rem'] }}>
                        <Typography sx={{ fontSize: ['2.5rem', '3rem', '4rem'], textAlign: 'center', color: 'black', fontFamily: 'fascinate-inline', fontWeight: 'bold' }}>Get Started</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'center', color: 'black' }}>Unlock the limitless potential of solar energy and empower your future. Don’t miss out on monitoring, optimizing, and maximizing your solar infrastructure. Connect with our solar experts today.</Typography>
                        <Button sx={{ backgroundColor: '#010100', width: 'auto', height: 'auto', fontSize: ['0.5rem', '1rem'], color: '#fff', ":hover": { backgroundColor: '#34c7e5', color: 'white' } }}>Schedule a Consultation</Button>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['auto', '20rem', '20rem', '20rem', '22rem'], backgroundColor: '#F9961F' }}>
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'center', gap: ['1.5rem', '0'], alignItems: ['center', 'flex-start'], py: '3rem' }}>
                        {
                            footerdata.map((item) => (
                                <Box sx={{ width: ['70%', '25%'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '1rem'] }}>
                                    <Typography sx={{ fontSize: '1.5rem', color: 'black', fontWeight: 'bold' }}>{item.title}</Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <Typography sx={{ fontSize: '1rem', color: 'black', ':hover': { letterSpacing: '0.1rem' } }}>{item.con1}</Typography>
                                        <Typography sx={{ fontSize: '1rem', color: 'black', ':hover': { letterSpacing: '0.1rem' } }}>{item.con2}</Typography>
                                        <Typography sx={{ fontSize: '1rem', color: 'black', ':hover': { letterSpacing: '0.1rem' } }}>{item.con3}</Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>

                    <Box sx={{ width: '100%', height: ['7rem', '4rem', '4rem', '4rem', '5rem'],display:'flex',flexDirection:['column','row'], position: 'relative' }}>
                        <Box sx={{ width: ['60%', '70%', '80%', '85%', '45%'], position: 'absolute', top: ['30%', '35%', '25%', '25%', '30%'], left: ['10%', '10%'] }}>
                            <Typography sx={{ color: 'black', fontSize: ['1rem', '1rem','1.5rem'] }}>© 2023 Solar Monitoring System. All Rights Reserved.</Typography>
                        </Box>
                        <Box sx={{ width: ['30%', '15%', '15%', '15%', '6%'], display: 'flex', justifyContent: 'flex-end', gap: ['0.5rem', '0.5rem', '1rem'], position: 'absolute', top: ['40%', '30%', '28%', '16%', '25%'], right: ['10%', '10%'] }}>
                            <Box sx={{ width: ['2rem', '2rem', '2rem', '3rem'], height: ['2rem', '2rem', '2rem', '3rem'], backgroundColor: "#F58B09", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                <InstagramIcon sx={{ width: ['1rem', '1rem', '1rem', '1.5rem'], height: ['1rem', '1rem', '1rem', '1.5rem'], color: 'black' }} />
                            </Box>
                            <Box sx={{ width: ['2rem', '2rem', '2rem', '3rem'], height: ['2rem', '2rem', '2rem', '3rem'], backgroundColor: "#F58B09", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                <TwitterIcon sx={{ width: ['1rem', '1rem', '1rem', '1.5rem'], height: ['1rem', '1rem', '1rem', '1.5rem'], color: 'black' }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </>
    )
}

export default solar