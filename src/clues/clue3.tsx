import React from 'react';

interface Step2Props {}

export default function Clue3({
}: Step2Props) {

  return (
    <section>
      <h1 className="font-fjalla">Orientation and Induction</h1>
      <p>
        The Defense Lab welcomes you to the orientation and induction session just as you begin your secret mission.
        Safety procols must be followed strictly during the mission. Solve the below mesage and find the answer. 
        You will need to use the object in teh answer correctly before stepping in the portal machine.
      </p>
      <img src={require("../img/clue1/clue1.png")} alt='clue1' />
    </section>
  );
}