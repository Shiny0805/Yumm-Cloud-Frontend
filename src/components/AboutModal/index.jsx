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
import useAbout from 'hooks/useAbout';
import "pages/style.css"

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundImage: "url('/assets/YummCloud/AboutModal/modal_layout.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'auto',
    minWidth: '734.6px',
    height: '527.86px',
    borderRadius: '50px',
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

export default function AboutModal() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { modalIsOpened, closeAboutModal } = useAbout();

  const divsArray = new Array(18).fill(null);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modalIsOpened}
      onClose={closeAboutModal}
      aria-labelledby="responsive-dialog-title"
      // fullWidth={true}
      // maxWidth="sm"
      className="relative"
    >
      <DialogTitle id="responsive-dialog-title" onClose={closeAboutModal}>


      </DialogTitle>

      <DialogContent>

        <div class="w-11/12 m-auto flex justify-between pt-20 items-center">
            <div>
                <img src="/assets/YummCloud/AboutModal/about_profile_avatar.png" alt="about_profile_avatar" />
            </div>

            <div>
                <div>
                    <img src="/assets/YummCloud/AboutModal/about_profile_name.png" alt="about_profile_name" />
                </div>
                <div class='py-5'>
                    <img src="/assets/YummCloud/AboutModal/about_profile_twitter.png" alt="about_profile_twitter" />
                </div>
                <div>
                    <img src="/assets/YummCloud/AboutModal/about_profile_content.png" alt="about_profile_content" />
                </div>
            </div>
        </div>

        <div class='absolute bottom-5'>
            <img src="/assets/YummCloud/AboutModal/back_button.png" alt="back_button" />
        </div>

      </DialogContent>
    </Dialog>
  );
}