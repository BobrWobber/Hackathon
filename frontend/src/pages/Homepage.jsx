import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ColorModeButton } from "../components/ui/color-mode"
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

export default function HomePage() {
  return (
    <Container maxW="container.xl" centerContent>
      <Box position="absolute" top={5} right={5}>
        <ColorModeButton />
      </Box>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        textAlign="center"
        py={20}
      >
        <Heading size="2xl" mb={4}>
          Welcome to Our Project
        </Heading>
        <Text fontSize="xl" maxW="600px" mb={6}>
          Discover how our innovative solution can make an impact. Join us on this journey!
        </Text>
        <Link to={"/"}>
          <Button bg="orange.300" size="x1">
            Go to ChatBot
          </Button>
        </Link>
      </MotionBox>
    </Container>
  );
}
