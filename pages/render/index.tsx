import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import styled from "styled-components";
import React, { useState } from "react";
import fs from 'fs/promises'
import * as path from "node:path";

export const getStaticProps = async () => {
  const getParsedData = async (): Promise<{title: string}> => {
    const filePath = path.join(process.cwd(), 'public', 'staticData.json')
    try {
      const jsonData = await fs.readFile(filePath)
      return JSON.parse(jsonData.toString())
    } catch (error) {
      return {title: 'No title'}
    }
  }

  const {title} = await getParsedData()

  return {
    props: {
      title
    }
  }
}

type PropsType = {
  title: string
}

const render = (props: PropsType) => {
  console.log(props)
  return (
    <Block>
      <p>Title: {props.title}</p>
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