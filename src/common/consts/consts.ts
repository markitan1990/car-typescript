import { CarCardsType } from "./types";

export const testData: CarCardsType[] = [
    {
        id: 1,
        owner: "Mark",
        brand: { car_cards_id: 1, car_name: "Toyota Tacoma", link: "toyota.png" },
        car_mileage: 12000,
        car_year: 2021,
        cost: 1231231,
        images: [{ car_cards_id: 1, link: "car1.png" }],
        car_condition: "НОВАЯ",
        car_engine: 2.1,
        description: "Хорошая машина как новая совсем, всем советую покупать на всю котлету",
        transmission: "Робот"
    },
    {
        id: 2,
        owner: "Mark",
        brand: { car_cards_id: 2, car_name: "Audi Q3 2.0T Prestige", link: "toyota.png" },
        car_mileage: 16000,
        car_year: 2021,
        cost: 45000,
        images: [{ car_cards_id: 2, link: "car2.png" }],
        car_condition: "Б/У",
        car_engine: 1.6,
        description: "Хорошая машина как новая совсем, всем советую покупать на всю котлету",
        transmission: "Робот"
    },
    {
        id: 3,
        owner: "Mark",
        brand: { car_cards_id: 3, car_name: "Audi Q3 2.0T Prestige", link: "toyota.png" },
        car_mileage: 12000,
        car_year: 2021,
        cost: 25000,
        images: [{ car_cards_id: 3, link: "car2.png" }],
        car_condition: "НОВАЯ",
        car_engine: 2.1,
        description: "Хорошая машина как новая совсем, всем советую покупать на всю котлету",
        transmission: "Робот"
    }
]

export const navigateValue = [
    { value: "Главная" },
    { value: "Процесс покупки" },
    { value: "Стоимость доставки" },
    { value: "Авто" },
    { value: "Полезная информация" }
]

export const aboutUsText = [
    { id: 1, value: 'В каком техническом обслуживании нуждается автомобиль?' },
    { id: 2, value: 'Система контроля доступа зарядила электромобиль.' },
    { id: 3, value: 'Система контроля доступа заряда.' },
    { id: 4, value: 'Система контроля доступа заряда электромобиля.' },
    { id: 5, value: 'Система контроля доступа заряда электро.' }
]