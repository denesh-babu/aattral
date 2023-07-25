import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { home3footerdata, home3card } from '../uitilis/data'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TryIcon from '@mui/icons-material/Try';
import FacebookIcon from '@mui/icons-material/Facebook';


function home3() {
    return (
        <>
            <Box sx={{ backgroundColor: '#0B1829' }}>
                <Box sx={{ width: '100%', height: '30rem', backgroundColor: '#0B1829', }}>

                </Box>
                <Box sx={{ width: 'auto', height: ['auto', '28rem', '22rem', '35rem'], backgroundColor: '#0B1829', backgroundColor: 'gray', px: ['1rem', '1rem', '2rem', '3rem', '10rem'], py: ['1rem', '1rem', '2rem', '3rem', '10rem'], display: 'flex', flexDirection: 'column', gap: ['1.5rem', '1.5rem', '1.5rem', '2rem', '3rem'] }}>
                    <Box>
                        <Typography sx={{ fontSize: ['2rem', '2rem', '3rem', '5rem'], color: '#00B4D8', fontFamily: 'fascinate-inline', fontWeight: 'bold' }}>Key Features Unleashed</Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: ['column', 'row'], alignItems: 'center', justifyContent: 'center', gap: ['2rem', '2rem', '2rem', '2rem', '4.5rem'] }}>
                        <Box sx={{ width: ['95%', "30%"], height: ['13rem', '21rem', '14rem', '22rem', '21rem'], backgroundColor: '', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: '0rem' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '0.5rem', '0.5rem', '1rem'] }}>
                                <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold', color: '#00B4D8' }}>Real-time Monitoring</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1.5rem'], color: '#91E0EE' }}>Gain visibility into energy usage across your organization in real-time.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '0.5rem', '0.5rem', '1rem'] }}>
                                <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold', color: '#00B4D8' }}>Efficiency Insights</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1.5rem'], color: '#91E0EE' }}>Receive actionable recommendations to improve energy efficiency.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['95%', "30%"], height: ['13rem', '21rem', '14rem', '22rem', '21rem'], backgroundColor: '', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: '0rem' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '0.5rem', '0.5rem', '1rem'] }}>
                                <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold', color: '#00B4D8' }}>Analytics Powerhouse</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1.5rem'], color: '#91E0EE' }}>Analyze energy data to identify inefficiencies and optimization opportunities.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '0.5rem', '0.5rem', '1rem'] }}>
                                <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold', color: '#00B4D8' }}>Renewable Integration</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1.5rem'], color: '#91E0EE' }}>Integrate renewable energy sources, such as solar, for a greener energy mix.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['95%', "30%"], height: ['13rem', '21rem', '14rem', '22rem', '21rem'], backgroundColor: '', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: '0rem' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '0.5rem', '0.5rem', '1rem'] }}>
                                <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold', color: '#00B4D8' }}>Demand Management</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1.5rem'], color: '#91E0EE' }}>Optimize energy demand and balance loads to reduce peak demand charges.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['0.5rem', '0.5rem', '0.5rem', '0.5rem', '1rem'] }}>
                                <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '2rem'], fontWeight: 'bold', color: '#00B4D8' }}>Control Mastery</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1.5rem'], color: '#91E0EE' }}>Empower informed decision-making for superior energy management.</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{ width: '100%', height: ['18rem', '12rem', '18rem', '30rem', '35rem'] }}>
                    <Box sx={{ width: '100%', height: ['18rem', '12rem', '18rem', '30rem', '35rem'], display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', alignItems: 'center', gap: ['0rem', '1rem', '2rem'], }}>
                        <Box sx={{ width: ['90%', '95%', '44%', '43%', '41%'], height: ['3rem', '3rem', '10rem', '18rem'] }}>
                            <Typography sx={{ fontSize: ['1.5rem', '2rem', '2.5rem', '3.5rem', '4.5rem'], fontWeight: 'bold', fontFamily: 'albert-sans', color: '#ADE8F4' }}>Unlock Compelling Benefits</Typography>
                        </Box>
                        <Box sx={{ width: ['90%', '95%', '44%', '43%', '41%'], height: ['11rem', '5rem', '10rem', '18rem'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1.5rem', '2rem'], color: '#48CAE4' }}>By adopting our Smart Energy Management solution, your organization can reduce energy costs, achieve substantial savings, optimize consumption, improve efficiency, minimize environmental impact, promote sustainability, and enhance operational performance through data-driven insights.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['auto', 'auto', 'auto', 'auto', '100rem'] }}>
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ width: ['95%', '55%', '60%', '65%', '50%'], fontFamily: 'Fascinate Inline', fontSize: ['2rem', '2rem', '3rem', '5rem'], fontWeight: 'bold', color: '#0096C7', textAlign: 'center' }}>Use Cases</Typography>
                        <Typography sx={{ width: ['94%', '55%', '60%', '65%', '45%'], fontFamily: 'Albert Sans', color: 'white', fontSize: ['1rem', '1rem', '1.5rem', '2rem'], textAlign: 'center' }}>Our state-of-the-art Smart Energy Management solution is versatile and applicable across various industries and sectors. </Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ width: ['100%', '100%', '100%', '80%'], px: ['0rem', '0rem', '0rem', '8rem', '10rem'], py: ['2rem', '2rem', '3rem', '6rem'], height: 'auto', display: 'flex', flexDirection: ['column', 'row'], flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
                            {
                                home3card.map((item) => (
                                    <Box sx={{ width: ['90%', '60%', "40%"], height: ['20rem', '20rem', '25rem'], border: '2px solid #5388E1', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                                        <Box sx={{ width: '6rem', height: '6rem', borderRadius: '50%', backgroundImage: item.img, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: ['0.5rem', '1rem'], backgroundColor: '' }}>
                                            <Typography sx={{ fontFamily: 'fascinate-inline', fontSize: ['1.5rem', '1.5rem', '2rem'], fontWeight: 'bold', color: '#0096C7' }}>{item.title}</Typography>
                                            <Typography sx={{ fontFamily: 'albert-sans', fontSize: ['1rem', '1rem', '1.5rem'], color: 'white', width: ['70%', '100%', '70%', '100%'], textAlign: 'center' }}>{item.subtitle}</Typography>
                                        </Box>

                                    </Box>
                                ))
                            }

                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', padding: ['1rem', '2rem', '3rem', '4rem', '10rem'], height: 'auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Typography sx={{ fontFamily: 'fascinate-inline', color: '#CAF0F8', fontWeight: 'bold', fontSize: ['1.5rem', '1.5rem', '3rem'] }}>Implementation Process</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['1rem', '0.5rem'] }}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography sx={{ color: '#CAF0F8', fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'left', width: ['40%', '100%', '40%', '100%'] }}>Energy Assessment</Typography>
                                <Typography sx={{ color: 'white', fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'right', width: ['50%', '100%', '60%', '100%'] }}>Identify Opportunities for Improvement</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography sx={{ color: '#CAF0F8', fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'left', width: ['40%', '100%', '40%', '100%'] }}>Solution Design</Typography>
                                <Typography sx={{ color: 'white', fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'right', width: ['50%', '100%', '60%', '100%'] }}>Customize System to Your Needs</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography sx={{ color: '#CAF0F8', fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'left', width: ['40%', '100%', '40%', '100%'] }}>Installation and Integration</Typography>
                                <Typography sx={{ color: 'white', fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'right', width: ['50%', '100%', '60%', '100%'] }}>Seamless Deployment into Your Infrastructure</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography sx={{ color: '#CAF0F8', fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'left', width: ['40%', '100%', '40%', '100%'] }}>User Training</Typography>
                                <Typography sx={{ color: 'white', fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'right', width: ['50%', '100%', '60%', '100%'] }}>Empower Staff with System Knowledge</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', height: 'auto', px: ['0rem', '4rem', '2rem', '4rem'], py: ['2rem', '4rem', '2rem', '4rem'], display: 'flex', alignItems: 'center', justifyContent: 'center', gap: ['1.5rem', '2.5rem', '1rem', '2.5rem'], flexDirection: ['column', 'column', 'row'] }}>
                    <Box sx={{ width: ['70%', '60%', '28%', '23%', '23%'], height: ['20rem', '24rem', '23rem', '23rem', '28rem'], backgroundColor: 'lightgray', borderRadius: '1.5rem', p: ['2rem', '3rem', '1rem', '2rem', '3rem'], display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['1rem', '3rem', '2rem', '2rem', '3rem'] }}>
                            <Box sx={{ width: '5rem', height: '5rem', borderRadius: '50%', backgroundImage: 'url(home3-card2-img1.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                            </Box>

                            <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '1.5rem', '2rem'] }}>We achieved significant energy savings and boosted our sustainability initiatives.</Typography>
                        </Box>
                        <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1.5rem'] }}>Linda Johnson, MegaCorp</Typography>


                    </Box>
                    <Box sx={{ width: ['70%', '60%', '28%', '23%', '23%'], height: ['20rem', '24rem', '23rem', '23rem', '28rem'], backgroundColor: 'lightgray', borderRadius: '1.5rem', p: ['2rem', '3rem', '1rem', '2rem', '3rem'], display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['1rem', '3rem', '2rem', '2rem', '3rem'] }}>
                            <Box sx={{ width: '5rem', height: '5rem', borderRadius: '50%', backgroundImage: 'url(home3-card2-img2.webp)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                            </Box>

                            <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '1.5rem', '2rem'], width: ['100%', '80%', '100%'] }}>Superior energy management has never been this easy and efficient.</Typography>
                        </Box>
                        <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1.5rem'] }}>Edward Smith, GreenTech Inc</Typography>


                    </Box>
                    <Box sx={{ width: ['70%', '60%', '28%', '23%', '23%'], height: ['20rem', '24rem', '23rem', '23rem', '28rem'], backgroundColor: 'lightgray', borderRadius: '1.5rem', p: ['2rem', '3rem', '1rem', '2rem', '3rem'], display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['1rem', '3rem', '2rem', '2rem', '3rem'] }}>
                            <Box sx={{ width: '5rem', height: '5rem', borderRadius: '50%', backgroundImage: 'url(home3-card2-img3.webp)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                            </Box>

                            <Typography sx={{ fontSize: ['1.5rem', '1.5rem', '1.5rem', '1.5rem', '2rem'] }}>Game-changing solution for innovative and environment-conscious organizations.</Typography>
                        </Box>
                        <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1.5rem'] }}>Sophie Turner, EcoVentures</Typography>


                    </Box>

                </Box>
                <Box sx={{ width: '100%', height: ['20rem', '20rem', '30rem', '30rem', '35rem'], display: 'flex', justifyContent: 'center', backgroundColor: 'gray' }}>
                    <Box sx={{ width: ['90%', '65%', '90%', '60%', '40%'], height: ['20rem', '20rem', '30rem', '30rem', '35rem'], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', gap: ['1rem', '1rem', '1.5rem', '2rem'] }}>
                        <Typography sx={{ fontSize: ['2.5rem', '3rem', '4rem'], textAlign: 'center', color: '#ADE8F4', fontFamily: 'fascinate-inline', fontWeight: 'bold' }}>Get Started</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'center', color: '#ADE8F4' }}>Take the first step toward superior energy management and sustainability. Collaborate with our expert team to develop and implement a customized Smart Energy Management solution tailored to your organization's unique needs.</Typography>
                        <Button sx={{ backgroundColor: '#CAF0F8', width: 'auto', height: 'auto', fontSize: ['0.5rem', '1rem'], color: '#03045E', ":hover": { backgroundColor: '#34c7e5', color: 'white' } }}>Schedule a Consultation</Button>
                    </Box>
                </Box>
                <Box>

                    <Box sx={{ width: '100%', height: ['auto', '15rem', '20rem', '20rem', '15rem'], backgroundColor: '#0B1829' }}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'center', gap: ['1.5rem', '0'], alignItems: ['center', 'flex-start'], py: '3rem' }}>
                            {
                                home3footerdata.map((item) => (
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

                    </Box>



                    {/* footer */}
                    <Box sx={{ width: '100%', height: ['10rem', '15rem', '20rem', '20rem', "20rem"], display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: ['1rem', '1.5rem', '1.5rem', '2rem'], backgroundColor: 'red' }}>
                        <Box sx={{ width: '60%', display: "flex", flexDirection: 'row', gap: ['0.5rem', '1rem'], justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <TwitterIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: '#F3D592' }} />
                            </Box>
                            <Box>
                                <InstagramIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: '#F3D592' }} />
                            </Box>
                            <Box>
                                <FacebookIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: '#F3D592' }} />
                            </Box>
                            <Box>
                                <TryIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: '#F3D592' }} />
                            </Box>
                        </Box>
                        <Box sx={{ width: ['90%', '90%', '60%'], display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem'], color: '#F3D592' }}>Copyright © 2023 Smart Energy Management. All rights reserved.</Typography>

                        </Box>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default home3