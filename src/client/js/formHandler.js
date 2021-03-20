function handleSubmit(event) {
    event.preventDefault()


    let formname = document.getElementById('name').value;
    const errorMsg = document.getElementById('errorMsg');
    if (Client.checkForName(formname)) {

        fetch("http://localhost:8081/news", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({formname}),
        })
            .then((res) => res.json())
            .then((res) => {
                resultMsg(res);
                console.log(res);
            })
    } else {
        console.log(errorMsg, "invalid url")
    };

    console.log("::: Form Submitted :::")
}

async function resultMsg(res) {
    // GET function that takes the info from the server
    document.querySelector('#result').innerText = 'Confidence = ' + res.confidence + '%';
    document.querySelector('#subjectivity').innerText = res.subjectivity;
    document.querySelector('#score_output').innerText = `Polarity score: ${resultdisplay(
        res.score_tag
      )}`;
    }
function resultdisplay(formname) {
    console.log(res)
    console.log(res.confidence + '%');
    console.log(res.subjectivity);
    console.log(res.score_tag);
}

export { handleSubmit }
