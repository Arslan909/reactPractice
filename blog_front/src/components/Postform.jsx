import "../postForm.css"
import React from "react"
import { useParams } from "react-router-dom"


export default function Postform() {
    
    const [msg, setMsg] = React.useState(null)
    const parameters = useParams()  //this is no detail page

    const [newPost, setNewPost] = React.useState(
        {
            title: "",
            body: "",
            userId: ""
        }
    )
    


    function getPostData() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${parameters.id}`)
            .then((response) => response.json())
            .then(data => {
                setNewPost(prevPost => ({
                    ...prevPost,
                    title: data.title,
                    body: data.body,
                    userId: data.userId
                }));
            });
    }
    React.useEffect(() => {
        if (parameters.id) {
            
            getPostData()

        } else setNewPost(
            {
                title: "",
                body: "",
                userId: 1
            }
        )
        setMsg(null)

    }, [parameters.id])



    function handleSubmit(event) {
        event.preventDefault()


        if (newPost.body.trim().length < 10) {
            setMsg("article detail can not be less than 100 characters")
            return

        } else {

            // console.log(newPost);

            if (parameters.id) {  //update ost

                fetch(`https://jsonplaceholder.typicode.com/posts/${parameters.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        id: parameters.id,
                        title: newPost.title,
                        body: newPost.body,
                        userId: newPost.userId
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then(json => {
                        console.log(json)
                        setMsg("article is updated 👍")

                        setNewPost(
                            {
                                title: "",
                                body: ""
                            }
                        )
                    })


            } else {      //add new post in this case

                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(newPost),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then(json => {
                        console.log(json)
                        setMsg("your article is posted 🥳")
                        setNewPost(
                            {
                                title: "",
                                body: ""
                            }
                        )

                    });



            }

        }


    }

    function handleChange(event) {
        const { name, value } = event.target
        setNewPost((prePost) => {
            return {
                ...prePost,
                [name]: value,
            }
        })
        setMsg(null)
    }


    return (
        <form className="post-detail-form" onSubmit={handleSubmit}>
            {!parameters.id ?<h3>Create new article</h3> : <h3>Update article details</h3>}
            <input
                id="title-input"
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleChange}
                placeholder="Enter article for title"
                required

            />


            <textarea
                id="body-input"
                name="body"
                value={newPost.body}
                onChange={handleChange}
                placeholder="Enter article detail (atleast 100 characters)">
            </textarea>
            {msg !== null ? <h4 id="form-msg">{msg}</h4> : <></>}
            <button type="submit">{!parameters.id ? "Submit" : "Update"}</button>
        </form>
    )
}