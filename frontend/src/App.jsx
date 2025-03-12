import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
// import Navbar from './components/ui/Navbar'



const App = () => {
  return (
    <Box minH="100vh">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/secondpage" element={<SeconPage />} /> */}
      </Routes>
    </Box>
  )
}

export default App;