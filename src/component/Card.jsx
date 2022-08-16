import './card.css';
import { Text } from '@chakra-ui/react';
  export const Card = ({name, fork, lang, star}) => {
    return (
        <div className="mainDiv">
            <div className='subDiv'>
            
            
            <div>
                <img  src="https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg" alt="" width='360px' height='250px' />
            </div>
            <div style={{width: "100%", height: "100px", fontSize: "25px"}}>
               <h2>{name}</h2>
            </div>
            <div style={{width: "100%", height: "50px"}}>
                {lang}
            </div> 
            <br />
            <div className='starFork'>
                <Text as='h4'>
                    {star}
                </Text>
                <Text as='h5'>
                    {fork}
                </Text>
            </div>
            </div>
        </div>
    );
  }