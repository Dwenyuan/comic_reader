const fs = require('fs')
const path = require('path')

const iconDir = path.resolve(__dirname, '../src/assets/icon')
const imageDir = path.resolve(__dirname, '../src/assets/images')

let temp =
    `
export default {
#{export}
}
`
const dirToStr = (dirPath) => {
    const files = fs.readdirSync(dirPath)
    const list = files.filter(fileName => fileName !== 'index.ts').map(fileName => {
        if (/-/.test(fileName)) {
            fs.renameSync(path.resolve(dirPath, fileName), path.resolve(dirPath, fileName).replace(/-/, '_'))
            fileName = fileName.replace(/-/, '_')
        }
        const filePath = path.resolve(dirPath, fileName)
        const fStat = fs.statSync(filePath)
        if (fStat.isDirectory()) {
            return `\t${path.parse(filePath).name}:{\n\t${dirToStr(filePath).join(',\n\t')}\n\t}`
        } else {
            return fileNameToStr(filePath, dirPath)
        }
    })

    return [...new Set(list)]
}

// file to string
const fileNameToStr = (absolutePath, dirPath) => {
    const fileName = path.parse(absolutePath).name.replace(/\@\dx/, '').replace(/-/, '_')
    const relative = path.relative(dirPath, absolutePath).replace(/\@\dx/, '').replace(/\\/, '/')
    return `\t${fileName}: require('./${relative}')`
}
const icontemp = temp.replace('#{export}', dirToStr(iconDir).join(',\n'))
fs.writeFileSync(path.resolve(__dirname, iconDir, 'index.ts'), icontemp)

const imagestemp = temp.replace('#{export}', dirToStr(imageDir).join(',\n'))
fs.writeFileSync(path.resolve(__dirname, imageDir, 'index.ts'), imagestemp)
// console.log(dirToStr(iconDir).join(',\n'))
