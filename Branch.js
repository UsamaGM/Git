/**
 * Branch class
 * To create a branch
 * @param {string} name
 * @param {Commit} commit
 */
class Branch {
  constructor(name, commit) {
    this.name = name;
    this.commit = commit;
  }
}

export default Branch;
