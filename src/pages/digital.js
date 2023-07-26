import { Box, Typography } from '@mui/material'
import React from 'react'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { digitalfooterdata } from '../uitilis/data';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TryIcon from '@mui/icons-material/Try';
import FacebookIcon from '@mui/icons-material/Facebook';
// import Form from '../components/mui/textfield'

function digital() {
  return (
    <>

      <Box sx={{ backgroundColor: '#0C3A66' }}>
        <Box sx={{ width: '100%', height: ['45rem', '60rem', '70rem', '90rem', '120rem'], backgroundColor: "#EE964B", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Box>
            <Typography sx={{ fontSize: ['3rem', '5rem', '8rem', '10rem', "13rem"], fontWeight: "bold", backgroundColor: '' }}>EXCELLENCE</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: ['9rem', '12rem', '15rem', '18rem', '35rem'], color: '#0D3B66', lineHeight: ['10rem', '13rem', '15rem', '18rem', "35rem"] }}>2023</Typography>
          </Box>
          <Box sx={{ width: ['90%', '95%'], height: ['20rem', '30rem', '30rem', '50rem'], backgroundImage: 'url(/digital-bg1.jpg)', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: "1rem" }}>

          </Box>
        </Box>
        <Box sx={{ width: '100%', height: ['15rem', '27rem', '30rem', '40rem', '50rem'], backgroundColor: '#FAF0CA', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: '80%' }}>
            <Typography sx={{ fontSize: ['1rem', '2rem', '2.5rem', '3rem', '4rem'], fontFamily: "old-standard-tt", textAlign: 'center', color: "#0D3B66" }}>Welcome to Digital Manufacturing Excellence, where we revolutionize manufacturing processes to help you achieve unsurpassed performance. Explore our cutting-edge solution that streamlines production, enhances quality control, and elevates supply chain management – all for manufacturing domination.</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: ['20rem', '20rem', '25rem', '25rem', "30rem"], display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: ['1.5rem', '2rem', '3rem'] }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: ['90%', '40%', '30%', '25%', "18%"], height: ['4rem', '5rem', '5rem', '5rem', '6rem'], backgroundColor: '#EE964B', borderRadius: "5rem", display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
              <Box>
                <AutoGraphIcon sx={{ width: '2rem', height: '2rem', color: '#0D3B66' }} />
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "old-standard-tt", color: "#0D3B66", fontSize: "2rem" }}>Key Features</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'space-around', alignItems: ['center', 'flex-start'], gap: ['1.5rem', '0'] }}>
            <Box sx={{ width: ['90%', '40%', '30%', '25%', "18%"], height: ['4rem', '5rem', '5rem', '5rem', '6rem'], backgroundColor: '#EE964B', borderRadius: "5rem", display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
              <Box>
                <CheckCircleIcon sx={{ width: '2rem', height: '2rem', color: '#0D3B66' }} />
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "old-standard-tt", color: "#0D3B66", fontSize: "2rem" }}>Benefits</Typography>
              </Box>
            </Box>
            <Box sx={{ width: ['90%', '40%', '30%', '25%', "18%"], height: ['4rem', '5rem', '5rem', '5rem', '6rem'], backgroundColor: '#EE964B', borderRadius: "5rem", display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
              <Box>
                <LightbulbIcon sx={{ width: '2rem', height: '2rem', color: '#0D3B66' }} />
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "old-standard-tt", color: "#0D3B66", fontSize: "2rem" }}>Use Cases</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '95%', height: ['20rem', '30rem', '35rem', '40rem', '60rem'], backgroundImage: 'url(/digital-bg2.webp)', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: "1rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ width: ['90%', '90%', '70%'], fontSize: ['1.5rem', '2.5rem', '3rem', '4rem', '6rem'], color: '#EE964B', fontFamily: 'unica-one', textAlign: 'center' }}>TRANSFORM YOUR MANUFACTURING WORLD.</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: ['15rem', '30rem', '30rem', '35rem', '50rem'], backgroundColor: '', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: ['90%', '90%', '90%', '80%'] }}>
            <Typography sx={{ fontSize: ['1rem', '2rem', '2.5rem', '3rem', '4rem'], fontFamily: "old-standard-tt", textAlign: 'center', color: "#fff" }}>Our primary features include real-time production monitoring, automated quality control and defect detection, supply chain optimization, predictive maintenance for machinery, and advanced analytics and reporting. Empower your manufacturing business with these innovative capabilities and soar to new heights.</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: ['15rem', '30rem', '30rem', '35rem', '50rem'], backgroundColor: '', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: ['90%', '90%', '90%', '80%'] }}>
            <Typography sx={{ fontSize: ['1rem', '2rem', '2.5rem', '3rem', '4rem'], fontFamily: "old-standard-tt", textAlign: 'center', color: "#fff" }}>With Digital Manufacturing Excellence, enjoy streamlined production processes, enhanced quality control, optimized supply chain management, increased machine uptime, and data-driven decision-making. It’s time to unleash your ultimate manufacturing potential!</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', gap: '2rem', backgroundColor: '', py: ['2rem', '5rem'] }}>
          <Box sx={{ width: ['100%', '80%', '90%', '90%', '70%'], gap: '2rem', display: 'flex', flexWrap: 'wrap', backgroundColor: '', justifyContent: 'center' }}>
            <Box sx={{ width: ['90%', '90%', '45%', '40%', '45%'], height: ['15rem', '25rem', '25rem', '25rem', '30rem'], backgroundImage: 'url(/digital-img1.webp)', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: "1rem" }}>

            </Box>
            <Box sx={{ width: ['90%', '90%', '45%', '40%', '45%'], height: ['15rem', '25rem', '25rem', '25rem', '30rem'], backgroundImage: 'url(/digital-img2.webp)', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: "1rem" }}>

            </Box>
            <Box sx={{ width: ['90%', '90%', '45%', '40%', '45%'], height: ['15rem', '25rem', '25rem', '25rem', '30rem'], backgroundImage: 'url(/digital-img3.webp)', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: "1rem" }}>

            </Box>
            <Box sx={{ width: ['90%', '90%', '45%', '40%', '45%'], height: ['15rem', '25rem', '25rem', '25rem', '30rem'], backgroundImage: 'url(/digital-img4.webp)', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: "1rem" }}>

            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '95%', height: ['20rem', '30rem', '35rem', '40rem', '60rem'], backgroundImage: 'url(/digital-bg3.jpg)', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: "1rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ width: ['90%', '90%', '70%'], fontSize: ['1.5rem', '2.5rem', '3rem', '4rem', '6rem'], color: '#EE964B', fontFamily: 'unica-one', textAlign: 'center' }}>EXPERIENCE LIMITLESS INNOVATION.</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: ['13rem', '25rem', '30rem', '40rem', '50rem'], backgroundColor: '', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: ['90%', '90%', '90%', '90%', '80%'] }}>
            <Typography sx={{ fontSize: ['1rem', '2rem', '2.5rem', '3rem', '4rem'], fontFamily: "old-standard-tt", textAlign: 'center', color: "#F4D35E" }}>Our solution has been successful across industries, from automotive manufacturing to consumer electronics, pharmaceutical, food & beverage, aerospace, and defense. Unlock unprecedented levels of efficiency and control in your manufacturing operations with our game-changing technology.</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: ['13rem', '25rem', '30rem', '40rem', '50rem'], backgroundColor: '', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: ['90%', '90%', '90%', '90%', '80%'] }}>
            <Typography sx={{ fontSize: ['1rem', '2rem', '2.5rem', '3rem', '4rem'], fontFamily: "old-standard-tt", textAlign: 'center', color: "#F4D35E" }}>Our implementation process includes thorough analysis and assessment, solution customization, seamless installation and integration, comprehensive user training, and ongoing support. We will be with you every step of the way towards digital manufacturing greatness.</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '95%', height: ['20rem', '30rem', '35rem', '40rem', '60rem'], backgroundImage: 'url(/digital-bg3.jpg)', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: "1rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ width: ['90%', '50%', '50%', '50%', '50%'], fontSize: ['1.5rem', '2rem', '3rem', '4rem', '6rem'], color: '#EE964B', fontFamily: 'unica-one', textAlign: 'center' }}>JOIN THE REVOLUTION NOW.</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: ['10rem', '25rem', '30rem', '30rem', '50rem'], backgroundColor: '', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: ['90%', '90%', '90%', '90%', '80%'] }}>
            <Typography sx={{ fontSize: ['1rem', '2rem', '2.5rem', '3rem', '4rem'], fontFamily: "old-standard-tt", textAlign: 'center', color: "#EE964B" }}>Hear from our satisfied customers who have transformed their manufacturing processes with our Digital Manufacturing Excellence solution — unlocking efficiencies and driving industry-leading outcomes.</Typography>
          </Box>
        </Box>


        {/* <Box>
          <Form/>
        </Box> */}
        {/* <Box sx={{width:"100%"}}>
          <Box sx={{width:"30%"}}>

          </Box>
       </Box> */}
        <Box sx={{ width: '100%', height: ['auto', '15rem', '20rem', '20rem', '15rem'] }}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'center', gap: ['1.5rem', '0'], alignItems: ['center', 'flex-start'], py: '3rem' }}>
            {
              digitalfooterdata.map((item) => (
                <Box sx={{ width: ['70%', '25%'], display: 'flex', flexDirection: 'column', gap: ['0.5rem', '1rem'] }}>
                  <Typography sx={{ fontSize: '1.5rem', color: '#F4D35E', fontWeight: 'bold' }}>{item.title}</Typography>
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






        <Box sx={{ width: '100%', height: ['10rem', '15rem', '20rem', '20rem', "20rem"], display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: ['1rem', '1.5rem', '1.5rem', '2rem'] }}>
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
            <Typography sx={{ fontSize: ['1rem', '1.5rem'], color: 'white', textAlign: 'center' }}>©2023 Digital Manufacturing Excellence. All rights reserved.</Typography>

          </Box>
        </Box>

      </Box>


    </>
  )
}

export default digital



// 9171175115,pv