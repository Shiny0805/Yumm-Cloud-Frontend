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
    backgroundSize: 'auto',
    minWidth: '939.4px',
    height: '675.04px',
    borderRadius: '50px',
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

  const divsArray = new Array(18).fill(null);

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


      </DialogTitle>

      <DialogContent>

        <div>
            <div class="w-3/5 m-auto pt-20">
                <img src="/assets/YummCloud/GalleryModal/gallery_text.png" alt="gallery_text" />
            </div>

            <div class="w-4/5 m-auto grid grid-cols-6 gap-4 py-5">
                {
                    divsArray.map((_, index) => (
                        <div className='gallery_rectangle' key={index}>

                        </div>
                    ))
                }
            </div>

            <div class='flex justify-center py-2 cursor-pointer' onClick={closeGalleryModal}>
                <img src="/assets/YummCloud/GalleryModal/back_button.png" alt="back_button" />
            </div>
        </div>

      </DialogContent>
    </Dialog>
  );
}