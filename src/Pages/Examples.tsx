import { Box, Button, IconButton, Typography } from '@mui/material';

import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { data } from '../Data/data';
import styled from 'styled-components';

type Props = {};

const Examples = (props: Props) => {
  return (
    <>
      <div>
        <Button>Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined" onClick={() => alert('Hello')}>
          Outlined
        </Button>
        <hr />
        <Button color="secondary">Text</Button>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="outlined" color="warning" onClick={() => alert('Hello')}>
          Outlined
        </Button>
        <hr />
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <hr />
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <hr />
        <Typography>Inga</Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Inga
        </Typography>
        <Typography variant="body2">Inga</Typography>
        <Typography variant="h1">Inga</Typography>
        <Typography variant="subtitle2">Inga</Typography>
        <Typography color="textSecondary">Inga</Typography>
        <br />
        {/* viskas kas 8px slenkasi */}
        <Box padding={1} sx={(theme) => ({ border: `1px solid ${theme.palette.primary.main}` })}>
          Inga
        </Box>
      </div>

      <TableWrapper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Hobby</TableCell>
                <TableCell align="center">Animal</TableCell>
                <TableCell align="center">User ID</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="center">{item.hobby}</TableCell>
                  <TableCell align="center">{item.animal}</TableCell>
                  <TableCell align="center">{item.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </>
  );
};

export default Examples;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 800px;
  margin-top: 12px;
`;
