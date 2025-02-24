"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Flex, Heading, Input, Text, Background, Column, Textarea } from "@/once-ui/components";

type ContactFormProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const ContactForm = ({ newsletter }: { newsletter: ContactFormProps }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_lw7392i",
        "template_xwjq644",
        formData,
        "LV-yzVDCdT5pP6TcE"
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{ cursor: false, x: 100, y: 0, radius: 100 }}
        gradient={{
          display: true,
          x: 100,
          y: 50,
          width: 100,
          height: 100,
          tilt: -45,
          colorStart: "accent-background-strong",
          colorEnd: "static-transparent",
          opacity: 100,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text style={{ position: "relative", maxWidth: "var(--responsive-width-xs)" }} wrap="balance" marginBottom="l">
        {newsletter.description}
      </Text>
      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Flex fillWidth maxWidth={40} gap="8">
          <Input id="name "name="name" label="Your Name" required onChange={handleChange} value={formData.name} />
          <Input id="email" name="email" type="email" label="Your Email" required onChange={handleChange} value={formData.email} />
          <Textarea id="message" name="message" label="Your Message" required onChange={handleChange} value={formData.message} style={{ position: "relative", maxWidth: 50}} />
          <Button type="submit" size="m" fillWidth>
            Send Message
          </Button>
        </Flex>
      </form>
      {status && <Text marginTop="s">{status}</Text>}
    </Column>
  );
};

export default ContactForm;