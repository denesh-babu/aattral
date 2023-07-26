import { Box, Button, Typography } from '@mui/material'
import React from 'react'



function home3() {
    return (
        <>
            <Box sx={{ backgroundColor: '#0B1829' }}>
                <Box sx={{ width: '100%', height: 'auto', backgroundColor: '#0B1829', }}>
                    <Box sx={{ width: '100%', height: ['45rem', '60rem', '40rem', '50rem', '50rem'], backgroundColor: "#0B1829", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <Typography sx={{ fontSize: ['6rem', '12rem', '15rem', '18rem', '25rem'],  color: '#ffff80', lineHeight: ['7rem', '13rem', '15rem', '18rem', "25rem"] ,fontWeight:'BOLD',fontFamily:'unbounded'}}>SMART</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: ['1rem', '2rem', '3rem', '3.5rem', "4rem"], fontWeight: "bold", letterSpacing:['0.5rem','1rem','1rem','1.5rem','3rem'] ,fontFamily:'playfair',color:'lightgrey',textAlign:'center'}}>HOME AUTOMATION</Typography>
                        </Box>


                    </Box>
                </Box>
                <Box sx={{ width: 'auto', height: 'auto', px: '0rem', py: ['2rem', '3rem', '7rem', '6rem', '7rem'], display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8DC5D' }}>
                    <Box sx={{ width: ['90%', '90%', '42%'], height: ['6rem', '7rem', '17rem', '17rem', '20rem'], display: 'flex', justifyContent: ['center', 'center', 'flex-start'] }}>
                        <Box sx={{ width: ['5rem', '5rem', '5rem', '6rem'], height: ['5rem', '5rem', '5rem', '6rem'], borderRadius: '50%', backgroundImage: 'URL(/smarthome-profile.webp)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                        </Box>
                    </Box>
                    <Box sx={{ width: ['90%', '90%', '42%'], height: ['10rem', '12rem', '17rem', '17rem', '20rem'] }}>
                        <Typography sx={{ fontFamily: 'unbounded', fontSize: ['2rem', '2.5rem', '3rem', '3.5rem', '4rem'], color: '#403F4C', textAlign: ['center', 'center', 'left'] }}>Introduction</Typography>
                        <Typography sx={{ fontFamily: 'playfair', fontSize: ['1rem', '1.5rem', '1.5rem', '1.5rem', '2rem'], textAlign: ['center', 'center', 'left'] }}>Transform your living experience with state-of-the-art Smart Home Automation. Experience the future of ultra-convenient, comfortable, and secure living through our cutting-edge home automation solution.</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', height: 'auto', px: ['1rem', '2rem', '3rem', '5rem', '7rem'], py: ['1rem', '2rem', '3rem', '5rem', '7rem'], display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Box sx={{ px: ['0rem', '2rem', '1rem', '1.5rem', '2rem'] }}>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '3rem', '3rem', '4rem'], fontWeight: 'bold', color: "white", textAlign: ['center', 'center', 'left'] }}>Key Features</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', gap: ['1rem', '2rem', '3rem', '4rem', '6rem'] }}>
                        <Box sx={{ width: ['95%', '95%', '45%'], height: ['11rem', '14rem', '22rem', '16rem', '22rem'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem', '1.5rem', '1.5rem', '2rem'], color: "white", textAlign: ['center', 'center', 'left'] }}>Lighting control: Create the perfect ambiance and boost energy efficiency with smart lighting control.  Climate control: Personalize temperature settings and optimize energy usage for ultimate comfort.  Security system integration: Oversee and manage alarms, cameras, and access control for a safer home.</Typography>
                        </Box>
                        <Box sx={{ width: ['95%', '95%', '45%'], height: ['9rem', '12rem', '22rem', '16rem', '22rem'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem', '1.5rem', '1.5rem', '2rem'], color: "white", textAlign: ['center', 'left'] }}>Voice commands & mobile app: Easy control of devices through voice or a handy mobile app.  Energy-saving automation: Make use of strategies like occupancy-based lighting and smart thermostats to reduce energy consumption.  </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', py: ['2rem', '3rem', '4rem', '6rem', '8rem'], height: 'auto', display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8DC5D', gap: ['1rem', '1.5rem', '2rem', '5rem'] }}>
                    <Box sx={{ width: ['90%', '90%', '42%', '39%', '40%'], height: ['6rem', '7rem', '13rem', '13rem', '17rem'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '1rem', '1rem', '1.5rem'] }}>
                        <Typography sx={{ fontSize: ['1.5rem', '2rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold' }}>Benefits</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'] }}>Why is Smart Home Automation the ultimate choice?</Typography>
                    </Box>
                    <Box sx={{ width: ['90%', '90%', '42%', '39%', '40%'], height: ['18rem', '16rem', '13rem', '13rem', '17rem'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '1rem', '1rem', '1.5rem'] }}>
                        <Typography sx={{ fontSize: ['1.5rem', '2rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold' }}>Reasons to love smart living</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Convenient control</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Enjoy easy home management.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Energy efficiency</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Save on bills and reduce consumption.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Personalized settings</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Tailor your home to your needs.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Heightened security</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Protect your home from anywhere.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', height: 'auto', px: ['1rem', '2rem', '3rem', '5rem', '7rem'], py: ['1rem', '2rem', '3rem', '5rem', '7rem'], display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Box sx={{ px: ['0rem', '2rem', '1rem', '1.5rem', '2rem'] }}>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '3rem', '3rem', '4rem'], fontWeight: 'bold', color: "white", textAlign: ['center', 'center', 'left'] }}>Use Cases
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', gap: ['1rem', '2rem', '3rem', '4rem', '6rem'] }}>
                        <Box sx={{ width: ['95%', '95%', '45%'], height: ['11rem', '14rem', '22rem', '16rem', '22rem'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem', '1.5rem', '1.5rem', '2rem'], color: "white", textAlign: ['center', 'center', 'left'] }}>Lighting Automation: Illuminate spaces as per your preferences or automate based on occupancy.  Climate Control: Set temperature schedules and adjust remotely for maximum comfort.  Security Integration: Control and monitor alarms, cameras, and access systems from any location.</Typography>
                        </Box>
                        <Box sx={{ width: ['95%', '95%', '45%'], height: ['9rem', '12rem', '22rem', '16rem', '22rem'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem', '1.5rem', '1.5rem', '2rem'], color: "white", textAlign: ['center', 'left'] }}>Entertainment Automation: Seamless audio and video experiences with automated settings.  Home Monitoring: Stay alert and informed with remote home monitoring for safety and peace of mind.    </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', py: ['2rem', '3rem', '4rem', '6rem', '8rem'], height: 'auto', display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8DC5D', gap: ['1rem', '1.5rem', '2rem', '5rem'] }}>
                    <Box sx={{ width: ['90%', '90%', '42%', '39%', '40%'], height: ['6rem', '9rem', '13rem', '13rem', '17rem'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '1rem', '1rem', '1.5rem'] }}>
                        <Typography sx={{ fontSize: ['1.5rem', '2rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold' }}>Implementation Process</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'] }}>Achieve the perfect smart home setup with our easy implementation process:</Typography>
                    </Box>
                    <Box sx={{ width: ['90%', '90%', '42%', '39%', '40%'], height: ['18rem', '16rem', '13rem', '13rem', '17rem'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '1rem', '1rem', '1.5rem'] }}>
                        <Typography sx={{ fontSize: ['1.5rem', '2rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold' }}>Step-by-step guidance</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Consultation</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Assess needs and infrastructure.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Design</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Customize automation solutions.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Installation</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Deploy devices and integrate seamlessly.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'left' }}>Training</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'], textAlign: 'right' }}>Maximize benefits with expert instruction.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", height: ['55rem', '45rem', '40rem', '45rem'], backgroundColor: '#202C39', display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['2rem', '2rem', '2rem', '3rem', '4rem'] }}>
                    <Box sx={{ width: ['90%', '70%', '40%', '35%', '28%'], height: ['25rem', '20rem', '25rem', '30rem'], borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", gap: '2rem', backgroundColor: '#0B1829' }}>
                        <Typography sx={{ color: '#F3D592', width: '85%', fontSize: '1.5rem', fontFamily: 'libre baskerville', textAlign: 'center' }}>“We absolutely love how our home has been transformed by this smart automation solution. The convenience and enhanced security are exceptional.”</Typography>
                        <Typography sx={{ fontSize: "1rem", fontFamily: 'libre baskerville', fontWeight: 'bold', color: 'white' }}>SmartLifestyle</Typography>
                    </Box>
                    <Box sx={{ width: ['90%', '70%', '40%', '35%', '28%'], height: ['25rem', '20rem', '25rem', '30rem'], borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", gap: '2rem', backgroundColor: '#0B1829' }}>
                        <Typography sx={{ color: '#F3D592', width: '85%', fontSize: '1.5rem', fontFamily: 'libre baskerville', textAlign: 'center' }}>“Our energy consumption has significantly reduced since installing the Smart Home Automation system. The entire process was seamless!”</Typography>
                        <Typography sx={{ fontSize: "1rem", fontFamily: 'libre baskerville', fontWeight: 'bold', color: 'white' }}>EcoHomeOwner</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', backgroundColor: '#F8DC5D', px: ['1rem', '2rem', '4rem', '6rem', '9rem'], py: ['1rem', '2rem', '4rem', '6rem', '9rem'], display: 'flex', flexDirection: 'column', gap: ['1.5rem', "2.5rem"] }}>
                    <Box sx={{ width: ['100%', '100%', '90%', '90%', '68%'] }}>
                        <Typography sx={{ fontSize: ['2rem', '2.5rem', '3rem', '3.5rem', '4.5rem'], fontFamily: 'unbounded', color: '#403F4C', fontWeight: 'bold' }}>Ready to revolutionize your home? Let’s elevate your living experience together!</Typography>

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], gap: '1rem' }}>
                        <Button sx={{ width: 'auto', height: 'auto', backgroundColor: '#E94955', color: 'white', fontSize: ['1rem'] }}>Contact Us</Button>
                        <Button sx={{ width: 'auto', height: 'auto', backgroundColor: '#3184FD', color: 'white', fontSize: '1rem' }}>Learn More</Button>
                    </Box>
                </Box>
                <Box sx={{ px: ['1rem', '2rem', '9rem'], py: ['2rem', '3rem', '6rem'], backgroundColor: '#F8DC5D' }}>
                    <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'space-between' }}>
                        <Typography sx={{ fontFamily: 'playfair', fontSize: '1rem', textAlign: ['center', 'left'] }}>© 2023 Smart Home Automation. All rights reserved.</Typography>
                        <Typography sx={{ fontFamily: 'playfair', fontSize: '1rem', textAlign: ['center', 'right'] }}>Generated on July 11, 2023</Typography>
                    </Box>

                </Box>












            </Box>

        </>
    )
}

export default home3