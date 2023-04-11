import { Button } from '@/components/Button'
import Link from 'next/link'

export function GroupButtons() {
  return (
    <div className="mt-6">
      <Link href="https://github.com/felippedonatto" target="_blank">
        <Button>Acesse meu Github</Button>
      </Link>

      <Link href="https://donatto-app.vercel.app/portifolio" target="_blank">
        <Button>Veja meu portifolio</Button>
      </Link>

      <Link
        href="https://api.whatsapp.com/message/EVND3KQTJJOTL1?autoload=1&app_absent=0"
        target="_blank"
      >
        <Button>Agende uma reunião</Button>
      </Link>
      <Link href="https://donatto-app.vercel.app/" target="_blank">
        <Button>Visite meu site</Button>
      </Link>
    </div>
  )
}
