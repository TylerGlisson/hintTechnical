function translateLongInput(input) {
    console.log('Input:', input)
    const arrOfInputWords = input.split(' ')
    const output = arrOfInputWords.map(word => translateWord(word)).join(' ')
    console.log('Final Result:', output)
    return output
}

function translateWord(input) {
    // console.log('Input:', input)
    //consider regex??
    // edge cases with y as a vowel?
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const suffix = 'ay'
    let root = ''
    let prefix = ''
    let result = ''

    if (vowels.includes(input[0])) {
        if (input.length === 1) result = input + 'yay'
        else result = input + suffix
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
    return handleCase(input, result)
}

function handleCase(input, result) {
    const upper = /^[A-Z]/
    if (upper.test(input[0])) {
        return result.charAt(0).toUpperCase() + result.slice(1)
    } else {
        return result
    }
}

// translateInput('hello')
// translateLongInput('hello world')
// translateLongInput('that strange dragon scared them')
// translateLongInput('an aweful attitude is often unpleasant')
// translateLongInput('a erratta irate')
translateLongInput('Wow! hi.')
translateLongInput('Such a nice, large, friendly, dragon!')