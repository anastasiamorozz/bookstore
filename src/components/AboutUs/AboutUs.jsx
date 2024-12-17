import React from 'react';
import '../AboutUs/AboutUs.css';
function AboutUs() {
  return (
    <div className="aboutUs-container">
      <div className="block-text text color-3">
        BookTime – це молодий інтернет-магазин книг, який стрімко розвивається.
        Наша амбітна команда працює над проєктом, прагнучи створити максимально
        комфортні та вигідні умови для всіх поціновувачів хорошої літератури. Ми
        можемо запропонувати читачам понад 10 тисяч різноманітних книг постійно
        в наявності на складі.
      </div>
      <div className="block-text text color-3">
        <div className="title-text h3 color-2">
          У нас на сайті Ви зможете знайти книги на всі випадки життя:
        </div>
        <ul>
          <li>твори світової класики, які не втратять своєї актуальності; </li>
          <li>бестселери, які вже завоювали визнання читачів усього світу; </li>
          <li>актуальні новинки книжкового світу; </li>
          <li>пізнавальна література на будь-яку тему; </li>
          <li>книги для особистісного зростання і розвитку бізнесу; </li>
          <li>дивовижні книги для дітей; </li>
          <li>інформаційно-довідкові видання; відмінні подарункові книги.</li>
        </ul>
        <div>
          Весь асортимент книжок, представлений на сайті, проходить ретельну
          перевірку. Можливість появи неякісних примірників виключена.
        </div>
      </div>
      <div className="block-text text color-3">
        <div className="title-text h3 color-2">
          Чому Вам варто співпрацювати з нами?
        </div>

        <ul>
          <li>всі позиції, представлені на сайті, є в наявності на складі; </li>
          <li>
          
            ми пропонуємо актуальну літературу і новинки кращих авторів з усього
            світу;
          </li>
          <li>привабливі знижки, цікаві акції та бонуси для наших клієнтів;</li>
          <li>
         
            замовлення буде доставлене в будь-яку точку України в найкоротші
            терміни;
          </li>
          <li>максимально зручні способи оплати для клієнтів; </li>
          <li>налагоджена система зворотного зв'язку. </li>
        </ul>
        <div>
          Ми цінуємо наших клієнтів і завжди раді новим покупцям. Наше завдання
          - зробити Ваше дозвілля корисним, незабутнім і приємним..
        </div>
      </div>
    </div>
  );
}

export default AboutUs;