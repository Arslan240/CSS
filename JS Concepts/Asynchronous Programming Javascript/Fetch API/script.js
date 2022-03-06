
const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');

async function getData() {
  const postStream = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const posts = await postStream.json();
  let i = 0;

  console.log(posts);
  // throw new Error('Post stream error');

  posts.forEach(post => {
    i++;
    if(i < 10) {
      const title = post.title;
      const body = post.body;
      
      // instead of using async await here we just use simple promise.
      fetch('https://unsplash.it/300/200')
        .then(resp => resp.blob())
        .then(blob => {
          // we'll create new post using template
          // importNode(node) creates a copy of the node passed and true tells if we want descendents of direct descendents or not.
          const newPost = document.importNode(postTemplate.content, true);
          const postTitle = newPost.querySelector('.post_title'); //we create an element which is inside newPost element
          const postBody = newPost.querySelector('.post_body');
          const postImg = newPost.querySelector('.post_image');

          // throw new Error('Image fetch error');
          // setting data to dom elements.
          postImg.src = URL.createObjectURL(blob); 
          postTitle.innerText = title;
          postBody.innerText = body;
    
          postSection.appendChild(newPost);
        })
        .catch(err => console.log(err));
    }
  });
}

getData()
  .catch(err => console.log(err));






// fetch is promise based.

// Image data
// fetch('https://unsplash.it/600/400')
//   .then(res => res.blob())
//   .then(blob => {
//     console.log(blob);
//     let img = document.createElement('img');
//     img.src = URL.createObjectURL(blob);
//     document.querySelector('body').appendChild(img);
//   })





// JSON data
// fetch('demo.json')
//   .then((response) => 
//   {
//     console.log(response);
//     return response.json();
//   })
//   .then(json => console.log(json));

