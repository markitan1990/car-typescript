import s from './contact-data.module.scss'
import t from './../home-page/home-psge.module.scss'

export function ContactData() {
    return (
        <>
            <div className={s.contact_data}>
                <div className={s.home_data}>
                    <h1>Покупка и доставка  автомобилей</h1>
                    <p>Поможем подобрать и купить авто из США, Европы,<br/> Южной Кореи и Китая на аукционе без<br/> посредников и переплат</p>
                    <div className={t.home_button}>
                     
                    </div>
                </div>
            </div>
        </>
    );
}