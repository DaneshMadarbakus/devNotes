const SUMMARY_JSON = require('./content/summary.json')
// console.log('SUMMARY', SUMMARY_JSON.sourceFileArray);
// const postsContent = [];
const onePost = require(`./${SUMMARY_JSON.fileMap[0].dir}/${SUMMARY_JSON.fileMap[0].base}`);
// SUMMARY_JSON.sourceFileArray.forEach((x) => {
    
// });

console.log(onePost);

// const posts = Object.keys(SUMMARY_JSON.fileMap).map(function (key) {
//     return SUMMARY_JSON.sourceFileArray[key];
// });
// console.log('posts', posts);
// exportObject = { '/': { page: '/' } };
// posts.forEach(function (post) {
//     console.log(post);
//     const pageString = `/p/${post.id}`;
//     exportObject[pageString] = {
//         page: '/post', query: {
//             content: {
//                 "id": post.id,
//                 "title": "First post",
//                 "date": "2017-06-01T00:00:00.000Z",
//                 "bodyContent": "First post!\n\nCheckout [github to see my other projects](github.com/tscanlin)\n\n[another page](/custom-post)",
//                 "bodyHtml": post.bodyHtml,
//                 "preview": "First post!\n\nCheckout github to see my other projects\n\nanother page",
//                 "dir": "content/posts/development",
//                 "base": "first-post.json",
//                 "ext": ".json",
//                 "sourceBase": "first-post.md",
//                 "sourceExt": ".md"
//             }
//         }
//     }
// })


// console.log(exportObject);

//THIS IS NOT WORKING BECAUSE POSTS IS NOT RETURNING THE INDIVIDUAL POSTS, IT IS RETURNING THE SUMMARY OF POSTS.

module.exports = {
    exportPathMap: function () {



        // return exportObject;
    }
}