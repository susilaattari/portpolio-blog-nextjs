import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
 const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      
export async function POST(request) {
   
  if (!configuration.apiKey) {
    return NextResponse.json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    
  }
  const {text} = await request.json();
console.log(text.typeof())
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 7,
      temperature: 0.6,
    });
   return NextResponse.json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return NextResponse.json({error:error.response.status})
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return NextResponse.json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

