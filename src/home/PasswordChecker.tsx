import React, { useRef, useState } from 'react';
import mountCongratsModal from '../components/mountCongratsModal';
import { mountSorryWrongAnswer } from '../clues/SorryWrongAnswerModal';
import { setLastSolvedClue } from '../redux/actions';
import { useCookies } from 'react-cookie';
import CongratsModal from '../clues/CongratsModal';

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const solutionNoSpaces = solution.replace(' ', '').toLowerCase();
    
    console.log(step);

    const checkPassword = (e) => {
        e.preventDefault();
        const finalPassword = password.join('').toLowerCase();
        console.log(solutionNoSpaces, finalPassword);
        if(finalPassword === solutionNoSpaces){
            setLastSolvedClue(step + 1);
            setCookie('lastSolvedClue', step + 1);
            setIsModalOpen(true);
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
            (itemsRef.current[i + 1] || itemsRef.current[i+2]).focus();
          }
        }
        if(e.target.value.length === 0){
          itemsRef.current[i] !=null && itemsRef.current[i].blur();
          if(i + 1 < itemsRef.current.length){
            (itemsRef.current[i + 1] || itemsRef.current[i+2]).focus();
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
        <>
            <form onSubmit={checkPassword}>
                {lock}
                <input
                    className='unlock-button'
                    type='submit'
                    value="Unlock!"
                />
            </form>
            {isModalOpen && <CongratsModal onClose={() => setIsModalOpen(false)} step={step}/>}
        </>
    );
}