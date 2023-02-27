import { Container, Box, Button,Avatar } from "@mui/material/";
import profile from '/nuevo.jpeg'
const QRINFO = () => {
  return (
    <div
      style={{
        overflow:'hidden',
        height:'100vh',
        background: "rgb(148,63,251)",
        backgroundImage:
          "linear-gradient(184deg, rgba(148,63,251,1) 5%, rgba(252,70,172,1) 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Box display="flex"  alignItems="center" height="100vh" flexDirection='column' marginBottom={40} >
          <Avatar alt="avatar"  src={profile} sx={{height:'100px',width:'100px',marginTop:6,marginBottom:6}} />
          <Button variant="contained"sx={{width:'100%',height:50,marginBottom:2 ,bgcolor:'white',color:'black'}} >
            Contained
          </Button>
          <Button variant="contained" sx={{width:'100%',marginBottom:2}}>
            Contained
          </Button>
          <Button variant="contained" sx={{width:'100%',marginBottom:2}}>
            Contained
          </Button>
          <Button variant="contained" sx={{width:'100%',marginBottom:2}}>
            Contained
          </Button>
          <Button variant="contained" sx={{width:'100%',marginBottom:2}}>
            Contained
          </Button>
        </Box>
      </Container>
    </div>
  );
};
export default QRINFO;
