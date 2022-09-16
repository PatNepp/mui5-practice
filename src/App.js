import Sidebar from './components/Sidebar'
import Feed from './components/Feed';
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import { Box, Stack } from '@mui/material';
import Add from './components/Add';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack> 
      <Add />
    </Box>
  );
}

export default App;
