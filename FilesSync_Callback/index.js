function copy() {
    let fs = require('fs'),data; 
    for (let i = 1; i <= 10; i++) {
        data = fs.readFileSync("readMe"+i+".txt","utf8");
        fs.appendFileSync("writeMe.txt",data+"\n");
        console.log("Copied readme"+i);
    }      
}

copy();

/*Output:
Copied readme1
Copied readme2
Copied readme3
Copied readme4
Copied readme5
Copied readme6
Copied readme7
Copied readme8
Copied readme9
Copied readme10*/