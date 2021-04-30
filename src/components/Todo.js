 import React from 'react';
import Button from '@atlaskit/button';
import styled, {css} from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
 
const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &, &:hover{
        ${(p) => 
            p.isCompleted && 
            css`
              text-decoration: line-through;
            `
        }
    }
    
    &:hover {
        .check-icon {
            display: inline-block;
        }
    }

    .check-icon{
        display: none;

        &:hover {
            background-color: #e2e2e2;
            border-radius: 4px;
        }
    }
`;
 export default function Todo( {todo, onBtnClickCheckId}) {
     return (
         <ButtonStyled 
         isCompleted={todo.isCompleted}
         shouldFitContainer iconAfter={
             !todo.isCompleted && (
            <span className='check-icon' onClick={() => onBtnClickCheckId(todo.id)}>
                <CheckIcon primaryColor='blue'/>
            </span>
            )
         }>{todo.name}</ButtonStyled>
     )
 }
 