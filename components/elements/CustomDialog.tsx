"use client";
import { FC } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CustomDialogProps } from "@/types/component";
import { commonStyles } from "@/utils/constants";

const CustomDialog: FC<CustomDialogProps> = (props) => {
  //props
  const {
    title = "title",
    description = "",
    buttonText = "SUBMIT",
    children,
    onSubmit,
    handleClose,
  } = props;

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="sm:justify-center sm:items-center">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="sm:justify-center">
          <Button
            className={commonStyles.themeBtn}
            type="submit"
            onClick={onSubmit}
          >
            {buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
