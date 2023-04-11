import Image from 'next/image'
import felippe from '/public/felippe.png'

export function Header() {
  return (
    <>
      <Image
        src={felippe}
        alt=""
        width={112}
        className="border-2 border-gray-400 rounded-full"
      />

      <span className="text-white mt-2">@felippedonatto</span>
    </>
  )
}
