import { Box, Button,Typography } from '@mui/material'
import React from 'react'
import { assetfooterdata } from '../uitilis/data'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TryIcon from '@mui/icons-material/Try';
import FacebookIcon from '@mui/icons-material/Facebook';



function asset() {
    return (
        <>
            <Box sx={{ backgroundColor: '' }}>
                <Box sx={{ width: '100%', height: ['35rem', '50rem', '45rem', '50rem', '60rem'], backgroundColor: '#CBE8FF', position: 'relative' }}>

                    <Box sx={{ width: ['100%', '100%', '50%', '50%', '50%'], height: ['20rem', '30rem', '30rem', '30rem', '40rem'], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: ['15%', '15%', '10%', '20%'], right: ['0', '0', '0', '0'], backgroundColor: '' }}>

                    </Box>

                    <Box sx={{ width: ['70%', '70%', '60%', '60%', '50%'], position: 'absolute', top: ['78%', '80%', '33%', '40%', '45%'], left: ['4%', '14%', '5%', '5%', '10%'] }}>
                        <Typography sx={{ fontFamily: 'staatliches', fontSize: ['2.5rem', '4rem', '4rem', '5rem', '6rem'], fontWeight: '900', color: '#1B4965', textAlign: ['left', 'left', 'left'], lineHeight: ['3rem', "5rem"] }}>REVOLUTIONIZE</Typography>
                        <Typography sx={{ fontSize: ['1.5rem','2.5rem','3rem','4rem', '5rem'], letterSpacing: ['0.7rem','1rem' ,'0.7rem'] }}>AssetManagement</Typography>
                    </Box>
                </Box>
                <Box sx={{width:'auto',height:'auto',px:['1rem','2rem','3rem','5rem','7rem'],py:['1rem','2rem','3rem','5rem','7rem'],display:'flex',flexDirection:'column',gap:'1rem',backgroundColor:'black'}}>
                   <Box sx={{px:['0rem','2rem','1rem','1.5rem','2rem']}}>
                    <Typography sx={{fontSize:['2rem','3rem','3rem','3rem','4rem'],fontWeight:'bold',color:"white",textAlign:['center','center','left']}}>Introducing Smart Asset Management</Typography>
                   </Box>
                   <Box sx={{display:'flex',alignItems:'center',flexDirection:['column','column','row'],justifyContent:'center',gap:['1rem','2rem','3rem','4rem','6rem']}}>
                    <Box sx={{width:['95%','95%','45%'],height:['9rem','12rem','18rem','14rem','18rem'],backgroundColor:''}}>
                        <Typography sx={{fontSize:['1rem','1.5rem','1.5rem','1.5rem','2rem'],color:"#82C0CC",textAlign:['center','center','left']}}>Discover the cutting-edge solution that helps you effortlessly manage your valuable assets while optimizing maintenance schedules and boosting asset utilization. With comprehensive features and a user-friendly interface, our system caters to a wide range of industries.</Typography>
                    </Box>
                    <Box sx={{width:['95%','95%','45%'],height:['9rem','12rem','18rem','14rem','18rem'],backgroundColor:''}}>
                        <Typography sx={{fontSize:['1rem','1.5rem','1.5rem','1.5rem','2rem'],color:"#82C0CC",textAlign:['center','left']}}>Experience improved asset visibility, streamlined supply chain operations, and reduced downtime, resulting in a significant boost to operational efficiency. Witness your organization soar to new heights with Smart Asset Management by your side. </Typography>
                    </Box>
                   </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['auto', 'auto', '30rem', '30rem', '50rem'], display: 'flex', justifyContent: "center",backgroundColor:'black' }}>
                    <Box sx={{ width: ['85%', '80%'], display: 'flex', flexDirection: ['column', 'column', 'row'], gap: '1rem', alignItems: "center", justifyContent: 'center', backgroundColor: '' }}>
                        <Box sx={{ width: ['90%', '80%', '26%', '27%', '25%'], height: ['20rem', '27rem', '18rem', '21rem', '25rem'], backgroundColor: '#0D0D0D', borderRadius: "1rem", padding: '1.5rem', display: 'flex', flexDirection: 'column',gap:['2rem','2rem','1.5rem','2rem'] }}>
                            <Box sx={{ width: '100%', height: ['12rem', '15rem', '10rem', '12rem', '15rem'], backgroundColor: 'black', borderRadius: '1rem', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Box sx={{ width: '90%', height: ['8rem', '10rem', '7rem', '7rem', "10rem"], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: ['4rem', '5rem', '5rem', '4rem', '4rem'], display: 'flex', flexDirection: "column", justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'],fontWeight:'bold',color:'white' }}>REAL-TIME TRACKING</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem'] ,color:'white'}}>Monitoring assets on-the-go</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['90%', '80%', '26%', '27%', '25%'], height: ['20rem', '27rem', '18rem', '21rem', '25rem'], backgroundColor: '#0D0D0D', borderRadius: "1rem", padding: '1.5rem', display: 'flex', flexDirection: 'column',gap:['2rem','2rem','1.5rem','2rem'] }}>
                            <Box sx={{ width: '100%', height: ['12rem', '15rem', '10rem', '12rem', '15rem'], backgroundColor: 'black', borderRadius: '1rem', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Box sx={{ width: '90%', height: ['8rem', '10rem', '7rem', '7rem', "10rem"], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: ['4rem', '5rem', '5rem', '4rem', '4rem'], display: 'flex', flexDirection: "column", justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'],color:'white',fontWeight:'bold' }}>SMART SCHEDULING</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem'],color:'white' }}>Maximized maintenance efficiency</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['90%', '80%', '26%', '27%', '25%'], height: ['20rem', '27rem', '18rem', '21rem', '25rem'], backgroundColor: '#0D0D0D', borderRadius: "1rem", padding: '1.5rem', display: 'flex', flexDirection: 'column',gap:['2rem','2rem','1.5rem','2rem']}}>
                            <Box sx={{ width: '100%', height: ['12rem', '15rem', '10rem', '12rem', '15rem'], backgroundColor: 'black', borderRadius: '1rem', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Box sx={{ width: '90%', height: ['8rem', '10rem', '7rem', '7rem', "10rem"], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: ['4rem', '5rem', '5rem', '4rem', '4rem'], display: 'flex', flexDirection: "column", justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'],color:'white',fontWeight:'bold' }}>DATA-DRIVEN INSIGHTS</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem'],color:'white' }}>Optimize assets and costs</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:'100%',height:"30rem",backgroundColor:'#17697B'}}>
                 
                </Box>
                <Box sx={{ width: '100%', height: ['45rem', '65rem', '30rem', '50rem', '50rem'], position: 'relative',backgroundColor:"black" }}>
                    <Box sx={{ width: ['90%', '90%', '50%', '50%', '40%'], backgroundColor: '', display: 'flex', flexDirection: 'column', gap: ['1rem', '2rem', '2rem', '2rem'], position: 'absolute', top: ['40%', '45%', '10%', '8%', '15%'], left: ['5%', '5%', '5%', '5%', '10%'] }}>
                        <Typography sx={{ fontSize: ['2rem', '3rem', '2.5rem', '4rem'], fontWeight: 'bold', fontFamily: 'dynapuff',color:'white' }}>Industries We Empower</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontFamily: 'zilla-slab',color:'#82C0CC'  }}>Manufacturing: Seamlessly manage equipment and machinery in the production process, taking full advantage of real-time tracking and performance insights.</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontFamily: 'zilla-slab',color:'#82C0CC'  }}>Logistics and Transportation: Monitor and optimize the movement of goods and vehicles, improving asset management and reducing operational costs.</Typography>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1.5rem'], fontFamily: 'zilla-slab',color:'#82C0CC'  }}>Healthcare: Ensure medical equipment availability and superior patient care through comprehensive tracking and smart scheduling features of our solution.</Typography>
                    </Box>
                    <Box sx={{ width: ['100%', '100%', '50%', '50%'], height: ['15rem', '22rem', '20rem', '25rem'], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', top: ['5%', '5%', '15%', '25%'], right: ['0', '0', '0', '0'], backgroundColor: '' }}>

                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: ['auto', 'auto', '30rem', '30rem', '50rem'], display: 'flex', justifyContent: "center" }}>
                    <Box sx={{ width: ['85%', '80%'], display: 'flex', flexDirection: ['column', 'column', 'row'], gap: '1rem', alignItems: "center", justifyContent: 'center', backgroundColor: '' }}>
                        <Box sx={{ width: ['90%', '80%', '26%', '27%', '25%'], height: ['20rem', '27rem', '22rem', '21rem', '27rem'], backgroundColor: '#F3F3F2', borderRadius: "1rem", padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                            <Box sx={{ width: '100%', height: ['12rem', '15rem', '10rem', '12rem', '15rem'], backgroundColor: '#fff', borderRadius: '1rem', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Box sx={{ width: '90%', height: ['8rem', '10rem', '7rem', '7rem', "10rem"], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: ['7rem', '10rem', '10rem', '7rem', '10rem'], display: 'flex', flexDirection: "column", justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'] }}>Our asset utilization has skyrocketed and downtime reduced!</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem'] }}>Emma Johnson, Industrial Corp.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['90%', '80%', '26%', '27%', '25%'], height: ['20rem', '27rem', '22rem', '21rem', '27rem'], backgroundColor: '#F3F3F2', borderRadius: "1rem", padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                            <Box sx={{ width: '100%', height: ['12rem', '15rem', '10rem', '12rem', '15rem'], backgroundColor: '#fff', borderRadius: '1rem', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Box sx={{ width: '90%', height: ['8rem', '10rem', '7rem', '7rem', "10rem"], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: ['7rem', '10rem', '10rem', '7rem', '10rem'], display: 'flex', flexDirection: "column", justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'] }}>Smart Asset Management has transformed our operational efficiency.</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem'] }}>David Smith, LogisticsCo</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: ['90%', '80%', '26%', '27%', '25%'], height: ['20rem', '27rem', '22rem', '21rem', '27rem'], backgroundColor: '#F3F3F2', borderRadius: "1rem", padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                            <Box sx={{ width: '100%', height: ['12rem', '15rem', '10rem', '12rem', '15rem'], backgroundColor: '#fff', borderRadius: '1rem', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Box sx={{ width: '90%', height: ['8rem', '10rem', '7rem', '7rem', "10rem"], backgroundImage: 'url(/animation-img.png)', backgroundPosition: "center", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: ['7rem', '10rem', '10rem', '7rem', '10rem'], display: 'flex', flexDirection: "column", justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography sx={{ fontSize: ['1rem', '1.5rem', '1rem', '1rem', '1.5rem'] }}>Patient care has improved with better equipment availability.</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1rem', '1rem', '1rem'] }}>Dr. Amina Lee, Frontline Health</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: 'auto', backgroundColor: '#17697B', px: ['1rem', '2rem', '4rem', '6rem', '9rem'], py: ['1rem', '2rem', '4rem', '6rem', '9rem'], display: 'flex', flexDirection: 'column', gap: ['1.5rem', "2.5rem"] }}>
                    <Box sx={{ width: ['100%', '100%', '90%', '90%', '78%'] }}>
                        <Typography sx={{ fontSize: ['1.5rem', '2rem', '2.5rem', '3rem', '3.5rem'], fontFamily: 'unbounded', color: '#fff', fontWeight: 'bold' }}>READY TO WIELD THE POWER OF SMART ASSET MANAGEMENT FOR YOUR ORGANIZATION? DON’T WAIT, ACT NOW!</Typography>

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], gap: '1rem' }}>
                        <Button sx={{ width: 'auto', height: 'auto', backgroundColor: '#82C1CD', color: 'black', fontSize: ['1rem'] }}>Contact Us</Button>
                        <Button sx={{ width: 'auto', height: 'auto', backgroundColor: '#010100', color: 'white', fontSize: '1rem' }}>Learn More</Button>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'center', gap: ['1.5rem', '0'], alignItems: ['center', 'flex-start'], py: '3rem', backgroundColor: 'black' }}>
                    {
                        assetfooterdata.map((item) => (
                            <Box sx={{ width: ['70%', '25%'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '1rem'] }}>
                                <Typography sx={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>{item.title}</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <Typography sx={{ fontSize: '1rem', color: 'white', ':hover': { letterSpacing: '0.1rem' } }}>{item.con1}</Typography>
                                    <Typography sx={{ fontSize: '1rem', color: 'white', ':hover': { letterSpacing: '0.1rem' } }}>{item.con2}</Typography>
                                    <Typography sx={{ fontSize: '1rem', color: 'white', ':hover': { letterSpacing: '0.1rem' } }}>{item.con3}</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box sx={{ width: '100%', height: ['10rem', '15rem', '20rem', '20rem', "20rem"], display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: ['1rem', '1.5rem', '1.5rem', '2rem'],backgroundColor:'black' }}>
                    <Box sx={{ width: '60%', display: "flex", flexDirection: 'row', gap: ['0.5rem', '1rem'], justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <TwitterIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: 'white' }} />
                        </Box>
                        <Box>
                            <InstagramIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: 'white' }} />
                        </Box>
                        <Box>
                            <FacebookIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: 'white' }} />
                        </Box>
                        <Box>
                            <TryIcon sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'], color: 'white' }} />
                        </Box>
                    </Box>
                    <Box sx={{ width: ['90%', '90%', '60%'], display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: ['1rem', '1.5rem'], color: 'white', textAlign: 'center' }}>© 2023 Smart Asset Management, All rights reserved.</Typography>

                    </Box>
                </Box>


            </Box>
        </>
    )
}

export default asset