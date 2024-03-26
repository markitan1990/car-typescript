import axios from "axios";
import { ButtonContactUs } from "../header/header";
import "./car-box.css"
import React, { useEffect, useState } from 'react';
import { Image } from "../header/header";


interface CarCards {
    id: number,
    owner: string,
    brand: string,
    car_mileage: number,
    car_year: number,
    cost: number,
    images: ImgCar[]
}

interface ImgCar {
    id: number,
    car_cards_id: number,
    link: string
}

interface Card {
    index: number,
    carCards: CarCards
}

function CarBoxText() {
    return (
        <>
            <div className="car-box-text">
                <div>Автомобили </div>
                <div> в наличии</div>
            </div>
        </>
    );
}

function ContactUsCard() {
    return (
        <>
            <div className="contact_us contact_us_card">
                <ButtonContactUs value="Заказать звонок" />
            </div>
        </>
    );
}

function Content2({ data }: { data: Card }) {
    const img = data.carCards
    return (
        <>
            <div className="content2">
                <div key={data.index} className="content2">
                    <div className="car-img-card">
                        <Image className={img.images[0].link.split(".")[0]}
                            src={`/img/${img.images[0].link}`}
                            alt={img.images[0].link.split(".")[0]} />
                    </div>
                    <h3>{img.brand}</h3>
                    <p>Год - {img.car_year}</p>
                    <p>Цена - {img.cost}$</p>
                    <ContactUsCard />
                </div>
            </div>
        </>
    );
}

function Card({ data }: { data: Card }) {
    return (
        <>
            <div className="card">
                <div className="box">
                    <Content2 data={data} />
                </div>
            </div>
        </>
    );
}

function Container2() {
    const [data, setData] = useState<CarCards[] | undefined>(undefined);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:8080/api/car-cards");
            const carCards: CarCards[] = response.data;
            console.error(carCards);
            setData(carCards);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    }

    return (
        <>
            <div className="container2">
                {data?.map((carData, index) => (
                    <Card data={{ index: index, carCards: carData }} />
                ))}
            </div>
        </>
    );
}

function CardsCars() {
    return <div className="cards-cars"><Container2 /></div>
}

export function CarBox() {
    return (
        <>
            <div className="car-box">
                <CarBoxText />
                <CardsCars />
            </div>
        </>
    );
}