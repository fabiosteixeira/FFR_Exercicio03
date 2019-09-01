import { useRouter } from 'next/router'
import fetch from 'isomorphic-fetch'
import React, { useEffect, useState } from 'react'
import { ResultList } from '../../components/ResultList'

const Post = () => {
    const [state, setState] = useState({})
    const router = useRouter()

    useEffect(() => {
        console.log('Iniciou a busca no servidor.')
        fetch('http://localhost:3000/api/discussions/' + router.asPath.split("/")[2])
            .then(res => res.json())
            .then((data) => {
                setState(data)
                console.log('Busca finalizada.')
            })
            .catch(console.log)
    }, [])

    return (
        <div>
            <ResultList
                lista={state}
            />
        </div>
    )
}

 export default Post