import axios from "axios";
import "./car-box.css"
import React, { useEffect, useState } from 'react';
import { Image } from "../header/header";


interface CarCards {
    id: number;
    owner: string;
    brand: Brand;
    car_mileage: number;
    car_year: number;
    cost: number;
    car_condition: string;
    car_engine: number;
    description: string;
    transmission: string;
    images: ImgCar[];
}

interface ImgCar {
    id: number,
    car_cards_id: number,
    link: string
}
interface Brand {
    id: number,
    car_cards_id: number,
    car_name: string,
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
                <h4>Посмотрите наши автомобили в наличии</h4>
                <h3>Лучшие Автомобили На Рынке</h3>
                <h5>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к месту назначения, но и полное документальное сопровождение сделки и прозрачное ценообразование.</h5>
            </div>
        </>
    );
}

function Content2({ data }: { data: Card }) {
    const car_data = data.carCards

    const formatNumber = (number: number) => {
        return number.toLocaleString('en-US');
    };

    const getConditionStyle = (condition: string) => {
        return condition === "НОВАЯ" ? { backgroundColor: '#43C850D9', color: 'white' } : { backgroundColor: '#F4BA23D9', color: 'white' };
    };

    return (
        <>
            <div key={data.index} className="content2">
                <div className="car-img-card">
                    <Image className={car_data.images[0].link.split(".")[0]}
                        src={`/img/${car_data.images[0].link}`}
                        alt={car_data.images[0].link.split(".")[0]} />
                    <div className="condition" style={getConditionStyle(car_data.car_condition)}>
                        {car_data.car_condition}
                    </div>
                    <div className="engine">{car_data.car_engine} л</div>
                    <div className="cost">$ {formatNumber(car_data.cost)}</div>
                </div>
                <div className="info-box">
                    <div className="brand-box">
                        <div>
                            {car_data.car_year + "  "}
                            {car_data.brand.car_name}
                        </div>
                        <Image className={car_data.brand.link.split(".")[0]}
                            src={`/img/brand/${car_data.brand.link}`}
                            alt={car_data.brand.link.split(".")[0]} />
                    </div>
                    <div className="description">
                        {car_data.description}
                    </div>
                    <div className="space-line"></div>
                </div>
                <div className="data-box">
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.25 14.25H3.75V6H14.25M12 0.75V2.25H6V0.75H4.5V2.25H3.75C2.9175 2.25 2.25 2.9175 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H13.5V0.75M12.75 9H9V12.75H12.75V9Z" fill="#393939" />
                        </svg>
                        {car_data.car_year}
                    </div>
                    <div>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8126 8.50008C13.8126 8.33716 13.8055 8.18133 13.7914 8.01841L15.1089 7.01966C15.3922 6.80716 15.4701 6.4105 15.293 6.09883L13.9685 3.81091C13.8835 3.66088 13.7462 3.54752 13.5827 3.4926C13.4193 3.43769 13.2413 3.4451 13.083 3.51341L11.5601 4.158C11.298 3.97383 11.0218 3.81091 10.7314 3.67633L10.526 2.04008C10.4835 1.68591 10.1789 1.41675 9.82471 1.41675H7.18263C6.82138 1.41675 6.5168 1.68591 6.4743 2.04008L6.26888 3.67633C5.97846 3.81091 5.70221 3.97383 5.44013 4.158L3.91721 3.51341C3.59138 3.37175 3.20888 3.49925 3.0318 3.81091L1.70721 6.10592C1.53013 6.41758 1.60805 6.80717 1.89138 7.02675L3.20888 8.0255C3.17952 8.34357 3.17952 8.66367 3.20888 8.98175L1.89138 9.9805C1.60805 10.193 1.53013 10.5897 1.70721 10.9013L3.0318 13.1892C3.20888 13.5009 3.59138 13.6284 3.91721 13.4867L5.44013 12.8422C5.70221 13.0263 5.97846 13.1892 6.26888 13.3238L6.4743 14.9601C6.5168 15.3142 6.82138 15.5834 7.17555 15.5834H9.81763C10.1718 15.5834 10.4764 15.3142 10.5189 14.9601L10.7243 13.3238C11.0147 13.1892 11.291 13.0263 11.553 12.8422L13.076 13.4867C13.4018 13.6284 13.7843 13.5009 13.9614 13.1892L15.286 10.9013C15.463 10.5897 15.3851 10.2001 15.1018 9.9805L13.7843 8.98175C13.8055 8.81883 13.8126 8.663 13.8126 8.50008ZM8.52846 10.9792C7.16138 10.9792 6.0493 9.86717 6.0493 8.50008C6.0493 7.133 7.16138 6.02092 8.52846 6.02092C9.89555 6.02092 11.0076 7.133 11.0076 8.50008C11.0076 9.86717 9.89555 10.9792 8.52846 10.9792Z" fill="#393939" />
                        </svg>
                        {car_data.transmission}
                    </div>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00017 10.6667C7.46973 10.6667 6.96102 10.456 6.58595 10.0809C6.21088 9.70581 6.00017 9.1971 6.00017 8.66667C6.00017 7.92 6.40683 7.26667 7.00017 6.92667L13.4735 3.18L9.78683 9.56667C9.4535 10.22 8.78017 10.6667 8.00017 10.6667ZM8.00017 2C9.20683 2 10.3335 2.33333 11.3135 2.88L9.9135 3.68667C9.3335 3.46 8.66683 3.33333 8.00017 3.33333C6.58568 3.33333 5.22912 3.89524 4.22893 4.89543C3.22874 5.89562 2.66683 7.25218 2.66683 8.66667C2.66683 10.14 3.26017 11.4733 4.22683 12.4333H4.2335C4.4935 12.6933 4.4935 13.1133 4.2335 13.3733C3.9735 13.6333 3.54683 13.6333 3.28683 13.38C2.66685 12.7617 2.17512 12.0271 1.83991 11.2182C1.50469 10.4094 1.3326 9.54224 1.3335 8.66667C1.3335 6.89856 2.03588 5.20286 3.28612 3.95262C4.53636 2.70238 6.23206 2 8.00017 2ZM14.6668 8.66667C14.6668 10.5067 13.9202 12.1733 12.7135 13.38C12.4535 13.6333 12.0335 13.6333 11.7735 13.3733C11.7117 13.3117 11.6627 13.2384 11.6292 13.1577C11.5958 13.0771 11.5785 12.9906 11.5785 12.9033C11.5785 12.816 11.5958 12.7296 11.6292 12.6489C11.6627 12.5683 11.7117 12.495 11.7735 12.4333C12.2693 11.9396 12.6624 11.3525 12.9302 10.706C13.1979 10.0595 13.335 9.36641 13.3335 8.66667C13.3335 8 13.2068 7.33333 12.9735 6.73333L13.7802 5.33333C14.3335 6.33333 14.6668 7.45333 14.6668 8.66667Z" fill="#393939" />
                        </svg>
                        {formatNumber(car_data.car_mileage)}
                    </div>
                </div>
            </div>
        </>
    );
}

function CardBox({ data }: { data: Card }) {
    return (
        <>
            <div className="card">
                <Content2 data={data} />
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

            const shuffled = carCards.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 6);

            setData(selected);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    }

    return (
        <div className="container2">
            {data?.map((carData, index) => (
                <CardBox key={index} data={{ index: index, carCards: carData }} />
            ))}
        </div>
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