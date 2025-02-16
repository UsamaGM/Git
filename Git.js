import Commit from "./Commit.js";
import Branch from "./Branch.js";

/**
 * Git class
 * To create a git repository
 *
 * @param {string} name
 */
class Git {
  constructor(name) {
    this.name = name;
    this.lastCommitId = -1;
    this.branches = [];

    let main = new Branch("main", null);

    this.branches.push(main);
    this.HEAD = main;

    console.log(`Created new repository ${name}`);
  }
  /**
   * Create a new commit
   *
   * @param {string} message
   * @returns {Commit}
   */
  commit(message) {
    const commit = new Commit(++this.lastCommitId, this.HEAD.commit, message);
    this.HEAD.commit = commit;
    console.log(`Created commit ${commit.id}: ${message}`);
    return commit;
  }
  /**
   * Logs the commit history
   * @returns {Array<Commit>}
   */
  log() {
    let commit = this.HEAD.commit;
    const history = [];

    while (commit) {
      history.push(commit);
      commit = commit.parent;
    }

    return history;
  }

  /**
   * Checkout functionality
   * If branch exists, it will switch to that branch
   * Otherwise create a new branch and switch to it
   * @param {string} branchName
   * @returns {Git}
   */
  checkout(branchName) {
    for (const branch of this.branches) {
      if (branch.name === branchName) {
        this.HEAD = branch;
        console.log(`Switched to branch ${branchName}`);
        return this;
      }
    }

    this.branches.push((this.HEAD = new Branch(branchName, this.HEAD.commit)));
    console.log(`Created and switched to branch ${branchName}`);
    return this;
  }
}

export default Git;
