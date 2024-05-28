import Link from "next/link"

const ContactUsHomeBtn = () => {
  return (
    <Link href={'/contactus'} className="font-[Merriweather-sans] flex items-center gap-1 bg-[#010080] rounded-sm text-white px-4 py-1 hover:border hover:border-dashed cursor-pointer text-[14px] z-[999999]">
        <img src={"/Assets/Icons/map.svg"} alt="" className="w-[22px] h-[18px]"/>
        <p className="uppercase">Contact Us</p>
    </Link>
  )
}

export default ContactUsHomeBtn