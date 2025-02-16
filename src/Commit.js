/**
 * Commit class
 * To create a signle commit
 *
 * @param {number} id
 * @param {string} message
 */
class Commit {
  constructor(id, parent, message) {
    this.id = id;
    this.parent = parent;
    this.message = message;
  }
}

export default Commit;
