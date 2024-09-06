import Link from "next/link"
import Image from "next/image"

export const LogoLink = () => {
    return (
        <Link href={"/"}>
            <Image
                src="/assets/images/logo-large.svg"
                alt="Finance"
                width={122}
                height={0}
                className="h-auto"
            />
        </Link>
    )
}