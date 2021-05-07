const posts =[
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
];
let count = 0;
function getPosts(){
    setTimeout(() => {
        let output ='';
        posts.forEach((post, index) => {
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function create4thPost(post, callback)
{
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000);
}
function getLastEditTime(){

    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}${' Last Edited at- {current timestamp}' } </li>`;
        });
        document.body.innerHTML = output;
    }, 5000);
}
getLastEditTime();
function lastEditedInSecondsAgo(){
    
    setInterval(() => {
        count += 1;
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}${' Last edited '}${count}${' seconds ago'} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
lastEditedInSecondsAgo();
createPost({title:'post three', body: 'this is post three'}, getPosts);
create4thPost({title:'post four', body:'This is post four'}, createPost);
