import axios from "axios";

export async function uploadToArweave(data:any) {
//   data can be an object, some array or any related complex data structure 
//   const sampleData = [{ A: ["a", "b", { gg: [5, 6, 7] }] }, { B: "b" }, { C: "c" }];

  try {
    const response = await axios.post("/api/uploadToArweave", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    return response.data.status === 200 ? response.data.hash : ""

  } catch (error) {
    console.error("Error:", error);
  }
}
