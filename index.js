const API_KEY = "sk-proj-GDBtvEfLQfUnui2x2ArsT3BlbkFJyVqli4JtveBRwmtrsjsH";
const clickSubmitButton = document.querySelector("#clickSubmit");

async function getMessage() {
  console.log("clicked");
  const options = {
    method: POST,
    headers: {
      Authorization: "Bearer ${API_KEY}",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "Hello!",
        },
      ],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

clickSubmitButton.addEventListener("click", getMessage);
