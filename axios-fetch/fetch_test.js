function main() {
    fetch("www.google.com")
        .then(async (response) => {
            const json = await response.json()
        })
}

async function main(){
    const response = await fetch("......")
    const json = await response.json()
    console.log(json.todos.length)
}
