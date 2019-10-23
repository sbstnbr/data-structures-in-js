const fs = require('fs')
const goodPath = './test.json'
const wrongPath = './test2.json'

export function readFileCallback(path, callback){
    return fs.readFile(path, callback)
}

export function readFilePromise(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err,data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}

export async function readFileAsync(path){
    try {
        const result = await readFilePromise(path)
        successCallback(result.toString())
    }
    catch(err){
        failureCallback(err)
    }
}

function callback(err,data){
    if(err){
        failureCallback(err)
    } else {
        successCallback(data.toString())
    }
}

function successCallback(data){
    return console.log(data)
}

function failureCallback(data){
    return console.error(data)
}


// readFileCallback(goodPath,callback)
// readFileCallback(wrongPath,callback)



// readFilePromise(goodPath)
//     .then(data => successCallback(data.toString()))
//     .catch(err => failureCallback(err))

// readFilePromise(wrongPath)
//     .then(data => successCallback(data.toString()))
//     .catch(err => failureCallback(err))



readFileAsync(goodPath)
readFileAsync(wrongPath)