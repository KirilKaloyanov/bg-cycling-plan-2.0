const Ambassadors = () => {
  return (
    <div>
      <br />
      <h1 className="align_center">
        Посланици на каузата за повече хора на велосипед
      </h1>
      <br />
      <div className="video_container grid grid--1x2">
        <iframe
          className="video_container_yt"
          src="https://www.youtube.com/embed/mPzEmOx3Dyo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="video_description">
          <h2>Борислав Сандов</h2>
          <p>
            Народен представител в 45-тото народно събрание и съпредседател на
            Зелено движение
          </p>
        </div>
      </div>
      <div className="video_container grid grid--1x2">
        <iframe
          className="video_container_yt"
          src="https://www.youtube.com/embed/NsCY0mnaOR4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="video_description">
          <h2>д-р Александър Симидчиев</h2>
          <p>
            Народен представител в 46-тото Народно събрание, обединение
            Демократична България
          </p>
        </div>
      </div>
      <div className="video_container grid grid--1x2">
        <iframe
          className="video_container_yt"
          src="https://www.youtube.com/embed/uI_QCpMjId4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
