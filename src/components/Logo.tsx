import Image from 'next/image'

type LogoProps = {
  size?: number
  className?: string
}

export default function Logo({ size = 44, className }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="RV Estratégia — logo de Rita Vanin"
      width={size}
      height={size}
      className={className}
      priority
    />
  )
}
