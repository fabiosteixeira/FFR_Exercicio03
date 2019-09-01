import React from 'react'

export const ResultList = (props) => {
    let listaResultado = []
    const host = 'https://www.reddit.com';
    if (!(typeof props.lista.data === 'undefined'))
        listaResultado = props.lista.data.children

    return (
        <>
            <style jsx>{`
                h1 {
                    text-align: center;
                }
            `}</style>

            <h1>Lista de resultados</h1>
            {listaResultado.map((item, i) =>
                <p key={i}>
                    <a href={host + item.data.permalink}>
                        {(i + 1)}:  {item.data.title}
                    </a>
                </p>
            )}
        </>
    )
}
