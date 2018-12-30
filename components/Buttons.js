import React from 'react';
import Button from './Button';
import {
    Plus,
    Minus,
    Cross,
    Play,
    Stop,
    Retry
} from './Icons';

export const ButtonPlus = (props) => <Button {...props}><Plus /></Button>;
export const ButtonMinus = (props) => <Button {...props}><Minus /></Button>;
export const ButtonCross = (props) => <Button {...props}><Cross /></Button>;
export const ButtonPlay = (props) => <Button {...props}><Play /></Button>;
export const ButtonStop = (props) => <Button {...props}><Stop /></Button>;
export const ButtonRetry = (props) => <Button {...props}><Retry /></Button>;