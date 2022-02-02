import type { NextComponentType } from "next";
import React, {useState } from 'react'
import Input from "./Input";
import Button from "./Button";
import Loader from "./Loader";

const Form: NextComponentType = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [load, setLoad] = useState(false);

  const send = () => {
    setLoad(true);
    // TODO: Shortening Logic
    setTimeout(() => setLoad(false), 2000)
  }

  return (
    <div className='grid'>
      {!load ? <div>
        <Input placeholder='Insert URL' value={url} required={true} textChange={setUrl} type='text' />
        <Input placeholder='Insert Slug' value={slug} required={false} textChange={setSlug} type='text' />
        <Button text='Create' click={() => send()} />
      </div> : <Loader />}
    </div>
  )
}

export default Form;