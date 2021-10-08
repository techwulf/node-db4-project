function getRecipeById(recipe_id) {
  return Promise.resolve(`awesome recipe at ${recipe_id}`);
}


module.exports = {
  getRecipeById
}