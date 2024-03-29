import React from "react";
import Input from './index';

import { storiesOf } from "@storybook/react";

const stories=storiesOf('App Test',module);

stories.add('App',()=>{
return (<Button/>);
});

export default{
    title:'My-storybook/Input',
    component:Input
}

export const Small = () =><Input size='small' placeholder='Small size'/>
export const Medium = ()=><Input size='medium' placeholder='Medium size'/>
export const Large = ()=><Input size='large' placeholder='Large size'/>