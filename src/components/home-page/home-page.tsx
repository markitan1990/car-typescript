import s from './home-page.module.scss'
import { ButtonContactUs } from '../button/button'

export function Home() {
    return (
        <>
            <div className={s.home}>
                <div className={s.home_data}>
                    <h1>Покупка и доставка  автомобилей</h1>
                    <p>Поможем подобрать и купить авто из США, Европы,<br/> Южной Кореи и Китая на аукционе без<br/> посредников и переплат</p>
                    <div className={s.home_button}>
                        <ButtonContactUs value="Купить сейчас" className={s.btn_1}/>
                        <ButtonContactUs value="Подробнее" />
                    </div>
                </div>
            </div>
        </>
    );
}