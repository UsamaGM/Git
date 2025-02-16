import Git from "./Git.js";

/**
 * Maps the history to a string
 * @param {Array<Commit>} history
 * @returns {string}
 */
function historyToIdMapper(history) {
  const ids = history.map((commit) => commit.id);

  return ids.join(" -> ");
}

let repo = new Git("my-repo");
repo.commit("Initial Commit");
repo.commit("Change 1");
console.log(historyToIdMapper(repo.log()));

repo.checkout("feature-a");
repo.commit("Feature A change 1");
repo.commit("Feature A change 2");
console.log(historyToIdMapper(repo.log()));

repo.checkout("main");
repo.commit("Change 2");
console.log(historyToIdMapper(repo.log()));
