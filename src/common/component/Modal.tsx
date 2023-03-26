import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import { color } from '@material-tailwind/react/types/components/button';
import { size } from '@material-tailwind/react/types/components/dialog';
import { PropsWithChildren, useState } from 'react';

type ModalProps = PropsWithChildren<{
  onConfirm: () => void;
  buttonText: string;
  buttonColor?: color;
  headerText?: string;
  text: string;
  size?: size;
  risky?: boolean;
}>;

export default function Modal(props: ModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleConfirm = () => {
    props.onConfirm();
    handleOpen();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="gradient"
        color={props.buttonColor ?? 'deep-purple'}
      >
        {props.buttonText}
      </Button>
      <Dialog size={props.size} open={open} handler={handleOpen}>
        {props.headerText && (
          <DialogHeader>
            <Typography variant="h4" color="gray">
              {props.headerText}
            </Typography>
          </DialogHeader>
        )}

        <DialogBody>
          <Typography color="blue-gray">{props.text}</Typography>
        </DialogBody>

        <DialogFooter className="gap-2">
          <Button onClick={handleOpen} color="gray" variant="text">
            Cancel
          </Button>

          <Button
            onClick={handleConfirm}
            color={props.risky ? 'red' : 'deep-purple'}
          >
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
