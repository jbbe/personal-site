import React, { useState } from 'react'
import { useInterval } from '../../hooks/UseInterval';

interface Props {
    texts: string[];
    interval: number;
}

const SpinInterval = 10;

export const Typewriter = (props: Props) => {
    const { texts, interval } = props;
    const [textIdx, setTextIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [spinTime, setSpinTime] = useState(0);

    useInterval(() => {
        if (charIdx < texts[textIdx].length) {
            setCharIdx(charIdx + 1);
        } else if (spinTime < SpinInterval) {
            setSpinTime(spinTime + 1)
        } else {
            setSpinTime(0);
            setCharIdx(0);
            console.log(textIdx < texts.length - 1 ? textIdx + 1 : 0)
            setTextIdx(textIdx < texts.length - 1 ? textIdx + 1 : 0)
        }
    }, interval)

    // console.log(texts, texts[textIdx], texts.length, textIdx, charIdx, spinTime)
    return (
        <div className='typewriter'>
            <h5>{texts[textIdx].substr(0, charIdx) || ' '}</h5>
        </div>
    )
}
