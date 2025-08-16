"use client"

import { useState, FormEvent } from "react"
import { Loader2, MailIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import SocialsCard from "../components/custom/socialscard"
import { FlipWords } from "../components/ui/flip-words"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { sendEmail } from "../lib/Email/sendEmail"

export default function Getintouch() {
  const [isLoading, setIsLoading] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success: boolean | null; message: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    setIsLoading(true)
    setFormStatus(null)

    const result = await sendEmail(form)
    setFormStatus(result)

    if (result.success) form.reset()
    setIsLoading(false)
  }

  return (
    <section className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 md:px-20 gap-16">
      <div className="text-center flex flex-col md:flex-row items-center justify-center gap-2">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Ready to create</h1>
        <FlipWords
          words={["Modern", "Amazing", "Creative", "Efficient", "Professional"]}
          className="text-4xl md:text-5xl font-bold text-white"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white">websites together?</h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">
        <div className="flex-1 flex flex-col gap-6 max-w-md">
          <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
          <p className="text-neutral-400 text-sm">
            I&apos;m always open to discuss any opportunities, creative projects, or potential collaboration.
            Whether you need a full-stack developer, a UI/UX designer or someone who can bridge both
            worlds, let&apos;s talk.
          </p>

          <SocialsCard
            title="Email"
            icon={<MailIcon className="w-5 h-5" />}
            description="labide.xj@gmail.com"
            href="mailto:labide.xj@gmail.com"
          />

          <SocialsCard
            title="Instagram"
            icon={<InstagramIcon className="w-5 h-5" />}
            description="@xanderymilk"
            href="https://instagram.com/xanderymilk"
          />

          <SocialsCard
            title="LinkedIn"
            icon={<LinkedinIcon className="w-5 h-5" />}
            description="Connect with me"
            href="https://www.linkedin.com/in/labidexj/"
          />
        </div>

        <div className="flex-1 w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">Send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="bg-transparent border border-white/20 text-white placeholder:text-neutral-400"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-transparent border border-white/20 text-white placeholder:text-neutral-400"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-white">Message</Label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello!"
                rows={6}
                className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                required
              />
            </div>

            {formStatus && (
              <div className={`p-3 rounded-md ${formStatus.success ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 rounded-md bg-purple-600 hover:bg-purple-700 px-4 py-2 text-white font-medium transition duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
