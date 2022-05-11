import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./index";

const stories=storiesOf('App Test',module);

stories.add('App',()=>{
return (<Button/>);
});

export  default {
    title:'My-storybook/Button',
    component:Button
}

export const Primary= () =><Button variant='primary'>Primary</Button>
export const Secondary= () =><Button variant='secondary'>Secondary</Button>
export const Success= () =><Button variant='success'>Success</Button>
export const Danger= () =><Button variant='danger'>Danger</Button>