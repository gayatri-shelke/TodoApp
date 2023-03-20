import React from 'react';


import { Grid,Typography} from '@mui/material';
import StudyCard from './StudyCard';
import WorkCard from './WorkCard';
import HobbyCard from './HobbyCard';
import HomeCard from './HomeCard'
import TravelCard from './TravelCard'
import ClothesCard from './ClothesCard'
// import Toolbar from '@mui/material/Toolbar';

const ThreeCards = () => {

  
  return (
   <>
         <Typography variant="h4"  textAlign='center' sx={{marginTop: 10, marginBottom: 10,fontWeight: 'bold'}}>
            ADD YOUR TODO LIST
          </Typography>
    <Grid container spacing={5}  sx={{ paddingLeft: 20, paddingRight: 20, marginTop: 20, marginBottom: 20  }} >
    
      <Grid item xs={12} sm={4}>
      <StudyCard />

      </Grid>
      <Grid item xs={12} sm={4}>
      <WorkCard />

      </Grid>
      <Grid item xs={12} sm={4}>
      <HobbyCard/>
     
      </Grid>
      </Grid>
      <Grid container spacing={6} sx={{ paddingLeft: 20, paddingRight: 20, marginTop: 30, marginBottom: 30  }}>
      <Grid item xs={12} sm={4}>
      <HomeCard />

      </Grid>
      <Grid item xs={12} sm={4}>
      <TravelCard/>
    

      </Grid>
      <Grid item xs={12} sm={4}>
      <ClothesCard/>

      </Grid>
    </Grid>
    </>
  );
};

export default ThreeCards;
















