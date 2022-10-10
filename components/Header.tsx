import React from 'react'
import styles from './Header.module.css';
/*
Existem 5 maneiras diferentes de utilizar CSS no React:
1. CSS puro (não recomendado) - Ex arquivo.css
2.CSS Modules - Ex. arquivo.modules.css
3. SaSS
4. Styled Components - Ex. arquivo.tsx
5. Emotion - pode usar a função CSS ou o component styled

A melhor é a que o seu time utiliza.
*/

import { css} from '@emotion/css';
import styled from '@emotion/styled';
import Link from 'next/link';

//styled-components;
const HeaderPage = styled.header`
width: 100%;
height: 100px;
background: rgb(247, 243, 232);
display: flex;
align-items: center;
justify-content: space-between;
& > div:first-child, 
& > div:last-child { 
  margin: 0 5%;
}
`;


const NavMenu = styled.nav`
width: 50%;
display: flex;
justify-content: center;
height: 50px;
& a:hover {
    font-Weight: bold;
} li {
    margin-top: 4px;
    border-bottom: 4px solid transparent;
    padding-bottom: 20px;
}
li:hover {
    border-bottom: solid 2px orange;
}
`;


const SearchBar = styled.input `
    border: none;
    border-radius: 10px;
    padding: 2px 10px;
    height: 30px;
`;
const SearchButton = styled.button `
    border: none;
    border-radius: 10px;
    height: 30px;
    margin-left: 5px;
    color: #333;
    background: linear-gradient(150deg, #ffeb84 0%, #ffd53e 100%);
    box-shadow: 0px 2px 5px -1px rgb(59, 59, 59, 0.5);
    &:hover {
    background: orange;
    }
`;
type HeaderProps = {
    pesquisar ?: string;
    menu ?: Array<string>;
}

export default function Header(props:HeaderProps) {
  return (

    // <header className={styles['menu-site']}>
    <HeaderPage> 
    <div>Logotipo</div>
        <NavMenu>
            <ul className={css`
            margin:0;
            padding:0;
            display: inline-flex;
            & li {
                list-style:none;
                min-width: 100px;
                text-align: center;
                padding: 10px;
            }
            `}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="#">Galeria</Link></li>
                <li><Link href="#">Serviços</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contato</Link></li>
            
            </ul>
        </NavMenu>
            <div>
                <SearchBar type="text" placeholder="Digite sua busca" />
                <SearchButton>{props.pesquisar?props.pesquisar:"Search"}</SearchButton>

            </div>


        </HeaderPage>
  )
}
