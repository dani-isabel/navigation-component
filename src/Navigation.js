import React from 'react';
import styled from 'styled-components';

const Navigation = (props) => {
    const {
        className,
        name,
        classLink
    } = props;
    return (
        <header className={className}>
            <h3>{name}</h3>
            <nav>
                <ul>
                    <a className={classLink} href="/">Home</a>
                    <a className={classLink} target="_blank" href="https://www.linkedin.com/in/daniela-isabel-bolivar/">About</a>
                    <a className={classLink} target="_blank" href="https://github.com/dani-isabel">Projects</a>
                </ul>
            </nav>
        </header>
    )
}

const StyledNavigation = styled(Navigation) `
    &.dark {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color:purple;
        color:white;
        font-family: Calibri;
        display:flex;
    }
    & .link {
        margin-left:10%;
        text-decoration:none;
        color:white;
        &:hover {
            text-decoration: underline;
        }
    }
`

export { StyledNavigation };