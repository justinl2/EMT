import openai

openai.api_key = ""

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What does chat gpt do?"},
    ]
)

print(response)
