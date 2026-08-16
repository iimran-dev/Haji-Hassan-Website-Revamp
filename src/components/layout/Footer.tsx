'use client'

import { useState, type FormEvent } from 'react'
import { Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { siteData } from '@/data/site-data'

const CORPORATE_RED = '#C8102E'
const DARK_NAVY = '#081A2B'
const MUTED_GREY = '#9CA3AF'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Subscribed successfully')
    setEmail('')
  }

  return (
    <footer
      className="mt-auto w-full"
      style={{ backgroundColor: DARK_NAVY }}
      role="contentinfo"
    >
      {/* ── Main Footer Grid ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* ── Column 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <a
              href="#"
              className="inline-flex items-center gap-1 select-none"
              aria-label="Haji Hassan Group — Home"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <span className="font-heading text-base font-extrabold tracking-tight sm:text-lg text-white">
                HAJI HASSAN{' '}
              </span>
              <span
                className="font-heading text-base font-extrabold tracking-tight sm:text-lg"
                style={{ color: CORPORATE_RED }}
              >
                GROUP
              </span>
            </a>

            {/* Overview paragraph */}
            <p
              className="mt-5 text-sm leading-relaxed max-w-xs"
              style={{ color: MUTED_GREY }}
            >
              {siteData.footer.overview}
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {siteData.footer.socialLinks.map((social) => {
                const iconMap: Record<string, React.ReactNode> = {
                  LinkedIn: <Linkedin className="size-4" />,
                  Twitter: <Twitter className="size-4" />,
                  Instagram: <Instagram className="size-4" />,
                }
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    aria-label={social.platform}
                    className="flex items-center justify-center size-9 rounded-full transition-colors duration-200 hover:opacity-80"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      color: '#FFFFFF',
                    }}
                  >
                    {iconMap[social.platform]}
                  </a>
                )
              })}
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wide uppercase text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteData.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: MUTED_GREY }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Group Companies ── */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wide uppercase text-white mb-5">
              Our Companies
            </h3>
            <ul className="space-y-3">
              {siteData.footer.groupCompanies.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: MUTED_GREY }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Get In Touch ── */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-wide uppercase text-white mb-5">
              Get In Touch
            </h3>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                style={{ color: MUTED_GREY }}
              >
                <Phone className="size-4 shrink-0" style={{ color: CORPORATE_RED }} />
                <span>{siteData.contact.phone}</span>
              </a>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                style={{ color: MUTED_GREY }}
              >
                <Mail className="size-4 shrink-0" style={{ color: CORPORATE_RED }} />
                <span>{siteData.contact.email}</span>
              </a>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
              <label htmlFor="footer-email" className="sr-only">
                Your email address
              </label>
              <Input
                id="footer-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 rounded-md border-white/10 bg-white/5 text-sm text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-offset-0"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderColor: 'rgba(255,255,255,0.1)',
                }}
              />
              <Button
                type="submit"
                className="h-10 w-full rounded-md text-sm font-semibold tracking-wide uppercase cursor-pointer hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: CORPORATE_RED,
                  color: '#FFFFFF',
                }}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: MUTED_GREY }}>
            © 2024 Haji Hassan Group. All Rights Reserved.
          </p>
          <nav className="flex items-center gap-2" aria-label="Legal links">
            <a
              href="#"
              className="text-xs transition-colors duration-200 hover:text-white"
              style={{ color: MUTED_GREY }}
            >
              Privacy Policy
            </a>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
              |
            </span>
            <a
              href="#"
              className="text-xs transition-colors duration-200 hover:text-white"
              style={{ color: MUTED_GREY }}
            >
              Terms &amp; Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
