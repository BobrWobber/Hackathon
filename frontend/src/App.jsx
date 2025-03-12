import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Chatbot from './chatbot/Chatbot'
import HomePage from './pages/HomePage'
// import Navbar from './components/ui/Navbar'



const App = () => {
  return (
    <Box minH="100vh">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Chatbot />} />
        <Route path="/secondpage" element={<HomePage />} />
      </Routes>
    </Box>
  )
}

export default App;