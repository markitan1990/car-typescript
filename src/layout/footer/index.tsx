import s from './index.module.scss'
import {Icon, Logo} from "../../components";
import {useWindowSize} from "react-use";
import {useMemo} from "react";


export function Footer() {
    const {width} = useWindowSize()
    const isMobile = useMemo(() => width > 582, [width])
    return (
        <footer className={s.footer}>
            <div className={s.footer_wrapper}>
                <Logo/>
                {isMobile &&
                    <div className={s.icons}>
                        <Icon iconId={'youtube'} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                        <Icon iconId={'telegram'} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                        <Icon iconId={'vk'} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                    </div>}
            </div>
        </footer>
    )
}
