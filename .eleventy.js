module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/uploads");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md").reverse();
  });

  // Add a date filter for Nunjucks
  eleventyConfig.addNunjucksFilter("readableDate", function(dateObj) {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};