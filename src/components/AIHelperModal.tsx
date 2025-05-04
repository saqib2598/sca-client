import { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  open: boolean;
  suggestion: string;
  onAccept: (editedText: string) => void;
  onClose: () => void;
}

export default function AIHelperModal({ open, suggestion, onAccept, onClose }: Props) {
  const { t } = useTranslation();
  const [edited, setEdited] = useState(suggestion);

  useEffect(() => {
    setEdited(suggestion);
  }, [suggestion]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{t("form.modal.title")}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          multiline
          rows={6}
          value={edited}
          onChange={(e) => setEdited(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onAccept(edited)} variant="contained">
          {t("form.modal.accept")}
        </Button>
        <Button onClick={onClose}>
          {t("form.modal.discard")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
