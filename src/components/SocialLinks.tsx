import Image from 'next/image'
import Link from 'next/link'

import github from '/public/icons/github.png'
import instagram from '/public/icons/instagram.png'
import youtube from '/public/icons/youtube.png'
import linkedin from '/public/icons/linkedin.png'

export function SocialLinks() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <Link href="https://github.com/felippedonatto" target="_blank">
          <li>
            <Image src={github} alt="" />
          </li>
        </Link>
        <Link href="https://www.instagram.com/donattodev/" target="_blank">
          <li>
            <Image src={instagram} alt="" />
          </li>
        </Link>

        <Link
          href="https://www.youtube.com/channel/UCuzXf39ClGKVnH8HikpgMUA"
          target="_blank"
        >
          <li>
            <Image src={youtube} alt="" />
          </li>
        </Link>

        <Link
          href="https://www.linkedin.com/in/felippe-donatto-oliveira-7212a4121/"
          target="_blank"
        >
          <li>
            <Image src={linkedin} alt="" />
          </li>
        </Link>
      </ul>
    </nav>
  )
}
