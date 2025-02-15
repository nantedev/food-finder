"use client"
import Link from "next/link"
import { JSX } from "react"
import logo from "@/public/assets/images/logo.svg"
import Image from "next/image"
import styled from "styled-components"

export const Logo = ():JSX.Element => {
    return (
        <LogoStyled>
            <Link href="/" passHref style={{ position: 'relative', display: 'block', width: '100%', height: '100%' }}>
                <Image
                    src={logo}
                    alt="Logo: Food Finder"
                    sizes="(max-width: 600px) 119px, 169px"
                    fill
                    priority={false}
                    loading="eager"
                />
            </Link>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    display: inline-block;
    height: 35px;
    position: relative;
    width: 119px;
    
    @media (min-width: 600px) {
        height: 50px;
        width: 169px;
    }
`