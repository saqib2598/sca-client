# 📝 Social Support Application with AI Assistance

This is a multi-step, bilingual (English + Arabic) form wizard built for a government social support portal. The application helps citizens apply for financial assistance and integrates OpenAI GPT to assist users in writing detailed text sections.

---

## 🌟 Features

- ✅ **3-Step Form Wizard**
  - Step 1: Personal Information
  - Step 2: Family & Financial Info
  - Step 3: Situation Descriptions (with AI help)
- 🌐 **Language Support**: English and Arabic (RTL)
- 🤖 **AI Integration**: "Help Me Write" uses GPT to assist users in filling text areas
- 💾 **Auto-save**: Form progress saved in `localStorage`
- 📱 **Responsive**: Optimized for mobile, tablet, and desktop
- ♿ **Accessible**: Keyboard navigation + ARIA-friendly components
- 🎨 **Clean UI**: Built with Material UI and theming support

---

## 🧱 Tech Stack

| Purpose              | Tech                          |
|----------------------|-------------------------------|
| Frontend Framework   | React                         |
| Routing              | React Router                  |
| Form Handling        | React Hook Form               |
| UI Components        | Material UI (MUI)             |
| Internationalization | react-i18next                 |
| AI Integration       | OpenAI API (`gpt-3.5-turbo`)  |
| Styling              | Tailwind (optional utility)   |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saqib2598/social-support-app.git
cd social-support-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project:

```
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

> 🔐 Get your key from [OpenAI](https://platform.openai.com/account/api-keys)

---

### 4. Run the App

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Testing

Basic testing is set up using React Testing Library and Jest (if added). You can add form validations and UI tests for critical flows.

---

## 📁 Project Structure

```
src/
  ├── components/
  ├── pages/
  ├── theme/
  ├── utils/
  └── App.tsx
```

- `components/` – Reusable form components
- `pages/` – Multi-step form container
- `theme/` – MUI theme files with RTL/LTR support
- `utils/i18n.ts` – i18next config
- `App.tsx` – Main entry point with router, theme provider, and language switcher

---

## 📦 Build

```bash
npm run build
```

---

## ✨ Improvements You Can Add

- Real API submission
- Phone number validation with flag input (e.g., `react-phone-input-2`)
- Unit tests and form field coverage
- Integration with backend or CRM
- Language change to depict on already rendered errors
- One Open AI hit for all

---

## 📄 License

MIT License. Free to use and modify.

---

## 👨‍💻 Author

Built with ❤️ by [Saqib Ejaz](https://github.com/saqib2598)