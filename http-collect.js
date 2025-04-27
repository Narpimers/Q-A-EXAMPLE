const { BufferList } = require('bl');
const http = require('http');

const bl = BufferList();

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');


    res.on('data', (data)=> {
        
    });

    res.on('error', () => {
        console.error();
    });

    res.on('end', () => {
        console.log('');
        
    })
});