// so much empty

const myButton= document.getElementById("fetchButton");
myButton.addEventListener("click", function(){


    fetch("https://jsonplaceholder.typicode.com/posts")

    .then(function(response){
    return response.json();
    })
    .then(function(json){
        console.log(json)
    
        const div = document.getElementById("postList");
    
        div.innerHTML = `
            <p> Title: ${json[0].title}</p>
            <p>Body: ${json[0].body}</p>
            <p>id: ${json[0].id}</p>

        `;
    })
    .catch(function(error){
        console.log('something went wrong')
    });
});    


function createPost(){
const getInput = document.getElementById("titleInput")
const getInfo = getInput.value

const getInputBody = document.getElementById("bodyInput")
const getinfoBody = getInputBody.value

const data = {
    title: getInfo,
    body: getinfoBody
    };

const result = JSON.stringify(data);
console.log(result)


fetch("https://jsonplaceholder.typicode.com/posts",{

method:"post",
body:result,
headers:{
    "content-type":"application/json; charset=UTF-8"
}

})

.then(function(response){
    return response.json();
    })
    .then(function(json){
        console.log(json)
    });
}
/*
Tasks
1. Fetch and Display Posts
● Use fetch() to retrieve a list of posts from
https://jsonplaceholder.typicode.com/posts
● Convert the response to JSON
● Dynamically render the post titles and bodies inside the #postList div


2. Create and Send a New Post
● Add a form with title and body fields
● Use fetch() with the POST method to send the data as JSON to the API
● Show a confirmation message with the response data


3. Add Loading and Error States
● Show a “Loading…” message while the fetch is in progress
● Display an error message if the fetch fails

Deliverables:
● A working fetch call that loads and displays posts 
● A functional form that submits data via POST
● Error handling and user feedback (e.g., loading spinner or error messages)
● Clean and well-commented JavaScript code


💡 Extensions
● Allow users to delete posts using a DELETE request
● Allow users to filter posts by keyword using an input field
○ Use async/await instead of .then()
*/
