'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { siteData } from '@/data/site-data'
import { useLanguage } from '@/stores/language'

const CORPORATE_RED = '#C8102E'
const SCROLL_THRESHOLD = 50

export function Header() {
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' ? window.scrollY > SCROLL_THRESHOLD : false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCtaClick = () => {
    const el = document.querySelector('#contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300'
      }
      animate={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(0,0,0,0)',
        boxShadow: scrolled
          ? '0 1px 12px rgba(0,0,0,0.08)'
          : '0 0px 0px rgba(0,0,0,0)',
        height: scrolled ? 64 : 80,
      }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo ── */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-1 select-none"
          aria-label="Haji Hassan Group — Home"
        >
          <span
            className="font-heading text-base font-extrabold tracking-tight sm:text-lg transition-colors duration-300"
            style={{ color: scrolled ? '#081A2B' : '#FFFFFF' }}
          >
            HAJI HASSAN{' '}
          </span>
          <span
            className="font-heading text-base font-extrabold tracking-tight sm:text-lg transition-colors duration-300"
            style={{ color: CORPORATE_RED }}
          >
            GROUP
          </span>
        </a>

        {/* ── Desktop Nav (center) ── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {siteData.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className={
                'relative px-3 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 group'
              }
              style={{ color: scrolled ? '#111827' : '#FFFFFF' }}
            >
              {item.label}
              {/* Red underline hover effect */}
              <span
                className={
                  'absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full'
                }
                style={{
                  backgroundColor: CORPORATE_RED,
                  width: 0,
                }}
              />
            </a>
          ))}
        </nav>

        {/* ── Desktop Right: Language + CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className={
              'flex items-center gap-1 text-[13px] font-semibold tracking-wide transition-colors duration-300 cursor-pointer'
            }
            style={{ color: scrolled ? '#111827' : '#FFFFFF' }}
            aria-label="Toggle language"
          >
            <span
              className={
                'rounded px-1.5 py-0.5 transition-colors duration-200'
              }
              style={{
                backgroundColor:
                  language === 'en' ? CORPORATE_RED : 'transparent',
                color: language === 'en' ? '#FFFFFF' : undefined,
              }}
            >
              EN
            </span>
            <span className="opacity-50">|</span>
            <span
              className={
                'rounded px-1.5 py-0.5 transition-colors duration-200'
              }
              style={{
                backgroundColor:
                  language === 'ar' ? CORPORATE_RED : 'transparent',
                color: language === 'ar' ? '#FFFFFF' : undefined,
              }}
            >
              AR
            </span>
          </button>

          {/* CTA */}
          <Button
            onClick={handleCtaClick}
            className="rounded-full px-5 text-[13px] font-semibold tracking-wide uppercase cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: CORPORATE_RED,
              color: '#FFFFFF',
            }}
            size="sm"
          >
            Get In Touch
          </Button>
        </div>

        {/* ── Mobile Right: CTA + Hamburger ── */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            onClick={handleCtaClick}
            className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase cursor-pointer"
            style={{
              backgroundColor: CORPORATE_RED,
              color: '#FFFFFF',
            }}
            size="sm"
          >
            Get In Touch
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="flex items-center justify-center size-9 rounded-md transition-colors duration-300 cursor-pointer"
                style={{ color: scrolled ? '#081A2B' : '#FFFFFF' }}
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] bg-white p-0"
            >
              <SheetHeader className="px-6 pt-8 pb-4 border-b border-gray-100">
                <SheetTitle className="font-heading text-lg font-extrabold tracking-tight text-[#081A2B]">
                  <span className="text-[#081A2B]">HAJI HASSAN </span>
                  <span style={{ color: CORPORATE_RED }}>GROUP</span>
                </SheetTitle>
                <SheetDescription className="text-gray-500 text-xs">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col py-4" aria-label="Mobile navigation">
                {siteData.nav.map((item, idx) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={
                      'relative px-6 py-3.5 text-sm font-medium tracking-wide text-[#111827] transition-colors hover:bg-gray-50 group'
                    }
                  >
                    {item.label}
                    <span
                      className={
                        'absolute bottom-0 left-6 h-[2px] rounded-full transition-all duration-300 group-hover:w-[calc(100%-3rem)]'
                      }
                      style={{
                        backgroundColor: CORPORATE_RED,
                        width: 0,
                      }}
                    />
                  </a>
                ))}
              </nav>

              {/* Mobile language toggle */}
              <div className="mt-auto border-t border-gray-100 px-6 py-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Language
                  </span>
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                    className="flex items-center gap-1 text-sm font-semibold text-[#111827] cursor-pointer"
                    aria-label="Toggle language"
                  >
                    <span
                      className="rounded px-2 py-0.5 transition-colors duration-200"
                      style={{
                        backgroundColor:
                          language === 'en' ? CORPORATE_RED : 'transparent',
                        color: language === 'en' ? '#FFFFFF' : '#111827',
                      }}
                    >
                      EN
                    </span>
                    <span className="opacity-40">|</span>
                    <span
                      className="rounded px-2 py-0.5 transition-colors duration-200"
                      style={{
                        backgroundColor:
                          language === 'ar' ? CORPORATE_RED : 'transparent',
                        color: language === 'ar' ? '#FFFFFF' : '#111827',
                      }}
                    >
                      AR
                    </span>
                  </button>
                </div>
                <Button
                  onClick={() => {
                    setMobileOpen(false)
                    handleCtaClick()
                  }}
                  className="w-full rounded-full text-sm font-semibold tracking-wide uppercase cursor-pointer hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: CORPORATE_RED,
                    color: '#FFFFFF',
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
