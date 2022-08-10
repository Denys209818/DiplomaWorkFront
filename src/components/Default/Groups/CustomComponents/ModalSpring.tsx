import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring';
import { YoutubeSearchedForRounded } from '@mui/icons-material';

interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IModalSpring {
    open: boolean,
    title: string,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    yesFunc: () => void
}

const ModalSpring: React.FC<IModalSpring> = ({ open, title, setOpen, yesFunc }) => {


    return (
        <div>
            <Modal
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            {title}
                        </Typography>
                            <Stack
                            style={{width:'100%'}}
                            alignItems="center"
                            justifyContent="center"
                             marginTop={2} direction="row" spacing={2}>
                                <Button variant="outlined"
                                onClick={() => {setOpen(false)
                                    yesFunc();
                                }}>Так</Button>
                                <Button
                                onClick={() => setOpen(false)}
                                variant="outlined">Ні</Button>
                            </Stack>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalSpring;