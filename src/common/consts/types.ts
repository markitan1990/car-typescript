export type CarCardsType = {
    id: number;
    owner: string;
    brand: BrandType;
    car_mileage: number;
    car_year: number;
    cost: number;
    car_condition: string;
    car_engine: number;
    description: string;
    transmission: string;
    images: ImgCarType[];
}

export type ImgCarType = {
    car_cards_id: number,
    link: string
}

export type BrandType = {
    car_cards_id: number,
    car_name: string,
    link: string
}

export type CardType = {
    index: number,
    carCards: CarCardsType
}

export type AboutUsTextType = {
    id: number,
    value: string
}

export type ServicesType = {
    id: number,
    iconId: string,
    value: string,
    description: string
}

