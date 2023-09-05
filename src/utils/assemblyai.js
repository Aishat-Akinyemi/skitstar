
// const assembly_ai_endpoint = "https://api.assemblyai.com/v2/transcript" ;
// export async function transcribe(audio) {
//     const assembly_ai_key =  await getSecret('assembly_ai_key');
//     //get url 
//    const url = await getDownloadUrl(audio);
//     const options = {
//         method: 'POST',
//         // mode: "cors",
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Authorization': assembly_ai_key
//         },
//         body: JSON.stringify({
//         'audio_url': url
//   })
//     };
//     const resp = await fetch(assembly_ai_endpoint, options);
//     const respJSON = await resp.json();
//     if (respJSON.status =="error") {
//         return  respJSON.error; 
//     } else {
//         const finalRes = await fetchData(respJSON.id, assembly_ai_key);
//         console.log(finalRes);
//         // const finalRes = await fetchData("6obhbcpjqs-61ca-408c-9872-5889e7d7b593", assembly_ai_key);
//        if(finalRes){
//            return finalRes;
//        }
//     }
// }

// export async function fetchData(id, key) {
//      const options = {
//         method: 'GET',
//         headers: {
//             'Authorization': key,
//             'Accept': 'application/json'
//         }
//     };
//   try {
//     const response = await fetch(`${assembly_ai_endpoint}/${id}`, options);
//     const data = await response.json();
//    console.log(data);
//     if (response.status !== 200 || data.status == "error") {
//        console.log(`error`);
//       return "error getting transcription";
//     } else if (data.status == "completed") {
//      console.log(`text`);
//        return data.text;
//    } else {
//       console.log(`recursive`);
//       await new Promise(resolve => setTimeout(resolve, 10000)); // 5 second delay
//       return fetchData(id, key); // recursive call
//     }   
    
//   } catch (error) {
//       console.log(error)
//   }
// }


// async function getDownloadUrl(fileUrl) {
//   const myFileDownloadUrl = await mediaManager.getDownloadUrl(fileUrl);  
//   return myFileDownloadUrl;
// }


import axios, { AxiosError } from 'axios'

const baseUrl = 'https://api.assemblyai.com/v2'
const headers = {
    authorization: import.meta.env.VITE_ASSEMBLY_AI_KEY
  }

export async function subtitle(video) {
    const uploadResponse = await axios.post(`${baseUrl}/upload`, video, {
        headers
    })
    const uploadUrl = uploadResponse.data.upload_url;
    const data = {
        audio_url: uploadUrl
      }
    const url = `${baseUrl}/transcript`
    const response = await axios.post(url, data, { headers: headers })

    const transcriptId = response.data.id
    const pollingEndpoint = `${baseUrl}/transcript/${transcriptId}`

    while (true) {
        const pollingResponse = await axios.get(pollingEndpoint, {
            headers: headers
        })
        const transcriptionResult = pollingResponse.data

        if (transcriptionResult.status === 'completed') {
            console.log(`transcript id is ${transcriptId}`)
            const subtitles = await getSubtitleFile(
            transcriptId,
            'vtt'
            );            
           return subtitles;
            // const subtitlesBlob = new Blob([subtitles], { type : "text/vtt"})
            // return subtitlesBlob;

        } else if (transcriptionResult.status === 'error') {
            throw new Error(`Transcription failed: ${transcriptionResult.error}`)
        } else {
            await new Promise((resolve) => setTimeout(resolve, 3000))
        }
    }
}


async function getSubtitleFile(
    transcriptId,
    fileFormat
  ) {
    if (!['srt', 'vtt'].includes(fileFormat)) {
      throw new Error(
        `Unsupported file format: ${fileFormat}. Please specify 'srt' or 'vtt'.`
      )
    }
  
    const url = `https://api.assemblyai.com/v2/transcript/${transcriptId}/${fileFormat}`;
    // const url = `https://api.assemblyai.com/v2/transcript/6uegt90dlx-2c43-47b8-b9f7-41c2adf10f75/${fileFormat}`;
    const headers = {
        authorization: import.meta.env.VITE_ASSEMBLY_AI_KEY
      }
  
    try {
      const response = await axios.get(url, { headers })
      return response.data
    } catch (error) {
      throw new Error(
        `Failed to retrieve ${fileFormat.toUpperCase()} file: ${
          error.response?.status
        } ${error.response?.data?.error}`
      )
    }
  }