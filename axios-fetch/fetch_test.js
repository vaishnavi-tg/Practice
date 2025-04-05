function main() {
    fetch("https://www.google.com", {
        method: "POST",
        body:{
            username:"vaishnavi",
            password:"123467"
        },
        headers: {
            "Authorization": "Bearer",
        }
    })
        .then(async (response) => {
            const json = await response.json()
        })
}

async function main() {
    const response = await fetch("......")
    const json = await response.json()
    console.log(json.todos.length)
}
