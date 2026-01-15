"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Contact links data
  const contactLinks = [
    {
      label: "Email",
      value: "hi@aliyuks.com",
      href: "mailto:hi@aliyuks.com",
      icon: "mail",
    },
    {
      label: "X.com",
      value: "@aliyuks",
      href: "https://x.com/aliyuks",
      icon: "x",
    },
    {
      label: "GitHub",
      value: "@aliyuks",
      href: "https://github.com/aliyuks",
      icon: "github",
    },
    {
      label: "LinkedIn",
      value: "/in/aliyuks",
      href: "https://linkedin.com/in/aliyuks",
      icon: "linkedin",
    },
  ];

  // Icon SVG components
  const IconSVG = ({ type }: { type: string }) => {
    const iconClass = "w-4 h-4 text-gray-600 dark:text-gray-400";
    switch (type) {
      case "mail":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      case "x":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "github":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // External arrow icon
  const ExternalArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-gray-400 dark:text-gray-500">
      <path
        d="M6 4L12 4M12 4V10M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="py-16 px-4 sm:py-24 border-b border-gray-200 dark:border-gray-800">
      <div className="w-full max-w-[832px] mx-auto px-6 flex flex-col items-start">
        {/* CONTACT Label - same style as other section labels */}
        <h2 
          className="text-xs uppercase font-medium mb-5 text-left text-gray-400 dark:text-gray-500"
          style={{
            letterSpacing: '0.08em',
            fontSize: '12px',
          }}
        >
          CONTACT
        </h2>

        {/* Intro text */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          You can contact me using the form or via the links below.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4 mb-8">
          {/* First row: Name and Email side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-gray-300 dark:focus:border-gray-600 transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-gray-300 dark:focus:border-gray-600 transition-colors"
            />
          </div>

          {/* Second row: Message textarea */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Message"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-gray-300 dark:focus:border-gray-600 transition-colors resize-none"
          />

          {/* Send row: Button + Helper text */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting"
                ? "Sending..."
                : status === "success"
                ? "Message sent!"
                : "Send message"}
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              or <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono">↵ Enter</kbd> to send
            </span>
          </div>
        </form>

        {/* Contact Links List */}
        <div className="w-full space-y-3 mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full py-2 group transition-opacity duration-200 hover:opacity-70"
            >
              {/* Left: Icon + Label */}
              <div className="flex items-center gap-3">
                <IconSVG type={link.icon} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {link.label}
                </span>
              </div>

              {/* Right: Value + Arrow */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {link.value}
                </span>
                <ExternalArrowIcon />
              </div>
            </a>
          ))}
        </div>

        {/* Signature Image */}
        <div className="w-full flex justify-center mt-8 mb-4">
          <img
            src="/signature.png"
            alt="Signature"
            className="w-auto h-16 opacity-80 dark:opacity-70"
            onError={(e) => {
              // Hide if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
      </div>
    </section>
  );
}
