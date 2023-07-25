import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { industrialfooterdata, industrialcard } from '../uitilis/data'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TryIcon from '@mui/icons-material/Try';
import FacebookIcon from '@mui/icons-material/Facebook';



function industrial() {
    return (
        <>
            <Box sx={{ backgroundColor: '#62B6CB' }}>
                {/* hero section */}
                <Box sx={{ width: '100%', height: ['28rem', '40rem', '45rem', '50rem', '56rem'], backgroundColor: '#CBE8FF', position: 'relative' }}>

                    <Box sx={{ width: ['100%', '100%', '50%', '50%', '50%'], height: ['20rem', '30rem', '30rem', '30rem', '40rem'], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: ['20%', '15%', '10%', '20%'], right: ['0', '0', '0', '0'], backgroundColor: '' }}>

                    </Box>

                    <Box sx={{ width: ['70%', '70%', '60%', '60%', '50%'], position: 'absolute', top: ['63%', '50%', '23%', '30%', '35%'], left: ['7%', '10%', '5%', '5%', '10%'] }}>
                        <Typography sx={{ fontFamily: 'dynapuff', fontSize: ['2rem', '3.5rem', '4rem', '5rem', '6rem'], fontWeight: 'bold', color: '#1B4965', textAlign: ['left', 'left', 'left'] }}>Revolutionize your industry with real-time insights.</Typography>
                    </Box>
                </Box>
                {/* hero section */}
                <Box sx={{ width: '100%', height: ['45rem', '65rem', '35rem', '50rem', '50rem'], position: 'relative' }}>
                    <Box sx={{ width: ['90%', '90%', '50%', '50%', '40%'], backgroundColor: '', display: 'flex', flexDirection: 'column', gap: ['1rem', '2rem', '2rem', '2rem'], position: 'absolute', top: ['40%', '45%', '10%', '8%', '15%'], left: ['5%', '5%', '5%', '5%', '10%'] }}>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '2.5rem', '4rem'], fontWeight: 'bold', fontFamily: 'dynapuff' }}>Smart, Seamless Monitoring</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontFamily: 'zilla-slab' }}>Welcome to a world where industrial processes work smarter, not harder. Our solution provides real-time visibility into equipment performance, ensuring optimal operations and regulatory compliance.</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontFamily: 'zilla-slab' }}>Stay ahead with key features like real-time process monitoring, anomaly detection, equipment analytics, historical data analysis, and compliance reporting.</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontFamily: 'zilla-slab' }}>Maximize efficiency, productivity, and profitability with our comprehensive and customizable Smart Industrial Monitoring solution.</Typography>
                    </Box>
                    <Box sx={{ width: ['100%', '100%', '50%', '50%'], height: ['15rem', '22rem', '20rem', '25rem'], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: ['5%', '5%', '20%', '25%'], right: ['0', '0', '0', '0'], backgroundColor: '' }}>

                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['32rem', '50rem', '28rem', '35rem', '35rem'], position: 'relative' }}>
                    <Box sx={{ width: ['90%', '90%', '50%', '50%', '33%'], backgroundColor: '', display: 'flex', flexDirection: 'column', gap: ['1rem', '1rem', '1rem', '1rem', '2rem'], position: 'absolute', top: ['50%', '55%', '25%', '18%', '15%'], left: ['5%', '5%', '5%', '5%', '10%'] }}>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '2.5rem', '4rem'], fontWeight: 'bold', fontFamily: 'dynapuff' }}>Unleash the Power of Data-driven Decisions</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontFamily: 'zilla-slab' }}>Experience the full potential of actionable insights. From manufacturing to pharmaceuticals, our solution tailors itself to your industry-specific needs, guaranteeing unparalleled results.</Typography>

                    </Box>
                    <Box sx={{ width: ['100%', '100%', '50%', '50%', '50%'], height: ['15rem', '22rem', '20rem', '25rem'], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: ['0', '5%', '15%'], right: ['0', '0', '0'], backgroundColor: '' }}>

                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: ['90%', '90%', '80%'], display: 'flex', flexDirection: ['column', 'column', 'row'], justifyContent: 'center', gap: '1.5rem' }}>
                        {
                            industrialcard.map((item) => (<Box sx={{ width: ['100%', '100%', '32%', '32%', '28%'], height: ['20rem', '25rem', '20rem', '25rem', '30rem'], backgroundColor: '#4FACC4', borderRadius: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: ['1.5rem', '2rem', '1.5rem', "2rem"] }}>
                                    <Box sx={{ width: '100%', height: ['7rem', '10rem'], backgroundImage: item.bg, backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                    </Box>
                                    <Typography sx={{ fontSize: ['2rem', '3rem', '2rem', '3rem'], textAlign: 'center', fontWeight: 'bold' }}>
                                        {item.per}
                                    </Typography>
                                    <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], textAlign: 'center' }}>
                                        {item.para}
                                    </Typography>
                                </Box>
                            </Box>))

                        }

                    </Box>

                </Box>
                <Box sx={{ width: '100%', height: ['40rem', '45rem', '40rem', '35rem', '25rem'], display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: ['90%', '80%'], display: 'flex', flexDirection: 'column', gap: ['1.5rem', '1rem', '1rem', '1rem', '1rem'] }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: ['1rem', '0'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem'] }}>Manufacturing</Typography>
                            <Typography sx={{ width: ['50%', '65%'], fontSize: ['1rem', '1.5rem'], textAlign: [''] }}>Optimize production lines, equipment, and critical parameters for maximum efficiency.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: ['1rem', '0'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem'] }}>Oil & Gas</Typography>
                            <Typography sx={{ width: ['50%', '65%'], fontSize: ['1rem', '1.5rem'], textAlign: [''] }}>Ensure safety, performance, and regulatory compliance in your operations.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: ['1rem', '0'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem'] }}>Chemical Processing</Typography>
                            <Typography sx={{ width: ['50%', '65%'], fontSize: ['1rem', '1.5rem'], textAlign: [''] }}>Monitor and control process parameters for product quality and safety.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: ['1rem', '0'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem'] }}>Power Generation</Typography>
                            <Typography sx={{ width: ['50%', '65%'], fontSize: ['1rem', '1.5rem'], textAlign: [''] }}>Enhance energy production through power plant and equipment monitoring.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: ['1rem', '0'] }}>
                            <Typography sx={{ fontSize: ['1rem', '1.5rem'] }}>Pharmaceutical</Typography>
                            <Typography sx={{ width: ['50%', '65%'], fontSize: ['1rem', '1.5rem'], textAlign: [''] }}>Comply with quality standards and regulations via smart manufacturing processes.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['auto', 'auto', '30rem', '30rem', '50rem'], display: 'flex', justifyContent: "center" }}>
                    <Box sx={{ width: ['85%', '80%'], display: 'flex', flexDirection: ['column', 'column', 'row'], gap: '1rem', alignItems: "center", justifyContent: 'center', backgroundColor: '' }}>
                        <Box sx={{ width: ['90%', '80%', '26%', '27%', '25%'], height: ['20rem', '27rem', '22rem', '21rem', '27rem'], backgroundColor: '#4FADC5', borderRadius: "1rem", padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                            <Box sx={{ width: '100%', height: ['12rem', '15rem', '10rem', '12rem', '15rem'], backgroundColor: '#62B6CB', borderRadius: '1rem', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Box sx={{ width: '90%', height: ['8rem', '10rem', '7rem', '7rem', "10rem"], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: ['7rem', '10rem', '10rem', '7rem', '10rem'], display: 'flex', flexDirection: "column", justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'] }}>Our facility’s efficiency skyrocketed after implementing Smart Industrial Monitoring!</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem'] }}> John Smith, XYZ Manufacturing</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['90%', '80%', '26%', '27%', '25%'], height: ['20rem', '27rem', '22rem', '21rem', '27rem'], backgroundColor: '#4FADC5', borderRadius: "1rem", padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                            <Box sx={{ width: '100%', height: ['12rem', '15rem', '10rem', '12rem', '15rem'], backgroundColor: '#62B6CB', borderRadius: '1rem', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Box sx={{ width: '90%', height: ['8rem', '10rem', '7rem', '7rem', "10rem"], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: ['7rem', '10rem', '10rem', '7rem', '10rem'], display: 'flex', flexDirection: "column", justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'] }}>Smart Industrial Monitoring gave us the insights needed to stay ahead of the competition.</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem'] }}>Megan Johnson, ABC Energy</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['90%', '80%', '26%', '27%', '25%'], height: ['20rem', '27rem', '22rem', '21rem', '27rem'], backgroundColor: '#4FADC5', borderRadius: "1rem", padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                            <Box sx={{ width: '100%', height: ['12rem', '15rem', '10rem', '12rem', '15rem'], backgroundColor: '#62B6CB', borderRadius: '1rem', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Box sx={{ width: '90%', height: ['8rem', '10rem', '7rem', '7rem', "10rem"], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: ['7rem', '10rem', '10rem', '7rem', '10rem'], display: 'flex', flexDirection: "column", justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'] }}>The solution revolutionized our production process and increased our profitability.</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem'] }}>Linda White, Global Pharmaceuticals</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['20rem', '20rem', '30rem', '30rem', '35rem'], display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: ['90%', '65%', '90%', '60%', '40%'], height: ['20rem', '20rem', '30rem', '30rem', '35rem'], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: ['1rem', '1rem', '1.5rem', '2rem'] }}>
                        <Typography sx={{ fontSize: ['2.5rem', '3rem', '4rem'], textAlign: 'center', color: 'black', fontFamily: 'fascinate-inline', fontWeight: 'bold' }}>Get Started</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1rem', '1.5rem'], textAlign: 'center', color: 'black' }}>Your industry deserves the edge it needs to thrive. Embrace the future of industrial monitoring and revolutionize your operations today.</Typography>
                        <Button sx={{ backgroundColor: '#010100', width: 'auto', height: 'auto', fontSize: ['0.5rem', '1rem'], color: '#fff', ":hover": { backgroundColor: '#34c7e5', color: 'white' } }}>Schedule a Consultation</Button>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'center', gap: ['1.5rem', '0'], alignItems: ['center', 'flex-start'], py: '3rem' }}>
                    {
                        industrialfooterdata.map((item) => (
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
                <Box sx={{ width: '100%', height: ['10rem', '15rem', '20rem', '20rem', "20rem"], display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: ['1rem', '1.5rem', '1.5rem', '2rem'] }}>
                    <Box sx={{ width: '60%', display: "flex", flexDirection: 'row', gap: ['0.5rem', '1rem'], justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <TwitterIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: 'black' }} />
                        </Box>
                        <Box>
                            <InstagramIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: 'black' }} />
                        </Box>
                        <Box>
                            <FacebookIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: 'black' }} />
                        </Box>
                        <Box>
                            <TryIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: 'black' }} />
                        </Box>
                    </Box>
                    <Box sx={{ width: ['90%', '90%', '60%'], display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem'], color: 'black', textAlign: 'center' }}>© 2023 Smart Industrial Monitoring. All Rights Reserved.</Typography>

                    </Box>
                </Box>

            </Box>



        </>
    )
}

export default industrial