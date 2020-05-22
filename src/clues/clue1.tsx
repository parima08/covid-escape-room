import React from 'react';

interface Clue1Props {}

export default function Clue1({
}: Clue1Props) {
  console.log('Clue1');
  const checkPassword = (e) => {
    console.log('checking password');
  }
  return (
    <section>
      <h1 className="font-fjalla">Orientation and Induction</h1>
      <p>
        The Defense Lab welcomes you to the orientation and induction session just as you begin your secret mission.
        Safety procols must be followed strictly during the mission. Solve the below mesage and find the answer. 
        You will need to use the object in the answer correctly before stepping in the portal machine.
      </p>
      <img src={require("../img/clue1/clue1.png")} alt='clue1' />
      <form onSubmit={checkPassword}>
        <input 
          type = 'text'
        />
        <input
          type='submit'
        />
      </form>
    </section>
  );
}