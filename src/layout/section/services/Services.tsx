import s from "./services.module.scss"
import {ServicesType} from "../../../common/consts/types";
import {servicesData} from "../../../common/consts/consts";
import {Icon} from "../../../components/icon";


export const Services = () => {
    return (
        <div className={s.services}>
            <div className={s.about_services}>
                <div className={s.about_services_container}>
                    <div className={s.blue_text}>
                        <p>Почему мы?</p>
                        <div></div>
                    </div>
                    <h3>Удобные сервисы для покупки авто</h3>
                </div>
                <h4>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к месту
                    назначения, но и полное документальное сопровождение сделки и прозрачное ценообразование.</h4>
            </div>
            <div className={s.services_group}>
                {servicesData.map((i: ServicesType) =>
                    <div key={i.id} className={s.services_item}>
                        <Icon iconId={i.iconId} height={'65'} width={'65'} viewBox={'0 0 65 65'}/>
                        <h5>{i.value}</h5>
                        <p>{i.description}</p>
                    </div>
                )}
            </div>
            <a href="http://localhost:3000/" className={s.link}>
                <span>Хочешь больше узнать о нас?</span>
                <span>Жми</span>
                <Icon iconId={'arrow_up'} height={'16'} width={'16'} viewBox={'0 0 16 16'}/>
            </a>
        </div>
    );
}