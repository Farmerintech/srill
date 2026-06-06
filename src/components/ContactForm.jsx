import { AnimatePresence, motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { services } from "../data/content.js";

const initialValues = {
  name: "",
  email: "",
  service: services[0].title,
  message: ""
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function validate() {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (values.message.trim().length < 12) {
      nextErrors.message = "Add a short project or service note.";
    }
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  }

  return (
    <div className="panel p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-amberSoft text-gold">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-ink">Start a service request</h2>
          <p className="text-sm text-slate-600">Client-side form created as a web enhancement.</p>
        </div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="status"
          >
            Request captured locally. Connect this form to your CRM, email service, or backend endpoint before launch.
          </motion.div>
        )}
      </AnimatePresence>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" id="name" error={errors.name}>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={updateField}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink shadow-sm transition focus:border-gold"
              autoComplete="name"
            />
          </Field>
          <Field label="Email" id="email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={updateField}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink shadow-sm transition focus:border-gold"
              autoComplete="email"
            />
          </Field>
        </div>

        <Field label="Service area" id="service">
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={updateField}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink shadow-sm transition focus:border-gold"
          >
            {services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
        </Field>

        <Field label="Message" id="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={updateField}
            rows="5"
            className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink shadow-sm transition focus:border-gold"
          />
        </Field>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-600 px-6 py-3.5 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-navy sm:w-auto"
        >
          Send Request
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-black text-ink">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p className="mt-2 text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
