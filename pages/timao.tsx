import { NextPageContext } from 'next';
import React, { useState, useEffect } from 'react'

type TimaoProps = {
    frase ?: string;
    autor ?: string;
}


//parenteses significa que usaremos jsx e não html
//jsx é uma extensão do JavaScript que permite escrever "html"

export default function TimaoPages(props:TimaoProps) {
  //state em react utiliza o padrão getter & setter.
  //get = obter; setter= definir.
  //const [get, set] = useState(0)
  const [frase, setFrase] = useState(props.frase);
  const [autor, setAutor] = useState(props.autor);
  const [contador, setContador] = useState(0);

  // useEffect(função, array);

  useEffect(() => { 
    console.log("Executou o useEffect");
    if(contador==0){
      document.title = "carregou a pagina, executou a primeira vez";
    }else {
      document.title = "carregou a pagina, executou "+ contador +"vezes ";
    }

  }, [frase, autor, contador]);


  return (
    <>
      <h1>{frase}</h1>
      {autor && <h2>{autor}</h2>}
      <button onClick={(e)=>{setFrase("Timão é o melhor do mundo!")}}>Mudar a frase</button>
      <button onClick={(e)=>{setAutor("Prof Glaucio")}}>Mudar Autor</button>
      <button onClick={(e)=>{setContador(contador+1)}}>Contador+</button>
    </>
  )
}

TimaoPages.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    return {
        frase,
        autor
    }
}