import React from 'react';
import Spacer from '../atomic/atoms/Spcaer/Spacer.component';
import NotFound from '../atomic/molecules/NotFound/NotFound.component';

const custom404: React.FC = () => {
  return (
    <Spacer top='md' bottom='md' left='lg' right='lg'>
      <NotFound />
    </Spacer>
  );
};

export default custom404;
