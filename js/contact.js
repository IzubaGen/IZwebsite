var form = document.getElementById("my-form")

console.log(form)
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for getting in touch with us. We appreciate your interest in our services,and we look forward to working with you!";
      // status.style.backgroundColor = "green";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form";
          // status.style.backgroundColor = "red";
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    // status.style.backgroundColor = "red";
  });
}
form.addEventListener("submit", handleSubmit)