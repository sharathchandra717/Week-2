function copy() {
    const fs = require('fs'),data; 
    for (let i = 1; i <= 10; i++) {
        data = fs.readFileSync("readMe"+i+".txt","utf8");
        fs.appendFileSync("writeMe.txt",data+"\n");
    }      
}

copy();

//Output:(in writeMe.txt)
