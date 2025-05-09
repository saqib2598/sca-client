import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      form: {
        title: "Social Support Application",
        steps: {
          0: "Personal Information",
          1: "Family & Financial Info",
          2: "Situation Descriptions",
        },
        next: "Next",
        back: "Back",
        submit: "Submit",
        help: "Help Me Write",
        submitAlert: "Form submitted!",
        modal: {
          title: "Suggested Text",
          accept: "Accept",
          discard: "Discard"
        },
        fields: {
          name: "Full Name",
          fullNameRequired: "Full Name is required",
          nationalId: "National ID",
          nationalIdRequired: "National ID is required",
          dob: "Date of Birth",
          dobRequired: "Date of Birth is required",
          gender: "Gender",
          genderSelect: "Select Gender",
          genderMale: "Male",
          genderFemale: "Female",
          genderOther: "Other",
          genderRequired: "Gender is required",
          address: "Address",
          addressRequired: "Address is required",
          city: "City",
          cityRequired: "City is required",
          state: "State",
          stateRequired: "State is required",
          country: "Country",
          countryRequired: "Country is required",
          phone: "Phone",
          phoneRequired: "Phone is required",
          phoneInvalid: "Phone is invalid",
          email: "Email",
          emailRequired: "Email is required",
          emailInvalid: "Email is invalid",
          familySize: "Family Size",
          familySizeRequired: "Family size is required",
          employmentStatus: "Employment Status",
          employmentStatusRequired: "Employment status is required",
          monthlyIncome: "Monthly Income",
          monthlyIncomeRequired: "Monthly income is required",
          financialAssistance: "Receiving Financial Assistance",
          situationDescription: "Describe Your Situation",
          needsDescription: "What Do You Need Support With?",
          additionalNotes: "Additional Notes",
          selectGender: "Select Gender",
          male: "Male",
          female: "Female",
          other: "Other",
          housingStatus: "Housing Status",
          selectHousingStatus: "Select Housing Status",
          rent: "Rent",
          own: "Own",
          shared: "Shared",
          housingStatusRequired: "Housing status is required",
          selectEmploymentStatus: "Select Employment Status",
          employed: "Employed",
          unemployed: "Unemployed",
          retired: "Retired",
          student: "Student",
          financialSituation: "Financial Situation",
          employmentCircumstances: "Employment Circumstances",
          reasonForApplying: "Reason For Applying",
          financialSituationRequired: "Financial Situation Required",
          employmentCircumstancesRequired: "Employment Circumstances Required",
          reasonForApplyingRequired: "Reason For Applying Required",
          loading: "Loading"
        },
      },
    },
  },
  ar: {
    translation: {
      form: {
        title: "طلب دعم اجتماعي",
        steps: {
          0: "معلومات شخصية",
          1: "معلومات العائلة والمالية",
          2: "وصف الحالة",
        },
        next: "التالي",
        back: "السابق",
        submit: "إرسال",
        help: "ساعدني في الكتابة",
        submitAlert: "تم إرسال النموذج!",
        modal: {
          title: "النص المقترح",
          accept: "قبول",
          discard: "رفض"
        },
        fields: {
          name: "الاسم الكامل",
          fullNameRequired: "الاسم الكامل مطلوب",
          nationalId: "الرقم القومي",
          nationalIdRequired: "مطلوب الهوية الوطنية",
          dob: "تاريخ الميلاد",
          dobRequired: "تاريخ الميلاد مطلوب",
          gender: "الجنس",
          genderSelect: "اختر الجنس",
          genderMale: "ذكر",
          genderFemale: "أنثى",
          genderOther: "آخر",
          address: "العنوان",
          addressRequired: "العنوان مطلوب",
          cityRequired: "المدينة مطلوبة",
          stateRequired: "الدولة مطلوبة",
          countryRequired: "البلد مطلوب",
          city: "المدينة",
          state: "الولاية",
          country: "الدولة",
          phone: "رقم الهاتف",
          phoneRequired: "الهاتف مطلوب",
          phoneInvalid: "الهاتف غير صالح",
          email: "البريد الإلكتروني",
          emailRequired: "البريد الإلكتروني مطلوب",
          emailInvalid: "البريد الإلكتروني غير صالح",
          familySize: "عدد أفراد الأسرة",
          familySizeRequired: "الحجم العائلي مطلوب",
          employmentStatus: "الحالة الوظيفية",
          monthlyIncome: "الدخل الشهري",
          monthlyIncomeRequired: "الدخل الشهري مطلوب",
          financialAssistance: "هل تتلقى مساعدات مالية؟",
          situationDescription: "وصف حالتك",
          needsDescription: "ما نوع الدعم الذي تحتاجه؟",
          additionalNotes: "ملاحظات إضافية",
          selectGender: "اختر الجنس",
          male: "ذكر",
          female: "أنثى",
          other: "آخر",
          genderRequired: "الجنس مطلوب",
          housingStatus: "حالة السكن",
          selectHousingStatus: "اختر حالة السكن",
          rent: "إيجار",
          own: "ملك",
          shared: "مشترك",
          housingStatusRequired: "حالة السكن مطلوبة",
          selectEmploymentStatus: "اختر الحالة الوظيفية",
          employed: "موظف",
          unemployed: "عاطل عن العمل",
          retired: "متقاعد",
          student: "طالب",
          employmentStatusRequired: "الحالة الوظيفية مطلوبة",
          financialSituation: "الوضع المالي",
          employmentCircumstances: "ظروف العمل",
          reasonForApplying: "سبب التقديم",
          financialSituationRequired: "الوضع المالي المطلوب",
          employmentCircumstancesRequired: "شروط التوظيف المطلوبة",
          reasonForApplyingRequired: "سبب التقديم مطلوب",
          loading: "تحميل"
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
