import React from 'react';
import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'
// import SUMMARY_JSON from '../content/summary.json'

// function Content(props) {
//     // const currentPostSummary = posts.filter(function(post) {
//     //     return post.id === pageId;
//     // })
//     // let currentPost = {};
//     // console.log(`../${currentPostSummary[0].dir}/${currentPostSummary[0].base}`);
//     // currentPost = require(`../${currentPostSummary[0].dir}/${currentPostSummary[0].base}.json`);

//     return (
//         <div>
//             {/* <h1>{pageTitle}</h1> */}
//             <p>This is the blog post content.</p>
//         </div>
//     )
// }

function Page(props) {
    
    return (
        <Layout>
            {/* <Content pProps={props} /> */}
            <p>{props.postContent.title}</p>
            <div dangerouslySetInnerHTML={{ __html: props.postContent.bodyHtml }}></div>
        </Layout>
    )
}


Page.getInitialProps = async function (props) {
    console.log(props.query.content);
    return {
        postContent: props.query.content
    }
}


export default withRouter(Page)