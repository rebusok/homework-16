import React, {useState} from 'react';
import style from './Test.module.scss'
import SuperInputText from "../../Components/c1-SuperInputText/SuperInputText";
import SuperButton from '../../Components/c2-SuperButton/SuperButton';
import SuperCheckbox from "../../Components/c3-SuperCheckbox/SuperCheckbox";


const Test = () => {
    const [text, setText] = useState<string>("");
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <div className={style.wrapped}>
            <SuperInputText
                value={text}
                onChangeText={setText}
            />
            <SuperButton
                className={'buttons'}
            >Test</SuperButton>
            <div>
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}

                >
                    {<span>test</span>}
                </SuperCheckbox>
            </div>

        </div>
    );
};

export default Test;