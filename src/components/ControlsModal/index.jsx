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
import "pages/style.css"

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundImage: "url('/assets/YummCloud/ControlsModal/modal_layout.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    minWidth: '835px',
    height: '600px',
    color: 'white',
    borderRadius: '35px'
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
          {/* <CloseIcon /> */}
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
      // fullWidth={true}
      // maxWidth="sm"
      className="controls_modal_dialog"
    >
      <DialogTitle id="responsive-dialog-title" onClose={closeControlsModal}>
        {/* <Typography fontSize={18} fontWeight={700} fontFamily="'Montserrat', sans-serif" textTransform="uppercase" textAlign="center">
          Account
        </Typography> */}
      </DialogTitle>

      <DialogContent>
        <div class="w-3/5 m-auto">
          <div className='controls_modal_title flex justify-center py-20'>
            <img src="/assets/YummCloud/ControlsModal/modal_title.png" alt="controls-modal-title" />
          </div>

          <div className="controls_modal_text">
            Use the Cursor wheel to navigate the character in all direction. Adjust the cursor sensitivity to your personal preference.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}