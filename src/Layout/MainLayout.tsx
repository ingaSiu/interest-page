import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import Topbar from '../components/Topbar/Topbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <Topbar />

      <Box p={4}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
