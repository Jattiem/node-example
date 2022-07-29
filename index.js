// console.log("hello World");
// console.log(__dirname);
// console.log(__filename);
// const os = require('os');
// const path = require('path')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// // 
// const sum = require('./addition');
// console.log(sum(9,8));
// const path = require('path');
// Write to a file
// file.writeFile(path.join(__dirname,'./data.txt'),'Example 3',err=> {
    //     if(err) throw err;
    //     console.log('Writing to a file');
    // })
const file = require('fs');
file.readFile('./data.txt','utf8', (err,data)=> {
    if(err) throw err;
    console.log(data);
});
