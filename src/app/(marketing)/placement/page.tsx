import { FooterMain } from '@/components/marketing/footers/footer-main'
import { Header } from '@/components/marketing/header-navigation/header'
import ExamBanners from '@/components/ui/ExamBanners'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import PlacementHero from '@/components/ui/PlacementHero'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center">
      <div className="w-full mx-auto">
        <Header />
        <main className="w-ful !bg-transparentl">
          <PlacementHero />
          <ExamBanners />
          <FeaturesSection />
        </main>
        <FooterMain />
      </div>
    </div>
  )
}
