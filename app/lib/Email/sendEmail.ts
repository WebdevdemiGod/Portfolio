

import emailjs from '@emailjs/browser';

export const sendEmail = async (
  form: HTMLFormElement
): Promise<{ success: boolean; message: string }> => {
  try {
   
    emailjs.init('WHKSqBwbhPRSRZF2B');

    await emailjs.sendForm(
      'service_v8g2r8d',
      'template_xfgnljs',
      form
    );

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
};
