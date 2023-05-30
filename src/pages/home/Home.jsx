import Tahir from '../home/img/avatar.png'
import Mlist from '../../Mlist'
import'../../styles.css'
import { useContext } from 'react'
import ThemeContext from '../../component/context/ThemeContext'


const Home = () => {

  const {theme}=useContext(ThemeContext)
  
  return (
    <>
    <section className={`home-sec1 ${theme === 'dark' ? 'dark-theme-home' : ''}`}>
      <div className="container w-4/5 m-auto">
        <div className="row w-100 flex items-center ">
          <div className="boxes w-3/6">
<img src={Tahir}/>
          </div>
          <div className="boxes2 w-3/6">
<Mlist name='Tahir'/>
          </div>
        </div>
      </div>
      
    </section>
    <section id="api-sec w-full h-auto">
      <div className="container w-3/4"></div>
    </section>
    </>
  )
}

export default Home