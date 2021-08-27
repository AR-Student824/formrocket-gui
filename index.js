const app = require('express')()
const axios = require('axios')

// PROXY - doesn't work, todo to fix it
app.use((req,res) => {
   if (req.path == '/') {
    res.sendFile(__dirname + '/pages/index.html')
   }
   else if (req.path.startsWith('/proxy')) {
        const path = req.path.replace('/proxy', '').replace('/', '')
    if (!path) {
        res.send({})
    } else {
        axios.get(`https://www.formrocket.me/api/${path}`).then(res => {
            res.send(res.data)
        }).catch(e => {
            res.send(e)
        })
    }
    }
})

// GUI 



app.listen(3000, () => {
    console.log(`Ready on port 3000`)
})