import sandov from './images/sandov.jpg';
import bonev from './images/bonev.jpg';
import simidchiev from './images/simidchiev.jpg';

const Ambassadors = () => {
  return (
    <div>

      <br />

      <h2 className="section heading">
        Посланици на каузата за повече хора на велосипед
      </h2>

      <br />

      <div className="video_container grid grid--1x2">
        <a href='https://www.youtube.com/watch?v=mPzEmOx3Dyo' target="_blank" rel="noreferrer">
          <img src={sandov} alt="Link to a Youtube video" className="video_container_yt" />
        </a>
        <div className="video_description">
          <h2>Борислав Сандов</h2>
          <p>
            Народен представител в 45-тото народно събрание и съпредседател на
            Зелено движение
          </p>
        </div>
      </div>

      <div className="video_container grid grid--1x2">
        <a href='https://www.youtube.com/watch?v=NsCY0mnaOR4' target="_blank" rel="noreferrer">
          <img src={simidchiev} alt="Link to a Youtube video" className="video_container_yt" />
        </a>

        <div className="video_description">
          <h2>д-р Александър Симидчиев</h2>
          <p>
            Народен представител в 46-тото Народно събрание, обединение
            Демократична България
          </p>
        </div>
      </div>

      <div className="video_container grid grid--1x2">
        <a href='https://www.youtube.com/watch?v=uI_QCpMjId4' target="_blank" rel="noreferrer">
          <img src={bonev} alt="Link to a Youtube video" className="video_container_yt" />
        </a>

        <div className="video_description">
          <h2>Борис Бонев</h2>
          <p>
            общински съветник в Столична община и основател на гражданска
            организация Спаси София
          </p>
        </div>
      </div>

    </div>
  );
};

export default Ambassadors;
