import axios from 'axios';
import express, { json } from 'express';
import {parse} from 'node-html-parser';
//import DOMParser from 'dom-parser';
const app = express();
const port = 3001;
app.use(json());

// app.listen(port, '0.0.0.0', function() {
//     console.log('Listening to port:  ' + port);
// });
/*var stringToHTML = function(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html')
    return doc;
}*/
app.get('/getstories', async (req, res) => {
    let data1 = await(await axios.get('https://time.com/error')).data;
    res.send(data1);
    console.log(typeof data1);
    let latestStories = [];
    let dom = parse(data1)
    console.log(typeof dom)
    latestStories.push({'title': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(1) > a > span").innerText,'link': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(1) > a").href})
    latestStories.push({'title': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(2) > a > span").innerText,'link': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(2) > a").href})
    latestStories.push({'title': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(3) > a > span").innerText,'link': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(3) > a").href})
    latestStories.push({'title': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(4) > a > span").innerText,'link': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(4) > a").href})
    latestStories.push({'title': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(5) > a > span").innerText,'link': dom.querySelector("#notTheHeader > div > div > section > div > div > ul > li:nth-child(5) > a").href})
        
    console.log(latestStories);
    res.send(latestStories);
});
app.listen(port);
