import { useTranslation } from "react-i18next"; 
import { Box, Button, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import AIHelperModal from "./AIHelperModal";
import { getOpenAISuggestion } from "../utils/openai";

export default function Step3Form() {
  const {
    register,
    setValue,
    formState: { errors, touchedFields }
  } = useFormContext();

  const { t, i18n } = useTranslation();

  const [activeField, setActiveField] = useState<null | string>(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingField, setLoadingField] = useState<null | string>(null);
  const [suggestion, setSuggestion] = useState("");

  const handleHelpClick = async (field: string) => {
    setLoadingField(field);
    setActiveField(field);
  
    const isArabic = i18n.language === "ar";
    const prompt = isArabic
      ? `أقوم بتقديم طلب للحصول على دعم مالي من الحكومة. الرجاء مساعدتي في كتابة وصف قصير وصادق وبسيط ومتواضع بصيغة المتكلم لهذا الحقل "${field.replace(/([A-Z])/g, " $1")}".`
      : `I am applying for government financial support. Please help me write a short, first-person description for the form field labeled "${field.replace(/([A-Z])/g, " $1")}". Keep it honest, simple, and humble.`;
  
    try {
      const suggestion = await getOpenAISuggestion(prompt);
      setSuggestion(suggestion);
      setShowModal(true);
    } catch {
      alert("Failed to fetch suggestion. Please try again.");
    } finally {
      setLoadingField(null);
    }
  };  

  const handleAccept = (editedText: string) => {
    if (activeField) {
      setValue(activeField, editedText, { shouldValidate: true });
    }
    setShowModal(false);
    setSuggestion("");
  };

  const fields = [
    {
      label: t("form.fields.financialSituation"),
      name: "financialSituation",
      errorMsg: t("form.fields.financialSituationRequired"),
    },
    {
      label: t("form.fields.employmentCircumstances"),
      name: "employmentCircumstances",
      errorMsg: t("form.fields.employmentCircumstancesRequired"),
    },
    {
      label: t("form.fields.reasonForApplying"),
      name: "reasonForApplying",
      errorMsg: t("form.fields.reasonForApplyingRequired"),
    },
  ];

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {fields.map(({ label, name, errorMsg }) => {
        const isTouched = !!touchedFields[name];
        const hasError = !!errors[name] && isTouched;

        return (
          <Box key={name}>
            <TextField
              fullWidth
              label={label}
              multiline
              rows={4}
              slotProps={{ inputLabel: { shrink: true } }}
              {...register(name, { required: errorMsg })}
              error={hasError}
              helperText={hasError ? (errors[name]?.message as string) : " "}
            />
            <Button
              variant="outlined"
              onClick={() => handleHelpClick(name)}
              disabled={loadingField === name}
              sx={{ mt: 1 }}
            >
              {loadingField === name ? t("form.fields.loading") : t("form.help")}
            </Button>
          </Box>
        );
      })}


      <AIHelperModal
        open={showModal}
        suggestion={suggestion}
        onAccept={handleAccept}
        onClose={() => setShowModal(false)}
      />
    </Box>
  );
}
