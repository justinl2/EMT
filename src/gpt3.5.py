import openai

openai.api_key = "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"

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Tell me about the University of Michigan."},
    ]
)

print(response)
