
import './App.css';
import Course from './Course';

import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import KompleWeb from './images/kompleweb.jpg'



function App() {
  return (
    <div className="App">

<AppBar>

<Toolbar sx={{fontSize:30}}>MERHABA DÜNYA</Toolbar>
</AppBar>

<Container maxWidth="lg">

<Grid container spacing={2} sx={{marginTop:10}}>
<Grid item xs={12} md={6} lg={3}>
<Course
image={Angular}
title = "Angular"
description  ="lorem textlorem textlorem textlorem textlorem text" 


/>
</Grid>
<Grid item xs={12} md={6} lg={3}>
<Course
image={Ccsharp}
title = "Ccsharp"
description  ="lorem textlorem textlorem textlorem textlorem text" 


/>

</Grid>
<Grid item xs={12} md={6} lg={3}>
<Course
image={Bootstrap}
title = "Bootstrap"
description  ="lorem textlorem textlorem textlorem textlorem text" 


/>

</Grid>
<Grid item xs={12} md={6} lg={3}>
<Course
image={KompleWeb}
title = "KompleWeb"
description  ="lorem textlorem textlorem textlorem textlorem text" 


/>

</Grid>
</Grid>
</Container>
</div>
)
      
 
     
 
}

export default App;
