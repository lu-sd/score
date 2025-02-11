import React, { type FormEvent } from "react";

export default function Form() {
  const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    try {
      if (form.action !== SUBMIT_URL) {
        alert("Incorrect form action value");
        return;
      }

      if (form.method.toLowerCase() !== "post") {
        alert("Incorrect form method value");
        return;
      }

      const formData = new FormData(form);
      const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const text = await response.text();
      alert(text);
    } catch (_) {
      alert("Error submitting form!");
    }
  }
  return (
    <form
      onSubmit={submitForm}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
    >
      <div className="flex gap-2">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="flex gap-2">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="flex gap-2">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" />
      </div>
      <button>Submit</button>
    </form>
  );
}
