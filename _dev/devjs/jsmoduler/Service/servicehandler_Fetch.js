
module.exports = {
    getjsondata: function (url) {
        return fetch(url)
            .then(res => res.json())
            .then(jsondata => jsondata)
            
    },
    postjsondata: function (url, postdata) {

        const option = {
            method: 'POST', 
            mode:"no-cors",
            body: JSON.stringify(postdata),
            headers: {
                "Content-Type": "application/json"
            }

        }
        return fetch(url, option)
            .then(res => res.json())
            .then(jsondata => jsondata)

    },
    fetchjsonpdata: function (url, postdata) {
        //postdata= { data: medskick, merdata: mera }
        const option = {
            method: 'POST',
            header: 'application/json',
            body: JSON.stringify(postdata)

        }
        return fetch(url, option)
            .then(res => res.responseText())
            .then(jsonText => JSON.parse(jsonText))

    }
}
