module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/uploads");
  eleventyConfig.addPassthroughCopy("static/admin");
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md").reverse();
  });
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};