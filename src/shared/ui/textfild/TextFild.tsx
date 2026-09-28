import { memo } from 'react';

interface ITextFild{
    text: string;
    classname: string;
}

function TextFild(props: ITextFild) {
    return (
    <>
    <div className={props.classname}>
        <p>{props.text}</p>
    </div>
    </>
    );
}

export default memo(TextFild);