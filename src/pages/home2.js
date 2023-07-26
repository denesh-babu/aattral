import { Box, Button,Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TryIcon from '@mui/icons-material/Try';

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
                <Box sx={{ width: '100%', height: ['auto', 'auto', 'auto', 'auto'],backgroundColor: '#0B1829', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: ['2rem', '1rem', '2rem'], flexWrap: 'wrap',py:['2rem']}}>
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
               
                <Box sx={{width:'auto',height:'auto',backgroundColor:'#050c14',py:['1rem','2rem','3rem','4rem','10rem'],px:['1rem','2rem','3rem','5rem','15rem'],display:'flex',flexDirection:'column',gap:'1rem'}}>
                   <Typography sx={{fontSize:['2rem','3rem','3rem','4rem'],fontWeight:'bold',color:'white'}}>Experience Unbeatable Benefits</Typography>
                   <Typography sx={{fontSize:['1.5rem','1.5rem','1.5rem','1.5rem'],width:['80%','60%'],color:'white'}}>Say goodbye to unexpected downtime and costly breakdowns.</Typography>
                   <Box sx={{display:'flex',flexDirection:['column','row'],gap:'2rem'}}>
                    <Box>
                    <Typography sx={{fontSize:['1.5rem','2rem','2rem','3rem'],fontWeight:'bold',color:'white'}}>1</Typography>
                    <Typography sx={{fontSize:['1rem','1.5rem','1.5rem','1.5rem'],color:'white'}}>Reduced Downtime</Typography>
                   </Box>
                   <Box>
                    <Typography sx={{fontSize:['1.5rem','2rem','2rem','3rem'],fontWeight:'bold',color:'white'}}>2</Typography>
                    <Typography sx={{fontSize:['1rem','1.5rem','1.5rem','1.5rem'],color:'white'}}>Longer Lifespan</Typography>
                   </Box>
                   <Box>
                    <Typography sx={{fontSize:['1.5rem','2rem','2rem','3rem'],fontWeight:'bold',color:'white'}}>3</Typography>
                    <Typography sx={{fontSize:['1rem','1.5rem','1.5rem','1.5rem'],color:'white'}}>Optimized Costs</Typography>
                   </Box>
                   </Box>
                </Box>
             
                <Box sx={{width:'100%',height:['37rem','55rem','30rem','35rem'],display:'flex',flexDirection:['column-reverse','column-reverse','row'],justifyContent:'center',alignItems:'center',gap:['1rem','1rem','3rem']}}>
                  <Box sx={{width:['90%','90%','35%'],display:'flex',flexDirection:'column',gap:['0.5rem','1rem','1rem']}}>
                   <Typography sx={{fontSize:['1.5rem','2.5rem','2rem','2.5rem'],fontWeight:'bold',fontFamily:'limelight',color:'white'}}>Revolutionizing Industries with Customized Solutions</Typography>
                   <Typography sx={{fontSize:['1rem','1.5rem','1rem','1.5rem'],width:['95%','90%'],color:'white'}}>From manufacturing to healthcare, transportation to energy, our Smart Predictive Maintenance System caters to diverse industries, ensuring seamless operations and optimized asset management.</Typography>
                  </Box>
                  <Box sx={{width:['90%','90%','35%'],height:['20rem','30rem','25rem','30rem'],backgroundImage:'url(/home2-sec1.webp)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',borderRadius:'1.5rem'}}>

                  </Box>
                </Box>
                <Box sx={{width:'100%',height:['auto','52rem','30rem','35rem'],display:'flex',flexDirection:['column','column','row'],justifyContent:'center',alignItems:'center',gap:['1rem','1rem','3rem']}}>
                 <Box sx={{width:['90%','90%','35%'],height:['20rem','30rem','25rem','30rem'],backgroundImage:'url(/home2-sec2.webp)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',borderRadius:'1.5rem'}}>

                 </Box>
                  <Box sx={{width:['90%','90%','35%'],display:'flex',flexDirection:'column',gap:['0.5rem','1rem']}}>
                   <Typography sx={{fontSize:['1.5rem','2.5rem','2rem','2.5rem'],fontWeight:'bold',fontFamily:'limelight',color:'white'}}>Effortless Implementation & Unparalleled Support</Typography>
                   <Typography sx={{fontSize:['1rem','1.5rem','1rem','1.5rem'],width:['95%','90%'],color:'white'}}>Our team of experts will guide you through every step of the process, from assessment to integration, providing comprehensive training and ongoing support for peak performance.</Typography>
                  </Box>
                 
                </Box>
                <Box sx={{width:"100%",height:['55rem','45rem','40rem','45rem'],backgroundColor:'#202C39',display:'flex',flexDirection:['column','column','row'],justifyContent:'center',alignItems:'center',gap:['2rem','2rem','2rem','3rem','4rem']}}>
                  <Box sx={{width:['90%','70%','40%','35%','28%'],height:['25rem','20rem','25rem','30rem'],borderRadius:'1rem',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column",gap:'2rem',backgroundColor:'#0B1829'}}>
                      <Typography sx={{color:'#F3D592',width:'85%',fontSize:'1.5rem',fontFamily:'libre baskerville',textAlign:'center'}}>The Smart Predictive Maintenance System has transformed our maintenance practices and significantly boosted our productivity.</Typography>
                      <Typography sx={{fontSize:"1rem",fontFamily:'libre baskerville',fontWeight:'bold',color:'white'}}>TechCorp</Typography>
                  </Box>
                  <Box sx={{width:['90%','70%','40%','35%','28%'],height:['25rem','20rem','25rem','30rem'],borderRadius:'1rem',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column",gap:'2rem',backgroundColor:'#0B1829'}}>
                    <Typography sx={{color:'#F3D592',width:'85%',fontSize:'1.5rem',fontFamily:'libre baskerville',textAlign:'center'}}>This system has not only improved our operations but has also saved us both time and resources.</Typography>
                    <Typography sx={{fontSize:"1rem",fontFamily:'libre baskerville',fontWeight:'bold',color:'white'}}>HealthPlus</Typography>
                  </Box>
                </Box>
                <Box sx={{width:"100%",height:['20rem','23rem','25rem','23rem','30rem'],display:'flex',justifyContent:'center',alignItems:'center', backgroundColor: '#050c14'}}>
                    <Box sx={{width:['90%','90%','80%','80%','40%'],height:['20rem','17rem','20rem','20rem','25rem'],display:'flex',flexDirection:'column',alignItems:'center',gap:['1rem','1rem','1rem','1.5rem','2rem']}}>
                       <Typography sx={{fontSize:['2rem','3rem',"4rem"],fontFamily:'limelight',color:'white'}}>Let's Talk</Typography>
                       <Typography sx={{fontSize:['1rem','1.5rem','1.5rem'],fontFamily:'libre baskerville',width:['90%','90%','70%'],textAlign:'center',color:'lightgray'}}>Ready to explore how our Smart Predictive Maintenance System can elevate your organization's maintenance practices? Get in touch with our experts now and schedule a consultation.</Typography>
                       <Box sx={{display:'flex',flexDirection:['column','row','row'],gap:'1rem'}}>
                        <Button sx={{backgroundColor:'#202C39',color:'white',':hover':{backgroundColor:'#374c62'}}}>Contact Us</Button>
                        <Button sx={{backgroundColor:'#000101',color:'#F3D592',':hover':{backgroundColor:'#262626'}}}>Schedule Consultation</Button>
                       </Box>
                    </Box>
                </Box>
                <Box sx={{width:'100%',height:['10rem','15rem','20rem','20rem',"25rem"],display:"flex",flexDirection:'column',justifyContent:"center",alignItems:'center',gap:['1rem','1.5rem','1.5rem','2rem']}}>
                   <Box sx={{width:'60%',display:"flex",flexDirection:'row',gap:['0.5rem','1rem'],justifyContent:'center',alignItems:'center'}}>
                      <Box>
                        <TwitterIcon sx={{width:['1.5rem','2rem'],height:['1.5rem','2rem'],color:'#F3D592'}}/>
                      </Box>
                      <Box>
                        <InstagramIcon sx={{width:['1.5rem','2rem'],height:['1.5rem','2rem'],color:'#F3D592'}}/>
                      </Box>
                      <Box>
                        <TryIcon sx={{width:['1.5rem','2rem'],height:['1.5rem','2rem'],color:'#F3D592'}}/>
                      </Box>
                   </Box>
                   <Box sx={{width:['90%','90%','60%'],display:"flex",flexDirection:'column',alignItems:'center'}}>
                    <Typography sx={{fontSize:['1rem','1.5rem'],color:'#F3D592'}}>©️ 2023 - Smart Predictive Maintenance System</Typography>
                    <Typography sx={{fontSize:['1rem','1.5rem'],color:'#F3D592'}}>Generated on July 11, 2023</Typography>
                   </Box>
                </Box>
                
            </Box>
        </>
    )
}

export default home2
