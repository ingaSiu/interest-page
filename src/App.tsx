import { Box, Button, IconButton, Typography } from '@mui/material';

import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const App = () => {
  return (
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
  );
};

export default App;

