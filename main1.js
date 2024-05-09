var ps = require("fs");
// ps.writeFileSync("read1.txt","1 2 5 4")
// data = ps.readFileSync("read1.txt","utf-8")
// data2 = data.split(" ");
// for(var i=0;i<data2.length;i++)
//     {
//         data2[i] = parseInt(data2[i]);
//     }
// console.log(data2.sort(function(a,b){return b-a}));
// create json object which contains array of objects calculate perimeter of sqaure and perimeter of circle by uing side value and diameter value repectively and write the output on shape.txt file


// const shape = [{"name":"sqaure","side":30},{"name":"circle","diameter":36}]
// for(i=0;i<shape.length;i++)
//     {
//         if(shape[i].name=="sqaure"){
//             console.log("perimeter of square ",shape[i].side*4);
//         }
//         else{
//             console.log("perimeter of circle ",(shape[i].diameter/2)*(2*3.14));
//         }
//     }


// Asynchronous

// read file = ps.readFile("filename","utf-8",callback)
// create file = ps.writeFile("filename",data,callback)
// update file = ps.appendFile("filename",data,callback)
// delete file = ps.unlink("filename",callback)
// rename file = ps.rename("oldfile","newfile",callback)

var ps = require("fs");

// Your existing code...
ps.writeFile("example.txt", "Hello World", () => {
    dat;
    console.log("write");
});

ps.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// Define the fun() function0
   const dat= ps.appendFile("example.txt", "new data added", () => {
        console.log("append");
    });


// Call the fun() function// This line invokes the fun() function

// var os= require(os);
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.platform)
// console.log(os.tmpdir())
// console.log(os.freemem())

// path module provide a way of working with sdirectories and file paths?

// var pm =rewuire("path")
// path = pm.dirname('D:/LJU.abc.html')
// console.log(path) // op root : 'D:/'

// path = pm.basename('D:/LJU.abc.html')
// console.log(path) dir 'D:/LJU' o/p

// path = pm.parse('D:/LJU.abc.html')
// console.log(path) 'abc.html'n o/p

// path = pm.extname('D:/LJU.abc.html')
// console.log(path) 'name:abc' o/p
