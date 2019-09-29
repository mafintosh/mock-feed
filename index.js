module.exports = class MockFeed {
  constructor () {
    this.data = []
  }

  get length () {
    return this.data.length
  }

  head () {
    return this.get(this.length - 1)
  }

  get (seq) {
    return this.data[seq] || null
  }

  append (data) {
    this.data.push(data)
  }

  replicate (other) {
    for (let i = other.data.length; i < this.data.length; i++) {
      other.data.push(this.data[i])
    }
    for (let i = this.data.length; i < other.data.length; i++) {
      this.data.push(other.data[i])
    }
  }
}
