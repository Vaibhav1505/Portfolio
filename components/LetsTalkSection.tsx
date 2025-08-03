import React from "react";
import LabelInputContainer from "./ui-components/LabelInputContainer";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function LetsTalkSection() {
  return (
    <div className="flex justify-between items-start">
      <div className="w-1/4 space-y-2">
        <h1 className="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 backdrop-blur, bg-opacity  backdrop-blur bg-opacity">
          Let&apos;s Talk
        </h1>
        <p className="text-secondary text-sm">
          Whether you&apos;re looking to build a new website, improve your
          existing platform, or bring a unique project to life, I&apos;m here to
          help.
        </p>
      </div>
      <div className="w-3/4 pl-12 space-y-6">
        <div className="flex space-x-3">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Vaibhav" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Singh" type="text" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="vaibhavsingh15052002@gmail.com"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="firstname">Your Message</Label>
          <Input
            id="firstname"
            placeholder="Share your thoughts and inqueries..."
            className="h-48"
            type="text"
          />
        </LabelInputContainer>
        <button
          className="bg-neutral-900 text-white p-2 text-sm font-medium rounded-xl"
          type="submit"
        >
          Send Message &rarr;
        </button>
      </div>
    </div>
  );
}

export default LetsTalkSection;
