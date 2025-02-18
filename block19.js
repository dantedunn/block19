// create the name, occupation and starting pice data
const nameFreelancers = ['Alice', 'Bob', 'Carol']
const occupationFreelancer = ['Writer', 'Teacher', 'Programmer']
const startingPrice00 = ['$30', '$50', '$70']
const myData = [
  { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
  { name: 'Bob', occupation: 'Teacher', startingPrice: 50 },
  { name: 'Carol', occupation: 'Programmer', startingPrice: 70 }
]

const myHeaders = ['Name', 'Occupation', 'Starting Price']

function averagePrice () {
  let sum = 0
  for (let i = 0; i < myData.length; i++) {
    sum += myData[i].startingPrice
  }
  return sum / myData.length
}

const divOne = document.createElement('div') //create the element
divOne.cl

const headOnes = document.createElement('h1') // create the element
headOnes.innerHTML = 'Freelancer Fourm' //added inner content to h1
document.body.appendChild(headOnes) // add to <body>

const paraOne = document.createElement('p')
paraOne.innerHTML = `The average starting price is $${averagePrice()}.`
document.body.appendChild(paraOne)

const avalFree = document.createElement('h1') // create the element
avalFree.innerHTML = 'Available Freelancers' //added inner content to h1
document.body.appendChild(avalFree) // add to <body>

function createTable (data, headers = []) {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')

  if (headers.length > 0) {
    const headerRow = document.createElement('tr')
    headers.forEach(headerText => {
      const headerCell = document.createElement('th')
      headerCell.textContent = headerText
      headerRow.appendChild(headerCell)
    })
    thead.appendChild(headerRow)
    table.appendChild(thead)
  }

  data.forEach(rowData => {
    const row = document.createElement('tr')
    for (const key in rowData) {
      const cell = document.createElement('td')
      cell.textContent = rowData[key]
      row.appendChild(cell)
    }
    tbody.appendChild(row)
  })

  table.appendChild(tbody)
  return table
}

const myTable = createTable(myData, myHeaders)
document.body.appendChild(myTable)

//create a div that extends the entire body
//add a boarder around the div
document.body.style.border = "5px solid black";