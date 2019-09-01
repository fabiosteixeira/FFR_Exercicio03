import fetch from 'isomorphic-fetch'

export default (req, res) => {
    const {query: {slug}} = req
    fetch('https://www.reddit.com/r/' + slug + '.json')
        .then(function (response) {
            response.json().then(
                (r) => {
                    res.setHeader("Content-Type", "application/json")
                    res.end(JSON.stringify(r))
                }
            )
        })
}


