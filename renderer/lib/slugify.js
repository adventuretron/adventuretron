module.exports = function slugify (str) {
  return str.replace(/[^a-z0-9]/gi, '-').toLowerCase()
}
