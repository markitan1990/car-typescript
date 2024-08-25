import { AboutUsTextType, CarCardsType, InfoDataType, ServicesType } from './types'
import {z} from "zod";

export const testData: CarCardsType[] = [
  {
    id: 1,
    owner: 'Mark',
    brand: { car_cards_id: 1, car_name: 'Toyota Tacoma', link: 'toyota.png' },
    car_mileage: 12000,
    car_year: 2021,
    cost: 1231231,
    images: [{ car_cards_id: 1, link: 'car1.png' }],
    car_condition: 'НОВАЯ',
    car_engine: 2.1,
    description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
    transmission: 'Робот',
  },
  {
    id: 2,
    owner: 'Mark',
    brand: { car_cards_id: 2, car_name: 'Audi Q3 2.0T Prestige', link: 'toyota.png' },
    car_mileage: 16000,
    car_year: 2021,
    cost: 45000,
    images: [{ car_cards_id: 2, link: 'car2.png' }],
    car_condition: 'Б/У',
    car_engine: 1.6,
    description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
    transmission: 'Робот',
  },
  {
    id: 3,
    owner: 'Mark',
    brand: { car_cards_id: 3, car_name: 'Audi Q3 2.0T Prestige', link: 'toyota.png' },
    car_mileage: 12000,
    car_year: 2021,
    cost: 25000,
    images: [{ car_cards_id: 3, link: 'car2.png' }],
    car_condition: 'НОВАЯ',
    car_engine: 2.1,
    description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
    transmission: 'Робот',
  },
  {
    id: 4,
    owner: 'Mark',
    brand: { car_cards_id: 1, car_name: 'Toyota Tacoma', link: 'toyota.png' },
    car_mileage: 12000,
    car_year: 2021,
    cost: 1231231,
    images: [{ car_cards_id: 1, link: 'car1.png' }],
    car_condition: 'НОВАЯ',
    car_engine: 2.1,
    description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
    transmission: 'Робот',
  },
  {
    id: 5,
    owner: 'Mark',
    brand: { car_cards_id: 2, car_name: 'Audi Q3 2.0T Prestige', link: 'toyota.png' },
    car_mileage: 16000,
    car_year: 2021,
    cost: 45000,
    images: [{ car_cards_id: 2, link: 'car2.png' }],
    car_condition: 'Б/У',
    car_engine: 1.6,
    description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
    transmission: 'Робот',
  },
  {
    id: 6,
    owner: 'Mark',
    brand: { car_cards_id: 3, car_name: 'Audi Q3 2.0T Prestige', link: 'toyota.png' },
    car_mileage: 12000,
    car_year: 2021,
    cost: 25000,
    images: [{ car_cards_id: 3, link: 'car2.png' }],
    car_condition: 'НОВАЯ',
    car_engine: 2.1,
    description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
    transmission: 'Робот',
  },
]

export const navigateValue = [
  { value: 'Главная' },
  { value: 'Процесс покупки' },
  { value: 'Стоимость доставки' },
  { value: 'Авто' },
  // {value: "Полезная информация"}
]

export const aboutUsText: AboutUsTextType[] = [
  { id: 1, value: 'В каком техническом обслуживании нуждается автомобиль?' },
  { id: 2, value: 'Система контроля доступа зарядила электромобиль.' },
  { id: 3, value: 'Система контроля доступа заряда.' },
  { id: 4, value: 'Система контроля доступа заряда электромобиля.' },
  { id: 5, value: 'Система контроля доступа заряда электро.' },
]
export const servicesData: ServicesType[] = [
  {
    id: 1,
    iconId: 'price',
    value: 'Самые низкие цены',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    iconId: 'agreement',
    value: 'Работа по договору',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    iconId: 'cargo',
    value: 'Отслеживание груза',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    iconId: 'check',
    value: 'Отслеживание груза',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const infoData: InfoDataType[] = [
  {
    id: 1,
    title: 'Audi 2021 E-Tron 1',
    description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 1.',
    className: 'button1',
  },
  {
    id: 2,
    title: 'Audi 2021 E-Tron 2',
    description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 2.',
    className: 'button2',
  },
  {
    id: 3,
    title: 'Audi 2021 E-Tron 3',
    description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 3.',
    className: 'button3',
  },
  {
    id: 4,
    title: 'Audi 2021 E-Tron 4',
    description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 4.',
    className: 'button4',
  },
  {
    id: 5,
    title: 'Audi 2021 E-Tron 5',
    description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 5.',
    className: 'button5',
  },
]

export const loginSchema = z.object({
  name: z.string().min(3).max(30),
  phone: z.string()
      .min(10, 'Phone number should have at least 10 digits')
      .max(15, 'Phone number should have at most 15 digits')
      .regex(/^\+?\d{10,15}$/, 'Invalid phone number format'),
});