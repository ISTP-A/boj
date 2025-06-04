function getPhoneBook(phoneNumbers) {
    return Object.fromEntries(phoneNumbers.map(num => [num, true]))
}

function hasPhoneNumberAsPrefix(phoneBook, phoneNumber) {
    for(let i = 0; i < phoneNumber.length; i++) {
        const prefix = phoneNumber.slice(0, i)
        const target = phoneBook[prefix]
        if(target === phoneNumber) continue
        if(target) return true
    }
    return false
}

function findPrefixInPhoneBook(phoneBook, phoneNumbers) {
    const sortedPhoneNumbers = phoneNumbers.sort()
    for(const num of sortedPhoneNumbers) {
        if(hasPhoneNumberAsPrefix(phoneBook, num)) return false
    }
    return true
}


function solution(phone_numbers) {
    const book = getPhoneBook(phone_numbers)
    return findPrefixInPhoneBook(book, phone_numbers)
}