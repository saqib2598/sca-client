import { Box, MenuItem, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Step2Form() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label={t("form.fields.familySize")}
        type="number"
        {...register("familySize", { required: t("form.fields.familySizeRequired") })}
        error={!!errors.familySize}
        helperText={errors.familySize?.message as string}
      />

      <TextField
        label={t("form.fields.monthlyIncome")}
        type="number"
        {...register("monthlyIncome", { required: t("form.fields.monthlyIncomeRequired") })}
        error={!!errors.monthlyIncome}
        helperText={errors.monthlyIncome?.message as string}
      />

      <TextField
        select
        label={t("form.fields.employmentStatus")}
        defaultValue=""
        {...register("employmentStatus", { required: t("form.fields.employmentStatusRequired") })}
        error={!!errors.employmentStatus}
        helperText={errors.employmentStatus?.message as string}
      >
        <MenuItem value="">{t("form.fields.selectEmploymentStatus")}</MenuItem>
        <MenuItem value="employed">{t("form.fields.employed")}</MenuItem>
        <MenuItem value="unemployed">{t("form.fields.unemployed")}</MenuItem>
        <MenuItem value="student">{t("form.fields.student")}</MenuItem>
        <MenuItem value="retired">{t("form.fields.retired")}</MenuItem>
      </TextField>

      <TextField
        select
        label={t("form.fields.housingStatus")}
        defaultValue=""
        {...register("housingStatus", { required: t("form.fields.housingStatusRequired") })}
        error={!!errors.housingStatus}
        helperText={errors.housingStatus?.message as string}
      >
        <MenuItem value="">{t("form.fields.selectHousingStatus")}</MenuItem>
        <MenuItem value="rent">{t("form.fields.rent")}</MenuItem>
        <MenuItem value="own">{t("form.fields.own")}</MenuItem>
        <MenuItem value="shared">{t("form.fields.shared")}</MenuItem>
      </TextField>
    </Box>
  );
}
