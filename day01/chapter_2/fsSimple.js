const fs = require("fs");

const readAndWriteCallbackHell = () => {
  fs.readFile("./files/fsSimple/file1.txt", (err, data) => {
    if (err) throw err;
    fs.writeFile("./files/fsSimple/file2.txt", data, (err) => {
      if (err) throw err;
    });
  });
};

const readAndWritePromises = () => {
  let promise = new Promise(function (resolve, reject) {
    fs.readFile("./files/fsSimple/file1.txt", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  }).then(
    function (data) {
      fs.writeFile("./files/fsSimple/file2.txt", data, (err) => {
        if (err) throw err;
      });
    },
    function (err) {
      throw err;
    }
  );
};

const readAndWriteAsyncAwait = async () => {
    try {
        let promise = new Promise(function (resolve, reject) {
            fs.readFile("./files/fsSimple/file1.txt", (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
        })
        let resultData = await promise;
        fs.writeFile("./files/fsSimple/file2.txt", resultData, (err) => {
            if (err) throw err;
        });
    } catch(err) {
        throw err;
    }
};

readAndWriteCallbackHell();
//readAndWritePromises();
//readAndWriteAsyncAwait();
