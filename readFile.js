var fs = require('fs');

// //synchronous read and write file
// var data = fs.readFileSync('readMe.txt');
// console.log(data);
// fs.writeFileSync('writeMe.txt', data);

// //asynchronous read and write file
// fs.readFile('readMeAsync.txt', function (err, data) {
//     if (err) return console.log("async read failed." + err);

//     console.log("async read succ.");
//     console.log("data async read: \n" + data);   
//     fs.writeFile('writeMeAsync.txt', data, function (err) {
//         if (err) return console.log("async write failed." + err);

//         console.log("async write succ.");

//         var renameFiles = ['writeMe.txt', 'writeMeAsync.txt'];
//         renameFiles.forEach(function(file) {
//             fs.rename(file, 'rename' + file, function (err) {
//                 if (err) return console.log("error in renaming file: " + err);

//                 console.log("File: " + file + " renamed successfully");
//             })
//         })
        
//         // var deleteFiles = ['writeMe.txt', 'writeMeAsync.txt'];
//         // deleteFiles.forEach(function(fileName) {
//         //     fs.unlink(fileName, function(err) {
//         //         if (err) return console.log("error in deleting file fileName.\n" + err);
    
//         //         console.log("delete file named: " + fileName + " succ");
//         //     })
//         // });
//     });
// })

//create (make) directory synchronously
// fs.mkdirSync('testDir');
//remove directory synchronously
// fs.rmdirSync('testDir');

//create (make) directory asynchronously
fs.mkdir('testDir', function(err) {
    if (err) return console.log("err in making dir. \n" + err);

    console.log("dir successfully made");
    fs.readFile('readMe.txt', function(err, data) {
        if (err) return console.log(err);

        fs.writeFile('testDir/writeMe.txt', data, function(err) {
            if (err) return console.log(err);

            console.log("file write success.");

            setTimeout(function () {
                //delete (unlink) files from the testDir 
                fs.unlink('./testDir/writeMe.txt', function (err) {
                    if (err) return console.log(err);
                    console.log('file deleted successfully.');

                    //delete (remove) directory
                    fs.rmdir('testDir', function (err) {
                        if (err) return console.log('failed to remove directory,\n' + err);

                        console.log('Directory removed successfully.');
                    })
                })
            }, 10000);
        })
    })
});
//remove directory synchronously
// fs.rmdirSync('testDir');
