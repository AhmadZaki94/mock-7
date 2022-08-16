import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <Box border={'1px solid black'} display='flex' gap={5} justifyContent='space-around' h='60px' p='5px' >
            <Link to='/'>
                <Heading>All</Heading>
            </Link>
            <Link to='/html'>
                <Heading>Html</Heading>
            </Link>
            <Link to='/css'>
                <Heading>Css</Heading>
            </Link>
            <Link to='/javascript'>
                <Heading>JavaScript</Heading>
            </Link>

        </Box>
    )
}