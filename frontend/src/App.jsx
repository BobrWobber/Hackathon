import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Chatbot from './pages/Chatbot'
import HomePage from './pages/HomePage'
// import Navbar from './components/ui/Navbar'



const App = () => {
  return (
    <Box minH="100vh">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Box>
  )
}

export default App;