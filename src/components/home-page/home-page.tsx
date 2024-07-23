import './home-page.css'
import { ButtonContactUs } from '../button/button'

export function Home() {
    return (
        <>
            <div className="home">
                <div className='home-data'>
                    <h1>Покупка и доставка  автомобилей</h1>
                    <p>Поможем подобрать и купить авто из США, Европы,<br/> Южной Кореи и Китая на аукционе без<br/> посредников и переплат</p>
                    <div className='home-button'>
                        <ButtonContactUs value="Купить сейчас" className='btn-1'/>
                        <ButtonContactUs value="Подробнее" />
                    </div>
                </div>
            </div>
        </>
    );
}