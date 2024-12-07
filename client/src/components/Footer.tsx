import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Footer () {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-950 dark:bg-slate-50 text-white dark:text-black py-8 px-4">
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <motion.h2 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-2xl font-semibold"
                        >
                        JHC Plåt & Bygg AB
                    </motion.h2>
                    <motion.p 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-sm">
                        Olympiavägen 131<br />122 40 Enskede
                    </motion.p>
                    <motion.p 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-sm"
                        >
                        {t("footer.phone")} 073-686 01 79<br />{t("footer.email")} <a className="underline" href="mailto:info@jhc-platbyggab.com">info@jhc-platbyggab.com</a>
                    </motion.p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <motion.h2 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-xl font-semibold"
                        >
                        {t("footer.customerService")}
                    </motion.h2>
                    <motion.p 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-sm"
                        >
                        {t("footer.customerService.mon-sat")}
                    </motion.p>
                    <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        >
                        {t("footer.phone")} 073-686 01 79
                    </motion.p>
                    <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        >
                        {t("footer.email")} <a className="underline" href="mailto:service@jhc-platbyggab.com">service@jhc-platbyggab.com</a>
                    </motion.p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <motion.h2 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-xl font-semibold"
                        >
                        Info
                    </motion.h2>
                    <motion.p 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-sm"
                        >
                        {t("footer.info.dogsAreWelcome")}
                    </motion.p>
                    <motion.p 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-sm sm:text-nowrap"
                        >
                        {t("footer.info.bookingInfo")}
                    </motion.p>
                </div>
            </div>
        </footer>
    )
}