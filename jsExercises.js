// 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

// 2) Create an unordered list using JavaScript and save it in a variable

let uLNode = document.createElement('ul')

// 3) Cycle the array and create a list-item via JavaScript for every element
// 4) Insert the genere as text in the list-item
// 5) Append the list items in the unordered list


for (let i = 0; i < genres.length; i++) {
    let liNode = document.createElement('li')
    liNode.innerText = genres[i]
    // console.log(liNode)
    uLNode.appendChild(liNode)
}

// 6) Append the unordered list in the document. The list should appear in the page.

document.querySelector('body').appendChild(uLNode)

