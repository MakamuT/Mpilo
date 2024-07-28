const OPENAI_API_KEY =
  "sk-proj-GDBtvEfLQfUnui2x2ArsT3BlbkFJyVqli4JtveBRwmtrsjsH";
const searchButton = document.querySelector("#search");

async function getMessage() {
  console.log("clicked");
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer ${OPENAI_API_KEY}",
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
    await fetch("https://api.openai.com/v1/chat/completions", options);
  } catch {}
}

searchButton.addEventListener("click", getMessage);
