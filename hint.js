function translateLongInput(input) {
    console.log('Input:', input)
    const arrOfInputWords = input.split(' ')
    const output = arrOfInputWords.map(word => translateWord(word)).join(' ')
    console.log('Final Result:', output)
}

function translateWord(input) {
    // console.log('Input:', input)
    //consider regex??
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const suffix = 'ay'
    let root = ''
    let prefix = ''
    let result = ''

    if (vowels.includes(input[0])) {
        result = input + suffix
    } else {
        for (let i = 0; i < input.length; i++) {
            if (vowels.includes(input[i])) {
                root = input.slice(i)
                prefix = input.slice(0, i)
                break
            }
        }
        result = root + prefix + suffix
    }
   
    // console.log('Output:', result)
    return result
}

// translateInput('hello')
translateLongInput('hello world')
translateLongInput('that strange dragon scared them')
translateLongInput('an aweful attitude is often unpleasant')
// more tests after we get to this point for edge cases, uppercase, etc..