const axios = require('axios');

const { app, baseURL } = require('../constants');

app.get('/api/items', async (req, response) => {

    try {
        
        let itemsArrays = []
        while(itemsArrays.length <= 24){
            const items = await axios.get(baseURL).then((res) => res.data);
            if(itemsArrays.filter(p => p.id == items.id).length == 0){
                itemsArrays.push(items);
            }
        } 

        response.json(itemsArrays); 

    } catch (error) {
        console.log('error', error);
    }

})

module.exports = app;