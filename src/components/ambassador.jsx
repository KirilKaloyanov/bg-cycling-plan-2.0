import { Link } from 'react-router-dom';
import bonevVideo from './images/bonev.mp4';

const Ambassador = (props) => {
  return (
    <div>

      <div className="video_container grid grid--1x2">

        <video className='mp4video' controls>
          <source src={bonevVideo} type="video/mp4" />
        </video>


        <div className="video_description">
          <h2>Посланици за повече хора на велосипед</h2>
          <p>
            Борис Бонев е общински съветник в Столичния общински съвет и създател на гражданската платформа "Спаси София". Разговорът ни с него е част от инициативата Danube Cycling Ambassadors.
          </p>
          <Link className="menu_link" to='ambassadors' onClick={props.onReset}>
            <button className="btn_arrow">Посланици</button>
          </Link>
        </div>
      </div>


    </div>
  );
};

export default Ambassador;
