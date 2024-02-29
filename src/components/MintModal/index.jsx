import React from 'react';
import {
  Dialog as MuiDialog,
  DialogContent,
  DialogTitle as MuiDialogTitle,
  useMediaQuery,
  styled,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMint from 'hooks/useMint';
import "pages/style.css"

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundImage: "url('/assets/YummCloud/MintModal/modal_layout.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'auto',
    minWidth: '505.3px',
    height: '509.61px',
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

export default function MintModal() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { modalIsOpened, closeMintModal } = useMint();

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modalIsOpened}
      onClose={closeMintModal}
      aria-labelledby="responsive-dialog-title"
      className="relative"
    >
      <DialogTitle id="responsive-dialog-title" onClose={closeMintModal}>


      </DialogTitle>

      <DialogContent>

      </DialogContent>
    </Dialog>
  );
}