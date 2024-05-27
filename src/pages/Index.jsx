import { Box, Container, VStack, Text, Image, Input, Button, HStack, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.700" color="white" p={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">TravelBooking</Heading>
          <HStack spacing={8}>
            <Text cursor="pointer">Home</Text>
            <Text cursor="pointer">Destinations</Text>
            <Text cursor="pointer">Bookings</Text>
            <Text cursor="pointer">Contact Us</Text>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        as="section"
        bgImage="url('/images/hero-background.jpg')"
        bgSize="cover"
        bgPosition="center"
        color="white"
        py={20}
        textAlign="center"
      >
        <Container maxW="container.md">
          <VStack spacing={4}>
            <Heading as="h2" size="2xl">Discover Your Next Adventure</Heading>
            <Text fontSize="lg">Find the best deals on flights, hotels, and car rentals</Text>
            <HStack spacing={4} mt={8} w="100%">
              <Input placeholder="Search flights" bg="white" color="black" />
              <Input placeholder="Search hotels" bg="white" color="black" />
              <Input placeholder="Search car rentals" bg="white" color="black" />
              <Button colorScheme="teal">Search</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Featured Destinations */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Featured Destinations</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="gray.100" p={6} borderRadius="md">
              <Image src="/images/destination1.jpg" alt="Destination 1" borderRadius="md" mb={4} />
              <Heading as="h4" size="md">Destination 1</Heading>
              <Text mt={2}>Description of Destination 1</Text>
            </Box>
            <Box bg="gray.100" p={6} borderRadius="md">
              <Image src="/images/destination2.jpg" alt="Destination 2" borderRadius="md" mb={4} />
              <Heading as="h4" size="md">Destination 2</Heading>
              <Text mt={2}>Description of Destination 2</Text>
            </Box>
            <Box bg="gray.100" p={6} borderRadius="md">
              <Image src="/images/destination3.jpg" alt="Destination 3" borderRadius="md" mb={4} />
              <Heading as="h4" size="md">Destination 3</Heading>
              <Text mt={2}>Description of Destination 3</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Special Offers */}
      <Box as="section" bg="blue.50" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Special Offers</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h4" size="md">Offer 1</Heading>
              <Text mt={2}>Details of Offer 1</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h4" size="md">Offer 2</Heading>
              <Text mt={2}>Details of Offer 2</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h4" size="md">Offer 3</Heading>
              <Text mt={2}>Details of Offer 3</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Customer Reviews */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Customer Reviews</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="gray.100" p={6} borderRadius="md">
              <Text>"Review 1"</Text>
              <Text mt={2} fontWeight="bold">- Customer 1</Text>
            </Box>
            <Box bg="gray.100" p={6} borderRadius="md">
              <Text>"Review 2"</Text>
              <Text mt={2} fontWeight="bold">- Customer 2</Text>
            </Box>
            <Box bg="gray.100" p={6} borderRadius="md">
              <Text>"Review 3"</Text>
              <Text mt={2} fontWeight="bold">- Customer 3</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.700" color="white" py={10}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 TravelBooking. All rights reserved.</Text>
          <HStack spacing={4}>
            <FaFacebook cursor="pointer" />
            <FaTwitter cursor="pointer" />
            <FaInstagram cursor="pointer" />
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;