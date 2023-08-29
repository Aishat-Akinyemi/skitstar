import axios from "axios";

export async function getVideoAsset(video) {
    const assetUrl = `https://livepeer.studio/api/asset/${video.assetId}`
    const config = {
    method: 'get',
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer `+ import.meta.env.VITE_LIVEPEER_API_KEY 
    }
    };

    try {
        const assetResp = (await axios(assetUrl, config)).data;
        const videoQueryUrl= `https://livepeer.studio/api/data/views/query?playbackId=${assetResp.playbackId}`;
        const playbackUrl = `https://livepeer.studio/api/playback/${assetResp.playbackId}`;
        const [videoQueryResp, playbackQeryResp] = await Promise.all([axios(videoQueryUrl, config), axios(playbackUrl, config)]);
        let videoData = {...video};
        videoData.date = (new Date(assetResp.createdAt).toLocaleDateString());
        videoData.playbackId = assetResp.playbackId;
        videoData.name = assetResp.name;
        videoData.viewCount = videoQueryResp.data.length > 0 ? videoQueryResp.data[0].viewCount : 0;
        videoData.playtimeMins = assetResp.videoSpec.duration;
        const aspectRatio = playbackQeryResp.data.meta.source[0].width / playbackQeryResp.data.meta.source[0].height
        const rounded = Math.round(aspectRatio * 10) / 10;
        let ar;
        switch (rounded) {
        case 1.8:
            ar = "16to9"
            break;
        case 0.6:
            ar="9to16"
            break;
        case 0.8:
            ar = "4to5"
            break;
        case 2.3:
            ar = "21to9"
            break;
        default:
            ar=""
        }
        videoData.aspectRatio = ar;
        return videoData;
    } catch (error) {
        console.log(error)
    }
}

