"use client";

import React, { useState } from "react";
import LabelInputContainer from "./ui-components/LabelInputContainer";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/stateful-button";

function LetsTalkSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = { ...form };
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status == 200) {
      console.log("Form submitted Successfully");
    } else {
      console.log("Unable to send data");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex justify-between items-start pt-12">
        <div className="w-1/4 space-y-2">
          <h1 className="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 backdrop-blur, bg-opacity  backdrop-blur bg-opacity">
            Let&apos;s Talk
          </h1>
          <p className="text-secondary text-sm">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>
        </div>
        <div className="w-3/4 pl-12 space-y-6">
          <div className="flex space-x-3">
            <LabelInputContainer>
              <Label htmlFor="firstName">First name</Label>
              <Input
                value={form.firstName}
                onChange={handleChange}
                id="firstName"
                placeholder="Vaibhav"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last name</Label>
              <Input
                value={form.lastName}
                onChange={handleChange}
                id="lastName"
                placeholder="Singh"
                type="text"
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="vaibhavsingh15052002@gmail.com"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="message">Your Message</Label>
            <Input
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Share your thoughts and inqueries..."
              className="h-48"
              type="text"
            />
          </LabelInputContainer>
          <Button type="submit">Send Message</Button>
        </div>
      </div>
    </form>
  );
}

export default LetsTalkSection;
