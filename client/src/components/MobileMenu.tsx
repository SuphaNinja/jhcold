import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import LanguageToggle from "./LanguageToggle";
import { ToggleTheme } from "./ui/toggleTheme";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)
    const menuItems = [
        { to: "/", label: "navbar.home" },
        { to: "/about", label: "navbar.about" },
        { to: "/products", label: "navbar.products" },
        { to: "/contact", label: "navbar.contact" },
    ]

    return (
        <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative" aria-label="Open menu">
                    {isOpen ? (
                        <X className="h-6 w-6 transition-all" />
                    ) : (
                        <Menu className="h-6 w-6 transition-all" />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2 mt-2" align="end">
                {menuItems.map((item, index) => (
                    <DropdownMenuItem key={item.to} asChild>
                        <Link
                            to={item.to}
                            className="flex w-full items-center py-2 px-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                            {t(item.label)}
                        </Link>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <div className="flex items-center justify-between px-4 py-2">
                    <LanguageToggle />
                    <ToggleTheme />
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}