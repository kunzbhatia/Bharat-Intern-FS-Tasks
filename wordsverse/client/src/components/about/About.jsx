import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://i.ibb.co/89Gn5gk/about.png);
    width: 100%;
    height: 100vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Wordswerse</Typography>
                <Text variant="h5">Welcome to WordsVerse, a captivating online platform where stories transform into captivating verses, minds connect through shared experiences, and moments unfold in a tapestry of words. Built using the cutting-edge MERN (MongoDB, Express, React, Node.js) stack, our website offers a seamless and immersive reading experience like no other.
<br />
                    If you are interested, you can view some of my other projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunzbhatia" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/_kunalbhatia_/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:kunalbhatiaofficial@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;
