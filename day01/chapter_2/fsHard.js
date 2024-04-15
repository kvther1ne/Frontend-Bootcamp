const fs = require("fs");
const fastFolderSize = require("fast-folder-size");

const progressbar = async () => {
  try {
    let dir = "./files/fsHard/";
    let files = await fs.promises.readdir(dir);

    let file = "";
    // Последний аргумент - номер файла из имеющихся в директории. Можете выбрать число от 1 до 5:)
    file = selectFile(dir, files, 1);

    let folderSizePromise = new Promise(function (resolve, reject) {
      fastFolderSize(dir, (err, bytes) => {
        if (err) {
          reject(err);
        } else {
          resolve(bytes);
        }
      });
    });

    let folderSize = await folderSizePromise;
    let fileSize = await fs.promises.stat(file);
    
    drawProgressBar(fileSize.size / folderSize);
  } catch (err) {
    throw err;
  }
};

function drawProgressBar(currentProgress) {
  const filledBarLength = 100 * currentProgress;
  const emptyBarLength = 100 - filledBarLength;

  const filledBar = getBar(filledBarLength, "|", 0);
  const emptyBar = getBar(emptyBarLength, ".", 1);

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`${filledBar}${emptyBar}`);
}

function getBar(length, char, flag) {
  let str = "";
  if (flag == 0) {
    str += "[";
  }
  for (let i = 0; i < length; i++) {
    str += char;
  }
  if (flag == 1) {
    str += "]";
  }
  return str;
}

function selectFile(pathToFile, files, fileNumber) {
    return pathToFile + files[fileNumber];
}

progressbar();
