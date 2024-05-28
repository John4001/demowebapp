import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';
import { CardMedia } from '@mui/material';
import avatar from 'assets/images/users/avatar-group.png';

const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

export default function TopPatterns({ color = 'primary', title, icon, desc }) {
  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Stack spacing={0.5}>
        <CardMedia component="img" image={icon ? icon : avatar} sx={{ width: 50 }} />

        <Typography variant="h5" color="inherit">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {desc}
        </Typography>
      </Stack>
    </MainCard>
  );
}

TopPatterns.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string
};
