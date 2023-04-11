import { SocialLinks } from '@/components/SocialLinks'
import { GroupButtons } from '@/components/GroupButtons'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full max-w-[588px] mx-auto h-screen max-md:px-4">
      <Header />
      <GroupButtons />
      <SocialLinks />
    </main>
  )
}
