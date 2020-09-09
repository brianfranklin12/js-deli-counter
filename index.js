function takeANumber(line, name) {
    line.push(name)
    return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line) {
    while (line.length > 0) {
    return (`Currently serving ${line.shift()}.`)
    line.shift()
    }
    return "There is nobody waiting to be served!"
}

function currentLine(line) {
    let array = []
    if (line.length == 0) {
        return ("The line is currently empty.")
    } else {
        for (let i = 0; i < line.length; i++) {
            array.push(` ${i+1}. ${line[i]}`)
        }
        return (`The line is currently:${array}`)
}
}

test = ['abby', 'fred', 'fucker']
console.log(currentLine(test))