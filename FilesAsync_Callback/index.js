function copy() {
    let fs = require('fs'); 
    for (let i = 1; i <= 10; i++) {
        fs.readFile("readMe"+i+".txt","utf8",function(err,data) {
            if (err) throw err;
            fs.appendFile("writeMe.txt",data+"\n", function (err) {
                if (err) throw err;
                console.log("Copied readMe"+i);
              });               
        });
    }
       
}

copy();

/*Output:(in writeMe.txt)
Copied readMe1
Copied readMe3
Copied readMe4
Copied readMe2
Copied readMe5
Copied readMe9
Copied readMe7
Copied readMe10
Copied readMe8
Copied readMe6*/
