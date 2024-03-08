import * as React from 'react';
import { Magic } from '../Magic';

interface CardProps {
    title?: string
    children: React.ReactNode
}
export default function Card(props: CardProps) {
    return (
        <article className='max-w-[700px] bg-black grid-cols-4 grid  p-6 rounded-2xl gap-4 justify-evenly border-2 border-[#27272a] '>
            {props.title ? <h2 className='font-pixel text-3xl col-span-4 text-center'>{props.title}</h2> : null}
            {props.children}
        </article >
    );
}