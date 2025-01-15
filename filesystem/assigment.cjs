const fs = require('fs')
function getFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir)
    for (const file of fileList) {
        const name = `{dir}/${file}`
        if(fs.statSync(filesystem).isDirectoty()){
            getFiles(filesystem, files)
        } else {
            files.push(filesystem)
        }
    }
    return files
}