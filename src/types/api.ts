export type Image = {
  alternativeText: string
  url: string
}

export type Review = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type Questions = {
  question: string
  answer: string
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Questions[]
}

export type LandingPageProps = {
  logo: Image
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
