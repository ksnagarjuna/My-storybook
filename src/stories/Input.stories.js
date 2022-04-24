import React from "react";
import {Input} from '../components/Input';

import { storiesOf } from "@storybook/react";

const stories=storiesOf('App Test',module);

stories.add('App',()=>{
return (<Button/>);
});

export default{
    title:'Input',
    component:Input
}

export const Small = () =><Input size='small' placeholder='Small size'/>
export const Medium = ()=><Input size='medium' placeholder='Medium size'/>
export const Large = ()=><Input size='large' placeholder='Large size'/>