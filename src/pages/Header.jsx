import '../style/Header.css'

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='nav'>
          <div className='nav-list'>
            <img src="/images/sdr.svg" alt="" />
          </div>
          <div className='nav-cont'>
            <h2>+7 (928) 682  29-72</h2>
            <h2>Услуги ^</h2>
            <h2>Вакансии</h2>
            <h2> Контакты</h2>
            <h2>О нас</h2>
            <img src="/images/nmi.png" alt="" />
          </div>
        </div>
        <div className='hero'>
          <h2>
            УСЛУГИ ГРУЗЧИКОВ И ГРУЗОВОГО ТРАНСПОРТА
          </h2>
        </div>
        <div className='hero-list'>
          <img src="/images/nog.png" alt="" />
          <h2>Доступные цены</h2>
        </div>
        <div className='hero-list-mk'>
          <img src="/images/nog.png" alt="" />
          <h2>На рынке более 7 лет</h2>
        </div>
        <div className='hero-list-hj'>
          <img src="/images/nog.png" alt="" />
          <h2>Ответственный и опытный персонал</h2>
        </div>
        <div className='hero-list-lk'>
          <img src="/images/nog.png" alt="" />
          <h2>Ответственный и опытный персонал</h2>
        </div>
        <div className='hero-list-ds'>
          <img src="/images/nog.png" alt="" />
          <h2>Срочная подача рабочих и транспорта</h2>
        </div>
        <div className='hero-list-er'>
          <img src="/images/nog.png" alt="" />
          <h2>Полная материальная ответственность за имущество</h2>
        </div>


        <div className='hero-logo'>
          <img src="/images/jin.jpg" alt="" />
        </div>
      </div>
      <div className='hero-logo-mhg'>
        <img src="/images/mhd.png" alt="" />
        <img src="/images/mjg.png" alt="" />
      </div>
    </>
  )
}

export default Header