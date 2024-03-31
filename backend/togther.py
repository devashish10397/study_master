
from openai import OpenAI
import os

with open('key.txt', 'r') as file:
    key = file.read().strip()

TOGETHER_API_KEY = key

client = OpenAI(
  api_key=TOGETHER_API_KEY,
  base_url='https://api.together.xyz/v1',
)

def get_response(input_text):
    chat_completion = client.chat.completions.create(
    messages=[
        {
        "role": "system",
        "content": "You are an Computer Science Expert. Summarize the following text in a pointwise manner.",
        },
        {
        "role": "user",
        "content": input_text,
        }
    ],
    model="mistralai/Mixtral-8x7B-Instruct-v0.1"
    )    
    print(chat_completion.choices[0].message.content)
    return chat_completion.choices[0].message.content 
