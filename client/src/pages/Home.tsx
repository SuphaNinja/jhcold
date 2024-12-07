import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const container = (delay:any) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

export default function Home () {
    const { t } = useTranslation();

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full">
            <div className="relative h-[400px] sm:h-[500px] overflow-hidden w-full">
                <div className='absolute items-center left-1/2 rounded-b top-0 text-white transform -translate-x-1/2 z-50 dark:bg-slate-800/40 bg-slate-950/40 w-full sm:w-2/3 h-7'>
                    <div className="flex items-center justify-evenly sm:px-4">
                        <p className="text-sm text-nowrap font-extralight">Olympiavägen 131</p>
                        <p className="font-bold">|</p>
                        <p className="text-sm text-nowrap font-extralight">{t("home.openHours")}</p>
                    </div>
                </div>
                <img
                    className="w-full sm:fixed top-0 -z-10 object-cover h-full dark:brightness-50 brightness-75" 
                    src="https://www-cdn.pro4u.se/wp-content/uploads/2020/05/Ramavtal-Sthlm-stad-toppbild-1500x430.jpg"
                />
                <div className="flex flex-col absolute text-slate-50 top-0 z-10 w-full gap-4 sm:gap-10 h-full items-center sm:pt-16 pt-12"> 
                    <motion.p 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="sm:text-8xl text-4xl text-center"
                        >
                        JHC Plåt & Bygg AB
                    </motion.p>
                    <motion.p 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="sm:text-3xl text-2xl text-center"
                        >
                        {t("home.wineAndCider")}
                    </motion.p >
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="text-xl text-center max-w-lg"
                        >
                        {t("home.headerInfo")}
                    </motion.p >
                    <div>
                        <p>{t("footer.info.bookingInfo")}</p>
                    </div>
                </div>
            </div>  
            <div className="flex flex-col bg-background items-center sm:py-24 py-12 sm:px-0 px-3">
                <div className="max-w-2xl">
                    <motion.h2 
                        variants={container(1.3)}
                        initial="hidden"
                        animate="visible"
                        className="sm:text-5xl text-3xl sm:mb-16 mb-10 text-center"
                        >
                        {t("home.aboutUsTitle")}
                    </motion.h2>
                    <motion.p 
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="sm:text-lg mb-10"
                        >
                        {t("home.aboutTextOne")}
                    </motion.p>
                    <motion.p 
                        variants={container(1.8)}
                        initial="hidden"
                        animate="visible"
                        className="sm:text-lg mb-10"
                        >
                        {t("home.aboutTextTwo")}
                    </motion.p>
                    <motion.p 
                        variants={container(2.3)}
                        initial="hidden"
                        animate="visible"
                        className="sm:text-lg mb-10"
                        >
                        {t("home.aboutTextThree")}
                    </motion.p>
                </div>
                <Button asChild size={"lg"}>
                    <Link onClick={handleClick} to="/contact">{t("home.contactUs")}</Link>
                </Button>
            </div>
        </div>
    )
}