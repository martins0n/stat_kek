var FileSaver = require('file-saver');

function fileSave(value) {
    var blob = new Blob([value], {type: "application/json"});
    FileSaver.saveAs(blob, "pairs.json");
}

export default {
    fileSave: fileSave
}