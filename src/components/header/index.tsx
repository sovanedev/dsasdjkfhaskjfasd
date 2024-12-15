import React, { useContext, useState } from 'react'
import { ThemeContext } from '../theme-provider'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import { FaRegMoon } from 'react-icons/fa'
import { LuSunMedium } from 'react-icons/lu'
import { HeaderA } from '../header-a'
import { BiCart } from 'react-icons/bi'

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { label: "Продукты", route: "/" },
        { label: "Телефонная активация", route: "/cart" },
        { label: "Отзывы", route: "/checkout" }
    ]

    return (
        <Navbar 
            className={theme}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarBrand>
                <p className="font-bold text-inherit">CidActivation</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex" justify="start">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.label}-${index}`}>
                        <HeaderA route={item.route}>
                            <p>{item.label}</p>
                        </HeaderA>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem 
                    className="text-3xl cursor-pointer hover:bg-blue-500 rounded-full p-1 transition duration-300"
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? <FaRegMoon className="text-black"/> : <LuSunMedium className="text-white"/>}
                </NavbarItem>

                <NavbarItem 
                    className="text-3xl cursor-pointer hover:bg-blue-500 rounded-full p-1 transition duration-300"
                >
                    <HeaderA route="/cart">
                        <BiCart className={`text-${theme === 'dark' ? 'white' : 'black'}`}/>
                    </HeaderA>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className={`${theme} pt-6`}>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <HeaderA route={item.route}>
                            <p className="w-full">{item.label}</p>
                        </HeaderA>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}