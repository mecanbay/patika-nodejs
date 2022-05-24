# Ödev 2
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.



 ```javascript

const posts = [
    {id : 1, user_id : 1, title : "SSH Hardening", content : "Lorem ipsum dolor sit amet"},
    {id : 2, user_id : 1, title : "Linux Hardening", content : "Lorem ipsum dolor sit amet"},
    {id : 3, user_id : 2, title : "THM - Oh-My-Webserver WriteUp", content : "Lorem ipsum dolor sit amet"},
    {id : 4, user_id : 1, title : "HTB - Space WriteUp", content : "Lorem ipsum dolor sit amet"},

]

const listPosts = () => {
    posts.map(post => {
        console.log(post.title)
    });
}

const addPost = (NewPost) => {
    const prom1 = new Promise((resolve, reject) => {
        posts.push(NewPost)
        resolve(posts);
        //reject('HATA !');
    });
    
    return prom1;
};


async function showPosts() {
    try {
        await addPost(
            {
                id : posts.length + 1,
                user_id : Math.floor(Math.random() * 2) + 1,
                title : "Deneme Post",
                content : "Lorem ipsum dolor sit amet"
            }
        );
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts()
 ```