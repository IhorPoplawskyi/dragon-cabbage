import style from './MainPage.module.css'
import { IconsBar } from '../../components/IconsBar/IconsBar'

export const MainPage = () => {
  return (
    <div className={style.Wrapper}>
      <IconsBar />
    </div>
  )
}
