import '../Styles/Aloqa.css'

const Aloqa = () => {
    return (
        <div className='aloqa'>
            <h2>
                Оставьте заявку на бесплатную консультацию
            </h2>



            <div className='fon'>


                <div className='inputlar'>

                    <div className='login'>
                        <div>
                            <h5>Имя *</h5>
                            <input className='login-left-input' type="text" placeholder='Введите своё имя...' />
                        </div>

                        <div>
                            <h5>Телефон*</h5>
                            <input className='login-right-input' type="text" placeholder='+7 (000)000-00-00' />
                        </div>

                    </div>



                    <div className='coment'>
                        <h3>Комментарий</h3>
                        <input className='inputs' type="text" placeholder='Уточните  детали заказа...' />
                    </div>
                    <div className='tugmalar'>
                        <h3>Выбрать время звонка:</h3>
                        <button>с 6:00 до 12:00</button>
                        <button>с 12:30 до 18:00</button>
                        <button>с 18:30 до 00:00</button>
                    </div>

                    <div className='resent'>
                        <button>Оставить заявку</button>
                        <br />
                        <img src="./public/images/image 131.png" alt="" />
                    </div>

                    <p className='p'>Нажимая на кнопку Отправить, вы соглашаетесь  с политикой конфиденциальности.</p>
                </div>


                <div className='media'>

                    <div className='aloqa-info'>
                        <h1>
                            <img className='mail' src="./public/images/mail.png" alt="" />
                            <div> contact@company.com</div>
                        </h1>

                        <h6>
                            <img src="./public/images/telefon.png" alt="" />
                            <div> (123) 456 - 789</div>
                        </h6>


                    </div>

                    <div className='social-medialar'>
                        <img className='social-media' src="./public/images/social-media.png" alt="" />

                    </div>

                </div>


            </div>





        </div>
    )
}

export default Aloqa