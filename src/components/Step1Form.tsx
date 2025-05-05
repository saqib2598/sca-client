import { Box, MenuItem, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Step1Form() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    getValues
  } = useFormContext();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label={t("form.fields.name")}
        {...register("name", { required: t("form.fields.fullNameRequired") })}
        error={!!errors.name}
        helperText={errors.name?.message as string}
      />

      <TextField
        label={t("form.fields.nationalId")}
        {...register("nationalId", { required: t("form.fields.nationalIdRequired") })}
        error={!!errors.nationalId}
        helperText={errors.nationalId?.message as string}
      />

      <TextField
        type="date"
        label={t("form.fields.dob")}
        InputLabelProps={{ shrink: true }}
        {...register("dob", { required: t("form.fields.dobRequired") })}
        error={!!errors.dob}
        helperText={errors.dob?.message as string}
      />

      <TextField
        select
        label={t("form.fields.gender")}
        defaultValue={getValues("gender") || ""}
        {...register("gender", { required: t("form.fields.genderRequired") })}
        error={!!errors.gender}
        helperText={errors.gender?.message as string}
      >
        <MenuItem value="">{t("form.fields.selectGender")}</MenuItem>
        <MenuItem value="male">{t("form.fields.male")}</MenuItem>
        <MenuItem value="female">{t("form.fields.female")}</MenuItem>
        <MenuItem value="other">{t("form.fields.other")}</MenuItem>
      </TextField>

      <TextField
        label={t("form.fields.address")}
        {...register("address", { required: t("form.fields.addressRequired") })}
        error={!!errors.address}
        helperText={errors.address?.message as string}
      />

      <TextField
        label={t("form.fields.city")}
        {...register("city", { required: t("form.fields.cityRequired") })}
        error={!!errors.city}
        helperText={errors.city?.message as string}
      />

      <TextField
        label={t("form.fields.state")}
        {...register("state", { required: t("form.fields.stateRequired") })}
        error={!!errors.state}
        helperText={errors.state?.message as string}
      />

      <TextField
        label={t("form.fields.country")}
        {...register("country", { required: t("form.fields.countryRequired") })}
        error={!!errors.country}
        helperText={errors.country?.message as string}
      />

      <TextField
        type="tel"
        inputMode="numeric"
        label={t("form.fields.phone")}
        {...register("phone", {
          required: t("form.fields.phoneRequired"),
          pattern: {
            value: /^[0-9]{7,15}$/, // Adjust length as needed
            message: t("form.fields.phoneInvalid"),
          },
        })}
        error={!!errors.phone}
        helperText={errors.phone?.message as string}
      />

      <TextField
        label={t("form.fields.email")}
        type="email"
        {...register("email", {
          required: t("form.fields.emailRequired"),
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: t("form.fields.emailInvalid"), // Add this to your i18n file
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message as string}
      />

    </Box>
  );
}
