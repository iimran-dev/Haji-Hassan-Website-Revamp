'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react'
import { siteData } from '@/data/site-data'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  message: z.string().min(1, 'Message is required'),
})

type ContactFormData = z.infer<typeof contactSchema>

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Something went wrong')
      }
      setFormStatus('success')
      reset()
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (err) {
      setFormStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send inquiry')
    }
  }

  return (
    <section id="contact" className="bg-[#081A2B] py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C41230]">
              Get in Touch
            </span>
            <h2 className="font-['Manrope'] text-3xl font-bold text-white md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We&apos;d love to hear from you. Reach out for inquiries about
              our services, partnerships, or career opportunities.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-lg bg-white/5 p-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#C41230]" aria-hidden="true" />
                <span className="text-sm text-white">{siteData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-white/5 p-4">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#C41230]" aria-hidden="true" />
                <span className="text-sm text-white">{siteData.contact.email}</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-white/5 p-4">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#C41230]" aria-hidden="true" />
                <span className="text-sm text-white">{siteData.contact.address}</span>
              </div>
            </div>

            {/* Office Locations */}
            <div className="mt-8">
              <h3 className="mb-4 font-['Manrope'] text-sm font-semibold uppercase tracking-wider text-gray-400">
                Office Locations
              </h3>
              <div className="flex flex-col gap-3">
                {siteData.contact.locations.map((loc) => (
                  <div key={loc.name}>
                    <p className="text-sm font-medium text-white">{loc.name}</p>
                    <p className="mt-0.5 text-sm text-gray-400">{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 lg:p-8">
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-12 w-12 text-green-400" />
                  <p className="mt-4 text-lg font-medium text-white">
                    Thank you! We&apos;ll be in touch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Name <span className="text-[#C41230]">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-[#C41230]/50 focus-visible:ring-[#C41230]/20"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300">
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-[#C41230]/50 focus-visible:ring-[#C41230]/20"
                      {...register('company')}
                    />
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email <span className="text-[#C41230]">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-[#C41230]/50 focus-visible:ring-[#C41230]/20"
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+973 XX XXX XXX"
                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-[#C41230]/50 focus-visible:ring-[#C41230]/20"
                        {...register('phone')}
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType" className="text-gray-300">
                      Inquiry Type
                    </Label>
                    <Select onValueChange={(val) => setValue('inquiryType', val)}>
                      <SelectTrigger className="w-full border-white/10 bg-white/5 text-white data-[placeholder]:text-gray-500 focus:ring-[#C41230]/20">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Partnership">Partnership</SelectItem>
                        <SelectItem value="Career">Career</SelectItem>
                        <SelectItem value="Media">Media</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.inquiryType && (
                      <p className="text-xs text-red-400">{errors.inquiryType.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message <span className="text-[#C41230]">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus-visible:border-[#C41230]/50 focus-visible:ring-[#C41230]/20"
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Error message */}
                  {formStatus === 'error' && (
                    <p className="text-sm text-red-400">{errorMessage}</p>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="mt-4 w-full bg-[#C41230] text-white hover:bg-[#C41230]/90"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
