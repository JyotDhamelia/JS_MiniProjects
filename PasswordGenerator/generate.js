// sets of password values
  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const LowerSet = "abcdefghijklmnopqrstuvwxyz"
  const numberSet = "1234567890"
  const symbolSet = "\~!@#$%|^&*()_/"

// selectors
const passbox = document.getElementById('generatedPassword')
const totalchar  = document.getElementById('passwordLength')
const UpperInput = document.getElementById('uppercaseCheckbox')
const LowerInput = document.getElementById('lowercaseCheckbox')
const NumberInput = document.getElementById('numbersCheckbox')
const SymbolInput = document.getElementById('specialCharsCheckbox')

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (UpperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (LowerInput.checked) {
        password += getRandomData(LowerSet)
    }
    if (NumberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (SymbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalchar.value) 
    {
        return generatePassword(password)
    }
    console.log(truncateString(password, totalchar.value))
}

// init call
generatePassword();  

document.getElementById('generateBtn').addEventListener("click", 
        function () 
        {
            generatePassword(); 
        }
)

function truncateString(str, num) {
    if (str.length > num) 
    {
        let subStr = str.substring(0, num);
        return subStr;
    } 
    else 
    {
        return str;
    }
}

