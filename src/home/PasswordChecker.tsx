import React, { useRef, useState } from 'react';
import mountCongratsModal from '../components/mountCongratsModal';
import { mountSorryWrongAnswer } from '../clues/SorryWrongAnswerModal';
import { setLastSolvedClue } from '../redux/actions';
import { useCookies } from 'react-cookie';

interface PasswordCheckerProps {
    solution: string;
    step: number;
}

export default function PasswordChecker({
    solution,
    step
}: PasswordCheckerProps) {
    const itemsRef = useRef<Array<HTMLDivElement>>([])
    const [password, setPassword] = useState<any>([]);
    const MAX_LENGTH = 1;
    const [cookies, setCookie, removeCookie] = useCookies(['lastSolvedClue']);


    console.log(step);

    const checkPassword = (e) => {
        e.preventDefault();
        const finalPassword = password.join('');
        console.log(finalPassword);
        if(finalPassword === solution){
            setLastSolvedClue(step + 1);
            setCookie('lastSolvedClue', step + 1);
            mountCongratsModal({step});
        }
        else{
            mountSorryWrongAnswer({});
        }
        //if the password works, show congrats modal and unlock the next level
      }


    const handleChange = (e, i) => {
        const newPassword : any[] = [...password];
        newPassword[i] = e.target.value;
        setPassword(newPassword);
        if(e.target.value.length >= MAX_LENGTH){
          itemsRef.current[i] !=null && itemsRef.current[i].blur();
          if(i + 1 < itemsRef.current.length){
            itemsRef.current[i + 1].focus();
          }
        }
        if(e.target.value.length === 0){
          itemsRef.current[i] !=null && itemsRef.current[i].blur();
          if(i + 1 < itemsRef.current.length){
            itemsRef.current[i + 1].focus();
          }
        }
      }

    const passwordInput = (index) => (
        <input
            key={`input${index}`}
            className='password-input'
            type = 'text'
            placeholder="•"
            maxLength={1}
            onChange={ e => handleChange(e, index)}
            ref={el => el !== null ?itemsRef.current[index] = el : null} 
        />
    );

    const solutionArr : string[] = Array.from(solution); 

    const spacer = (
        <div className="spacer" />
    );

    const lock = solutionArr.map( (char, index) => {
        if(char === ' '){
            return spacer;
        }
        else{
            return passwordInput(index)
        }
    })
    return (
        <form onSubmit={checkPassword}>
            {lock}
            <input
                type='submit'
                value="Unlock!"
            />
        </form>
    );
}