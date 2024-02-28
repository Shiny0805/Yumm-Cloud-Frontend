import React from 'react';
import {
  Dialog as MuiDialog,
  DialogContent,
  DialogTitle as MuiDialogTitle,
  useMediaQuery,
  styled,
  IconButton,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import useControls from 'hooks/useControls';

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgrounImage: `url('/public/assets/YummCloud/ControlsModal/modal_layout.png')`,
  }
}));

const DialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <MuiDialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

/* ---------------------------------------------------------------------------------------- */

export default function ControlsModal() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { modalIsOpened, closeControlsModal } = useControls();

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modalIsOpened}
      onClose={closeControlsModal}
      aria-labelledby="responsive-dialog-title"
      fullWidth={true}
      maxWidth="sm"
      sx={{ backgrounImage: `url('/public/assets/YummCloud/ControlsModal/modal_layout.png')` }}
    >
      <DialogTitle id="responsive-dialog-title" onClose={closeControlsModal}>
        <Typography fontSize={18} fontWeight={700} fontFamily="'Montserrat', sans-serif" textTransform="uppercase" textAlign="center">
          Account
        </Typography>
      </DialogTitle>

      <DialogContent>
        <div>
          control modal
        </div>
      </DialogContent>
    </Dialog>
  );
}