import { useTranslation } from "react-i18next";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "../components/ui/select";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axiosinstance";
import { useToast } from "../components/ui/use-toast";

export default function Contact () {
    const { t } = useTranslation();
    const [ toggleForm, setToggleForm ] = useState(true);
    return (
        <div className="pb-24">
            <p className="text-center text-2xl sm:mt-24 mt-12">{t("contact.header")}</p>
            <div className="flex gap-8 mb-8 justify-center">
                <Button variant="link" size={"lg"} className={`text-lg transition-all hover:underline ${toggleForm && "underline"}`} onClick={() => setToggleForm(true)}>{t("contact.booking")}</Button>
                <Button variant="link" size={"lg"} className={`text-lg transition-all hover:underline ${!toggleForm && "underline"}`} onClick={() => setToggleForm(false)}>{t("contact.customerService")}</Button>
            </div>
            <div className={`flex gap-12 items-center justify-center md:w-3/5 sm:w-4/5 mx-2 sm:mx-auto`}>
                {toggleForm ? (
                    <BookingForm />
                ): (
                    <ServiceForm />
                )}
            </div>
        </div>
    )
}

type BookingData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    roofType: string;
    whatToDo: string;
    typeOfHouse: string;
    scaffolding: string;
    other: string;
    built: string;
    kvm: string;
    adress: string;
    date: string;
};

const BookingForm = () => {
    const { t } = useTranslation();
    const { toast } = useToast();

    const [ bookingData, setBookingData ] = useState<BookingData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        roofType: "",
        whatToDo: "",
        typeOfHouse: "",
        scaffolding: "",
        other: "",
        built: "",
        adress:"",
        kvm: "",
        date: new Date().toLocaleString(),
    });

    const sendData = useMutation({
        mutationFn: (bookingData: BookingData) => axiosInstance.post("/send-booking", {bookingData}),
        onError: () => {
            toast({ variant: "destructive", title: `${t("booking.error.toast1")}`, description: `${t("booking.error.toast")}` });
        }
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setBookingData((prevBookingData) => ({
            ...prevBookingData,
            [name]: value,
        }));
    };

    const handleSelectChange = (name: keyof BookingData) => (value: string) => {
        setBookingData((prevBookingData) => ({
            ...prevBookingData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        sendData.mutate(bookingData);

        setBookingData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            roofType: "",
            whatToDo: "",
            typeOfHouse: "",
            scaffolding: "",
            other: "",
            built: "",
            adress: "",
            kvm: "",
            date: new Date().toLocaleString(),
        });

        toast({ variant: "default", title: `${t("booking.success.toast")}`, description: `${t("booking.confirmation.toast")}`});

    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-4 sm:py-6 border-b gap-2 ">
            <p className="col-span-4 text-center">{t("contact.booking.header")}</p>
            <div className="col-span-2">
                <Label htmlFor="firstName">{t("contact.customerService.firstName")}:</Label>
                <Input
                    name="firstName"
                    value={bookingData.firstName}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.firstName")}
                    required
                />
            </div>
            <div className="col-span-2">
                <Label htmlFor="lastName">{t("contact.customerService.lastName")}:</Label>
                <Input
                    name="lastName"
                    value={bookingData.lastName}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.lastName")}
                    required
                />
            </div>
            <div className="col-span-2">
                <Label htmlFor="email">{t("contact.customerService.email1")}:</Label>
                <Input
                    name="email"
                    value={bookingData.email}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.email1")}
                    required
                />
            </div>
            <div className="col-span-2">
                <Label htmlFor="phone">{t("contact.customerService.phone1")}:</Label>
                <Input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.phone1")}
                    required
                />
            </div>
            <div className="col-span-4 md:flex grid grid-cols-4 my-2 gap-2 justify-evenly">
                <div className="col-span-2">
                    <Select
                        name="roofType"
                        value={bookingData.roofType}
                        onValueChange={handleSelectChange("roofType")}
                        required
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={t("contact.booking.roofType")} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>{t("contact.booking.roofType")}</SelectLabel>
                                <SelectItem value="Plåttak">{t("contact.booking.roofType1")}</SelectItem>
                                <SelectItem value="Betong och Tegelpannor">{t("contact.booking.roofType2")}</SelectItem>
                                <SelectItem value="Papptak">{t("contact.booking.roofType3")}</SelectItem>
                                <SelectItem value="Tätskikt">{t("contact.booking.roofType4")}</SelectItem>
                                <SelectItem value="Takskottning">{t("contact.booking.roofType5")}</SelectItem>
                                <SelectItem value="Grönt tak">{t("contact.booking.roofType6")}</SelectItem>
                                <SelectItem value="Membranisolering">{t("contact.booking.roofType7")}</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="col-span-2">
                    <Select
                        name="whatToDo"
                        value={bookingData.whatToDo}
                        onValueChange={handleSelectChange("whatToDo")}
                        required
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={t("contact.booking.whatToDo")} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>{t("contact.booking.whatToDo")}</SelectLabel>
                                <SelectItem value="Omläggning">{t("contact.booking.whatToDo1")}</SelectItem>
                                <SelectItem value="Reparationsarbete">{t("contact.booking.whatToDo2")}</SelectItem>
                                <SelectItem value="Nyproduktion">{t("contact.booking.whatToDo3")}</SelectItem>
                                <SelectItem value="Annat (står i övrigt)">{t("contact.booking.whatToDo4")}</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="col-span-2">
                    <Select
                        name="typeOfHouse"
                        value={bookingData.typeOfHouse}
                        onValueChange={handleSelectChange("typeOfHouse")}
                        required
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={t("contact.booking.typeOfHouse")} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>{t("contact.booking.typeOfHouse")}</SelectLabel>
                                <SelectItem value="BRF">{t("contact.booking.typeOfHouse1")}</SelectItem>
                                <SelectItem value="Radhus">{t("contact.booking.typeOfHouse2")}</SelectItem>
                                <SelectItem value="Villa">{t("contact.booking.typeOfHouse3")}</SelectItem>
                                <SelectItem value="Annat (står i övrigt)">{t("contact.booking.typeOfHouse4")}</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="col-span-2">
                    <Select
                        name="scaffolding"
                        value={bookingData.scaffolding}
                        onValueChange={handleSelectChange("scaffolding")}
                        required
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={t("contact.booking.scaffolding")} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>{t("contact.booking.scaffolding")}</SelectLabel>
                                <SelectItem value="Ja">{t("contact.booking.scaffolding1")}</SelectItem>
                                <SelectItem value="Nej">{t("contact.booking.scaffolding2")}</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="col-span-4 grid grid-cols-4 gap-4">
                <div className="sm:col-span-1 my-auto col-span-2">
                    <Label htmlFor="built" className="text-nowrap">{t("contact.booking.built")}</Label>
                    <Input
                        type="number"
                        name="built"
                        value={bookingData.built}
                        onChange={handleChange}
                        required
                        className="w-full"
                    />
                </div>
                <div className="sm:col-span-1 my-auto col-span-2">
                    <Label htmlFor="kvm">{t("contact.booking.kvm")}</Label>
                    <Input
                        type="number"
                        name="kvm"
                        value={bookingData.kvm}
                        onChange={handleChange}
                        required
                        className="w-full"
                    />
                </div>
                <div className="sm:col-span-2 col-span-4">
                    <Label htmlFor="other">{t("contact.booking.other")}:</Label>
                    <Textarea
                        name="other"
                        value={bookingData.other}
                        onChange={handleChange}
                        placeholder={t("contact.booking.other1")}
                        required
                        className="w-full"
                    />
                </div>
            </div>
            <div className="sm:col-span-2 col-span-4">
                <Label htmlFor="adress">{t("contact.customerService.adress")}:</Label>
                <Input
                    type="text"
                    name="adress"
                    value={bookingData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.adress")}
                    required
                />
            </div>
            <Button size={"sm"} type="submit" className="col-span-4 sm:col-span-2 mt-auto sm:w-1/2 sm:mx-auto">
                {t("contact.booking.submitButton")}
            </Button>
        </form>
    )
}

type ServiceData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    description: string;
    date: string;
    booked:string;
};

const ServiceForm = () => {
    const { t } = useTranslation();
    const { toast } = useToast();

    const [serviceData, setServiceData] = useState<ServiceData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
        booked:"",
        date: new Date().toLocaleString(),
    });

    const sendData = useMutation({
        mutationFn: (serviceData: ServiceData) => axiosInstance.post("/send-support", { serviceData }),
        onError: () => {
            toast({ variant: "destructive", title: `${t("booking.error.toast1")}`, description: `${t("booking.error.toast")}` });
        }
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setServiceData((prevServiceData) => ({
            ...prevServiceData,
            [name]: value,
        }));
    };

    const handleSelectChange = (name: keyof ServiceData) => (value: string) => {
        setServiceData((prevBookingData) => ({
            ...prevBookingData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        sendData.mutate(serviceData);

        setServiceData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            description:"",
            booked: "",
            date: new Date().toLocaleString(),
        });

        toast({ variant: "default", title: `${t("booking.success.toast")}`, description: `${t("service.confirmation.toast")}` });

    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-4 border-b sm:py-6 gap-2">
            <p className="col-span-4 text-center">{t("contact.customerService.header")}</p>
            <div className="col-span-2">
                <Label htmlFor="firstName">{t("contact.customerService.firstName")}:</Label>
                <Input 
                    name="firstName"
                    required
                    value={serviceData.firstName}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.firstName")} 
                />
            </div>
            <div className="col-span-2">
                <Label htmlFor="lastName">{t("contact.customerService.lastName")}:</Label>
                <Input 
                    name="lastName"
                    required
                    value={serviceData.lastName}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.lastName")} 
                />
            </div>
            <div className="sm:col-span-2 col-span-4">
                <Input 
                    name="email" 
                    required
                    value={serviceData.email}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.email")} 
                />
            </div>
            <div className="sm:col-span-1 col-span-2">
                <Input
                    type="tel"
                    name="phone"
                    value={serviceData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.phone1")}
                    required
                />
            </div>
            <div className="sm:col-span-1 col-span-2">
                <Select
                    name="booked"
                    value={serviceData.booked}
                    onValueChange={handleSelectChange("booked")}
                    required
                >
                    <SelectTrigger>
                        <SelectValue placeholder={t("contact.customerService.bookingRequest")} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{t("contact.customerService.bookingRequest")}</SelectLabel>
                            <SelectItem value="Ja">{t("contact.booking.scaffolding1")}</SelectItem>
                            <SelectItem value="Nej">{t("contact.booking.scaffolding2")}</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="col-span-4">
                <Textarea 
                    name="description" 
                    required
                    value={serviceData.description}
                    onChange={handleChange}
                    placeholder={t("contact.customerService.description")} 
                />
            </div>
            <Button 
                size={"sm"} 
                type="submit"   
                className="col-span-4 sm:w-1/2 sm:mx-auto"
            >
                {t("contact.customerService.submitButton")}
            </Button>
        </form>
    )
}