import fs from 'fs'
import csv from 'csv-parse'
import path from 'path'

class CSVService {
  constructor(path, options, chunkSize) {
    this.chunkSize = chunkSize || 100
    this.chunk = []
    this.path = path
    this.options = {
      delimiter: ';',
      quote: '',
      columns: ['name', 'price', 'quantityWH', 'producer'],
      ...options
    }
  }

  parse(onChunk, onFinish) {
    return fs.createReadStream(this.path)
      .pipe(csv(this.options))
      .on('data', (data) =>  {
        this.chunk.push({...data, location: [0, 0]})
        if(this.chunk.length === this.chunkSize){
           onChunk(this.chunk)
           this.chunk = []
        }
      })
      .on('finish', () => {
        onChunk(this.chunk)
        onFinish()
      })
  }
}

export default CSVService
