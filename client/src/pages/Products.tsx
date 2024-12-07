import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Check, PhoneCall } from 'lucide-react'

const products = [
    {
        title: "products.title1",
        description: "products.description1",
        image: "https://www.takcentrumbutiken.se/PICTURE/1292-83-3030laderhandske-01-40531.png"
    },
    {
        title: "products.title2",
        description: "products.description2",
        image: "https://www.takcentrumbutiken.se/PICTURE/1293-83-3031laderhandskevitsml-01-51823.png"
    },
    {
        title: "products.title3",
        description: "products.description3",
        image: "https://www.takcentrumbutiken.se/PICTURE/1294-83-3031laderhandskebeigesml-01-28331.png"
    },
    {
        title: "products.title4",
        description: "products.description4",
        image: "https://www.takcentrumbutiken.se/PICTURE/1295-83-3034laderhandskegul-01-19709.png"
    },
]

export default function ProductsPage() {
    const { t, i18n } = useTranslation()
    const [, updateState] = useState({})

    useEffect(() => {
        const handleLanguageChanged = () => updateState({})
        i18n.on('languageChanged', handleLanguageChanged)
        return () => {
            i18n.off('languageChanged', handleLanguageChanged)
        }
    }, [i18n])

    return (
        <div className="sm:container sm:mx-auto sm:px-4 py-8 sm:py-12 bg-gradient-to-b from-background to-secondary/10 min-h-screen">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-primary">
                {t("products.pageTitle")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {products.map((product, index) => (
                    <Card
                        key={index}
                        className="overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border border-primary/10"
                    >
                        <div className="aspect-square relative">
                            <img
                                src={product.image}
                                alt={t(product.title)}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                        <CardHeader className="p-4 sm:p-6">
                            <CardTitle className="text-lg sm:text-xl flex flex-col sm:flex-row items-start sm:items-center gap-2 font-bold text-primary">
                                {t(product.title)}
                                <p className="text-sm sm:text-base text-gray-300 font-sans sm:ml-auto">
                                    {t("products.availableSizes")}: S, M, L
                                </p>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6">
                            <p className="text-sm sm:text-base text-foreground leading-relaxed">
                                {t(product.description)}
                            </p>
                        </CardContent>
                        <CardFooter className="flex flex-wrap justify-between gap-2 p-4 sm:p-6 text-xs sm:text-sm">
                            <span className="inline-flex items-center">
                                <Check className="w-4 h-4 mr-1" color="green" />
                                {t("products.feature1")}
                            </span>
                            <span className="inline-flex items-center">
                                <Check className="w-4 h-4 mr-1" color="green" />
                                {t("products.feature2")}
                            </span>
                            <span className="inline-flex items-center">
                                <Check className="w-4 h-4 mr-1" color="green" />
                                {t("products.feature3")}
                            </span>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg shadow-md  border border-primary/20">
                <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
                    {t("products.callToAction")}
                </h2>
                <p className="text-base sm:text-lg text-foreground mb-4">
                    {t("products.contactInfo")}
                </p>
                <div className="flex items-center justify-center text-primary">
                    <PhoneCall className="w-5 h-5 mr-2" />
                    <span className="text-lg sm:text-xl font-bold">073-686 01 79</span>
                </div>
            </div>
        </div>
    )
}