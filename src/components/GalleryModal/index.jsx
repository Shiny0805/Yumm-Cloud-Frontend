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
import useGallery from 'hooks/useGallery';
import "pages/style.css"

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundImage: "url('/assets/YummCloud/GalleryModal/modal_layout.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    minWidth: '939.4px',
    height: '675.04px',
    borderRadius: '35px',
    boxShadow: '8px 10px 6px 0px #00000040'
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

export default function GalleryModal() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { modalIsOpened, closeGalleryModal } = useGallery();

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modalIsOpened}
      onClose={closeGalleryModal}
      aria-labelledby="responsive-dialog-title"
      // fullWidth={true}
      // maxWidth="sm"
      className="controls_modal_dialog relative"
    >
      <DialogTitle id="responsive-dialog-title" onClose={closeGalleryModal}>
        {/* <Typography fontSize={18} fontWeight={700} fontFamily="'Montserrat', sans-serif" textTransform="uppercase" textAlign="center">
          Account
        </Typography> */}
        <div class="absolute right-[66.5px] top-[51px] cursor-pointer" onClick={closeGalleryModal}>
          <img src="/assets/YummCloud/ControlsModal/x.png" alt="x" />
        </div>
      </DialogTitle>

      <DialogContent>
        <div class="w-3/5 m-auto">
          <div className='controls_modal_title flex justify-center py-20'>
            <img src="/assets/YummCloud/ControlsModal/modal_title.png" alt="controls-modal-title" />
          </div>

          {/* <div className="controls_modal_text">
            Use the Cursor wheel to navigate the character in all direction. Adjust the cursor sensitivity to your personal preference.
          </div> */}

          <div className="controls_modal_content">
            <div>
              <img src="/assets/YummCloud/ControlsModal/modal_content.png" alt="controls_modal_content" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}