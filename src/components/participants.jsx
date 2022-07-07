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

  participants.map((x) => console.log(x.lastName));

  return (
    <div>
      {null || (
        <ol>
          {participants.map((x) => (
            <li key={x._id}>
              {[x.firstName, x.lastName, x.email, x.phone, x.organisation].join(
                " | "
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Participants;
