import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ToggleTheme } from './ui/toggleTheme';
import { MobileMenu } from './MobileMenu';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';


export default function Navbar() {
    const { t } = useTranslation();
    const location = useLocation();

    const getActiveClass = (path: any) => {
        switch (path) {
            case '/':
                return 'home';
            case '/About':
                return 'about';
            case '/contact':
                return 'contact';
            default:
                return '';
        }
    };

    const currentPath = location.pathname;

    return (
        <nav className="bg-background shadow-md border-b">
            <div className="max-w-7xl mx-auto">
                <div className="relative flex h-16 px-2 sm:px-6 lg:px-8">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <MobileMenu />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                        <div className='mx-auto sm:mx-0'>
                            <Link to="/" className="text-2xl dark:hover:text-slate-300 hover:text-slate-500 transition-all font-semibold">JHC Plåt & Bygg AB</Link>
                            <p className='text-center font-medium'>INTENSO Tätskikt</p>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex  gap-4">
                                <Button asChild variant="link">
                                    <Link to="/" className={`text-lg ${getActiveClass(currentPath) === 'home' ? "underline" : ''}`}>{t('navbar.home')}</Link>
                                </Button>
                                <Button asChild variant="link">
                                    <Link to="/About" className={`text-lg ${getActiveClass(currentPath) === 'about' ? "underline" : ''}`}>{t('navbar.about')}</Link>
                                </Button>
                                <Button asChild variant="link">
                                    <Link to="/Products" className={`text-lg ${getActiveClass(currentPath) === 'contact' ? "underline" : ''}`}>{t('navbar.products')}</Link>
                                </Button>
                                <Button asChild variant="link">
                                    <Link to="/contact" className={`text-lg ${getActiveClass(currentPath) === 'contact' ? "underline" : ''}`}>{t('navbar.contact')}</Link>
                                </Button>
                                <div className='flex items-center gap-4'>
                                    <ToggleTheme />
                                    <LanguageToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}