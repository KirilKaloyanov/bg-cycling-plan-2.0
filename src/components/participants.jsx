import { useState, useEffect } from "react";
import { getParticipants } from "./../services/participantService";

const Participants = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    async function getData() {
      let arr = await getParticipants();
      setParticipants(arr.data);
    }
    getData();
  }, []);

  if (participants.length === 0) return <h1>... отивам до базата данни. След малко се връщам...</h1>;


  return (
    <div>
      {null || (
        <div>
        <h1>Регистрирали са се: {participants.length} участници.</h1>
        <br />
        <table>
          <thead>
            <tr>
              <td>Име</td>
              <td>Фамилия</td>
              <td>email</td>
              <td>Телефон</td>
              <td>Организация</td>
            </tr>
          </thead>
          <tbody>

            {participants.map((x) => (
              <tr key={x._id}>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.email}</td>
                <td>{x.phone}</td>
                <td>{x.organisation}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
      )}
    </div>
  );
};

export default Participants;
