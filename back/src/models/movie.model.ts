export interface iMovie {
  id: number
  title: string
  year: string
  runtime: string
  genre: string[]
  director: string
  actors: string
  plot: string
  posterUrl: string
}

module.exports = () => {
  const fs = require('fs')
  let Movie: iMovie
  fs.readFile('src/assets/movies.json', 'utf8', (err: any, data: iMovie) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`)
    } else {
      // parse JSON string to JSON object
      Movie = data

      return Movie
    }
  })
}
