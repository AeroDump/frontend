import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

// Ensure that your API key is set in your environment variables
const AKORD_API_KEY = process.env.AKORD_API_KEY!;

export async function POST(req: NextRequest) {
  try {
    // Parse the request body correctly
    const data = await req.json(); 

    // Convert the object to a JSON string
    const jsonData = JSON.stringify(data);

    const response = await axios.post("https://api.akord.com/files", jsonData, {
      headers: {
        Accept: "application/json",
        "Api-Key": AKORD_API_KEY,
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json({ hash: response.data.tx.id, status: 200 });

  } catch (error:any) {

    console.error("Error uploading to Arweave:", error);

    return NextResponse.json(
      { message: "Upload failed", error: error.message },
      { status: 500 }
    );
  }
}
