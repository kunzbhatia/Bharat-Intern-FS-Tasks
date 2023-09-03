import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://i.ibb.co/DppH1ZW/Home.png);
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: rgb(0,0,0);
    background:rgb(255,255,255)
    line-height: 1
`;


const Banner = () => {
    
    return (
        <Image>
            
        </Image>
    )
}

export default Banner;
