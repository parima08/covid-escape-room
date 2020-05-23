import React, { useState, createRef, useRef } from 'react';

interface Clue1Props {}

export default function Clue1({
}: Clue1Props) {
    // add or remove refs
  const [password, setPassword] = useState<any>([]);
  /* tslint-ignore */
  const itemsRef = useRef<Array<HTMLDivElement | null>>([])
  const arrLength = 3;
  const MAX_LENGTH = 1;

  const checkPassword = (e) => {
    e.preventDefault();
    const finalPassword = password.join('');
    console.log(finalPassword);
  }
  const handleChange = (e, i) => {
    const newPassword : any[] = [...password];
    // password.map( (p, index) => index === i ? e.target.value : p);
    newPassword[i] = e.target.value;
    setPassword(newPassword);
    if(e.target.value.length >= MAX_LENGTH){
      itemsRef.current[i] !=null && itemsRef.current[i].blur();
      if(i + 1 < itemsRef.current.length){
        itemsRef.current[i + 1].focus();
      }
    }
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
      <div className='password-container'>
        <form onSubmit={checkPassword}>
          <input 
            placeholder="•"
            maxLength={1}
            className='password-input'
            onChange={ e => handleChange(e, 0)}
            ref={el => itemsRef.current[0] = el} 
          />
          <input
            className='password-input'
            type = 'text'
            placeholder="•"
            maxLength={1}
            onChange={ e => handleChange(e, 1)}
            ref={el => itemsRef.current[1] = el} 
          />
          <input
            className='password-input'
            type = 'text'
            placeholder="•"
            maxLength={1}
            onChange={ e => handleChange(e, 2)}
            ref={el => itemsRef.current[2] = el} 
          />
          <input
            type='submit'
            value="Unlock!"
          />
        </form>
      </div>
    </section>
  );
}