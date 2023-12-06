// const readline = require('readline')

// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// lineDetail.question('Please provide your name - ', (name) => {
//   console.log(`Hi ${name}!`)
//   lineDetail.close()
// })
// const args = require('minimist')(process.argv.slice(2))
import minimist from 'minimist'
const args = minimist(process.argv.slice(2), {
  default: {
    greeting: 'Hello'
  }
})
console.log(args)
