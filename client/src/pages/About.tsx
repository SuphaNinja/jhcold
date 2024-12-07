
import { Card, CardContent } from "../components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"
import image1 from "../Images/1.jpeg"
import image2 from "../Images/2.jpeg"
import image3 from "../Images/3.jpeg"
import image4 from "../Images/4.jpeg"
import image5 from "../Images/5.jpeg"
import image6 from "../Images/6.jpeg"
import image7 from "../Images/7.jpeg"
import image9 from "../Images/9.jpeg"
import image10 from "../Images/10.jpeg"
import image11 from "../Images/11.jpeg"
import image12 from "../Images/12.jpeg"
import image13 from "../Images/13.jpeg"
import image14 from "../Images/14.jpeg"
import image15 from "../Images/15.jpeg"
import image16 from "../Images/16.jpeg"
import image17 from "../Images/17.jpeg"
import image18 from "../Images/18.jpeg"
import image19 from "../Images/19.jpeg"
import image20 from "../Images/20.jpeg"
import image21 from "../Images/21.jpeg"
import image22 from "../Images/22.jpeg"
import image23 from "../Images/23.jpeg"
import image24 from "../Images/24.jpeg"
import image25 from "../Images/25.jpeg"
import image26 from "../Images/26.jpeg"
import image27 from "../Images/27.jpeg"
import image28 from "../Images/28.jpeg"
import image29 from "../Images/29.jpeg"
import image30 from "../Images/30.jpeg"
import image31 from "../Images/31.jpeg"
import image32 from "../Images/32.jpeg"
import image33 from "../Images/33.jpeg"
import image34 from "../Images/34.jpeg"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { useTranslation } from "react-i18next"

export default function About () {
    const { t } = useTranslation();
    const imagesArray1 = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
    ]

    const imagesArray2 = [
        image20,
        image9,
        image10,
        image12,
        image11,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
       
    ]

    const imagesArray3 = [
        image21,
        image22,
        image23,
        image24,
    ]

    const imagesArray4 = [
        image30,
        image25,
        image26,
        image27,
        image28,
        image29
    ]


    const imagesArray5 = [
        image31,
    ]

    const imagesArray6 = [
        image32,
        image33,
        image34,
    ]

    return ( 
        <div className="mt-12 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-6 sm:mx-12 gap-4 sm:gap-12">
                <Card className="shadow-lg rounded-lg flex flex-col h-full">
                    <CardContent className="flex-1 p-0">
                        <div className="mx-auto h-full">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {imagesArray1.map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full pb-[66.66%]">
                                                <img
                                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                                                    src={imagesArray1[index]}
                                                    alt={`Carousel image ${index + 1}`}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="ml-8" />
                                <CarouselNext className="mr-8" />
                            </Carousel>
                            <p className="text-center text-2xl">{t("about.header1")}</p>
                            <p className="p-4">{t("about.description1")}</p>
                        </div>
                    </CardContent>
                    <div className="flex justify-between py-2 px-4">
                        <p className="font-semibold">JHC Plåt & Bygg AB</p>
                        <Button asChild variant={"outline"}>
                            <Link to="/contact">{t("about.contactUs")}</Link>
                        </Button>
                    </div>
                </Card>
                
                <Card className="shadow-lg rounded-lg flex flex-col h-full">
                    <CardContent className="flex-1 p-0">
                        <div className="mx-auto">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {imagesArray5.map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full pb-[66.66%]">
                                                <img
                                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                                                    src={imagesArray5[index]}
                                                    alt={`Carousel image ${index + 1}`}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="ml-8" />
                                <CarouselNext className="mr-8" />
                            </Carousel>
                            <p className="text-center text-2xl">{t("about.header5")}</p>
                            <p className="p-4">{t("about.description5")}</p>
                        </div>
                    </CardContent>
                    <div className="flex justify-between py-2 px-4">
                        <p className="font-semibold">JHC Plåt & Bygg AB</p>
                        <Button asChild variant={"outline"}>
                            <Link to="/contact">{t("about.contactUs")}</Link>
                        </Button>
                    </div>
                </Card>

                <Card className="shadow-lg rounded-lg flex flex-col h-full">
                    <CardContent className="flex-1 p-0">
                        <div className="mx-auto">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {imagesArray3.map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full pb-[66.66%]">
                                                <img
                                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                                                    src={imagesArray3[index]}
                                                    alt={`Carousel image ${index + 1}`}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="ml-8" />
                                <CarouselNext className="mr-8" />
                            </Carousel>
                            <p className="text-center text-2xl">{t("about.header3")}</p>
                            <p className="p-4">{t("about.description3")}</p>
                        </div>
                    </CardContent>
                    <div className="flex justify-between py-2 px-4">
                        <p className="font-semibold">JHC Plåt & Bygg AB</p>
                        <Button className="" asChild variant={"outline"}>
                            <Link to="/contact">{t("about.contactUs")}</Link>
                        </Button>
                    </div>
                </Card>

                <Card className="shadow-lg rounded-lg flex flex-col h-full">
                    <CardContent className="flex-1 p-0">
                        <div className="mx-auto">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {imagesArray4.map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full pb-[66.66%]">
                                                <img
                                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                                                    src={imagesArray4[index]}
                                                    alt={`Carousel image ${index + 1}`}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="ml-8" />
                                <CarouselNext className="mr-8" />
                            </Carousel>
                            <p className="text-center text-2xl">{t("about.header4")}</p>
                            <p className="p-4">{t("about.description4")}</p>
                        </div>
                    </CardContent>
                    <div className="flex justify-between py-2 px-4">
                        <p className="font-semibold">JHC Plåt & Bygg AB</p>
                        <Button asChild variant={"outline"}>
                            <Link to="/contact">{t("about.contactUs")}</Link>
                        </Button>
                    </div>
                </Card>

                <Card className="shadow-lg rounded-lg flex flex-col h-full">
                    <CardContent className="flex-1 p-0">
                        <div className="mx-auto">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {imagesArray2.map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full pb-[66.66%]">
                                                <img
                                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                                                    src={imagesArray2[index]}
                                                    alt={`Carousel image ${index + 1}`}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="ml-8" />
                                <CarouselNext className="mr-8" />
                            </Carousel>
                        </div>
                        <p className="text-center text-2xl">{t("about.header2")}</p>
                        <p className="p-4">{t("about.description2")}</p>
                    </CardContent>
                    <div className="flex justify-between py-2 px-4">
                        <p className="font-semibold">JHC Plåt & Bygg AB</p>
                        <Button className="" asChild variant={"outline"}>
                            <Link to="/contact">{t("about.contactUs")}</Link>
                        </Button>
                    </div>
                </Card>

                <Card className="shadow-lg rounded-lg flex flex-col h-full">
                    <CardContent className="flex-1 p-0">
                        <div className="mx-auto">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {imagesArray6.map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full pb-[66.66%]">
                                                <img
                                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                                                    src={imagesArray6[index]}
                                                    alt={`Carousel image ${index + 1}`}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="ml-8" />
                                <CarouselNext className="mr-8" />
                            </Carousel>
                            <p className="text-center text-2xl">{t("about.header6")}</p>
                            <p className="p-4">{t("about.description6")}</p>
                        </div>
                    </CardContent>
                    <div className="flex justify-between py-2 px-4">
                        <p className="font-semibold">JHC Plåt & Bygg AB</p>
                        <Button asChild variant={"outline"}>
                            <Link to="/contact">{t("about.contactUs")}</Link>
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}