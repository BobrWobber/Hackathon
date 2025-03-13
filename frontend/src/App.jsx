import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'



const App = () => {
  return (
    <Box minH="100vh">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Box>
  )
}

export default App;