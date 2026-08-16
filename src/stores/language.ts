import { create } from 'zustand'

export type Language = 'en' | 'ar'

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguage = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}))
