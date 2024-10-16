import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import styled from "styled-components";
import React, { useState } from "react";

const render = () => {
return (
    <Block>
        <Input render={(value) => {
            return (<div>{value}</div>)
        }}/>
    </Block>
)
}

render.getLayout = getLayout

export default render

const Block = styled.div`
    padding: 20px;
    border: 1px solid #facaff;
`

type InputProps = {
    render: (value: string) => React.ReactElement
}
const Input = (props: InputProps) => {

    const [value, setValue] = useState('');
    return(
        <>
        <input type={"text"} value={value} onChange={(e) => setValue(e.currentTarget.value)} />
            {props.render(value)}
        </>
    )
}