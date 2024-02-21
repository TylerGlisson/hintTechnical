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
    const puncTest = /^[a-zA-Z]/
    let punc = ''
    let trimInput = input

    // handles punctuation at end of word
    // console.log('test:', puncTest.test(input[-1]))
    // console.log(input[-1])

    if (!puncTest.test(input[input.length-1])) {
        punc = input[input.length-1]
        trimInput = input.slice(input.length - 1)
    }
    
    if (vowels.includes(trimInput[0])) {
        if (trimInput.length === 1) result = trimInput + 'yay'
        else result = trimInput + suffix
    } else {
        for (let i = 0; i < trimInput.length; i++) {
            if (vowels.includes(trimInput[i])) {
                root = trimInput.slice(i)
                prefix = trimInput.slice(0, i)
                break
            }
        }
        result = root + prefix + suffix
    }
   
    // console.log('Output:', result)
    const cased = handleCase(trimInput, result)
    return cased + punc
}

function handleCase(input, result) {
    // edge case: uppercase in middle of word (McDonald)
    const upper = /^[A-Z]/
    
    if (upper.test(input[0])) {
        return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase()
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