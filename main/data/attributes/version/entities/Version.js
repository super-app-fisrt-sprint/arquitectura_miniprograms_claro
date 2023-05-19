module.exports = class Version {
  static instance;
  constructor (name, code, date) {
    this.name = name;
    this.code = code;
    this.date = date;
    if (Version.instance) {
      return Version.instance
    } else {
        Version.instance = this
    }
  }
}