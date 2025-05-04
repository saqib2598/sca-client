import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Step1Form from "../components/Step1Form";
import Step2Form from "../components/Step2Form";
import Step3Form from "../components/Step3Form";

export default function ApplicationForm() {
  const { t, i18n } = useTranslation();
  const methods = useForm({
    defaultValues: JSON.parse(localStorage.getItem("formData") || "{}"),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [step, setStep] = useState(0);

  const steps = [
    t("form.steps.0"),
    t("form.steps.1"),
    t("form.steps.2")
  ];

  const onNext = async () => {
    let fieldsToValidate: string[] = [];

    if (step === 0) {
      fieldsToValidate = [
        "name", "nationalId", "dob", "gender", "address",
        "city", "state", "country", "phone", "email"
      ];
    } else if (step === 1) {
      fieldsToValidate = [
        "familySize", "monthlyIncome", "employmentStatus", "housingStatus"
      ];
    } else if (step === 2) {
      fieldsToValidate = [
        "financialSituation", "employmentCircumstances", "reasonForApplying"
      ];
    }

    const isValid = await methods.trigger(fieldsToValidate);

    if (!isValid) return;
    const data = methods.getValues();
    localStorage.setItem("formData", JSON.stringify(data));
    setStep((prev) => prev + 1);
  };

  const onBack = () => setStep((prev) => prev - 1);

  const onSubmit = (data: any) => {
    console.log("Final Submission:", data);
    alert(t("form.submitAlert"));
    localStorage.removeItem("formData");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
  
  const renderStep = () => {
    switch (step) {
      case 0: return <Step1Form />;
      case 1: return <Step2Form />;
      case 2: return <Step3Form />;
      default: return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <Box maxWidth="md" mx="auto" mt={4} px={2} pb={6} pt={3}>
        <Typography variant="h4" mb={2} sx={{ textAlign: "center" }}>
          {t("form.title")}
        </Typography>

        <Box dir={i18n.language === "ar" ? "ltr" : undefined}>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((_, index) => (
              <Step key={index}>
                <StepLabel>{t(`form.steps.${index}`)}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box mt={4} component="form" onSubmit={methods.handleSubmit(onSubmit)}>
          {renderStep()}

          <Box display="flex" justifyContent="space-between" mt={4}>
            {step > 0 && (
              <Button variant="outlined" onClick={onBack}>
                {t("form.back")}
              </Button>
            )}

            {step < steps.length - 1 ? (
              <Button variant="contained" onClick={onNext}>
                {t("form.next")}
              </Button>
            ) : (
              <Button variant="contained" type="submit">
                {t("form.submit")}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
}
