import { useRouter } from 'next/router'
import fetch from 'isomorphic-fetch'
import React, {useEffect, useState} from 'react'

const Post = () => {
    const [state, setState] = useState({})
    const router = useRouter()
    const { slug } = router.query
    
    useEffect(() => {
        console.log('Entrou', slug);
        const fetchItems = async () => {
            const result = await fetch('http://localhost:3000/results/' + slug + '.json');            
            setState(result)
        }
        fetchItems()
    }, [])

    return <div>{JSON.stringify(state)}</div>

}

export default Post