import axios from "axios";

export const getVideoInfo = async (req, res) => {

    const youtubeUrl = req.query.url;  // accepting full YouTube URL
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!youtubeUrl) {
        return res.status(400).json({ error: 'YouTube URL is required' });
    }

    // get video ID from URL
    const videoIdMatch = youtubeUrl.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/watch\?v=)([^&\n?]+)/);
    if (!videoIdMatch) {
        return res.status(400).json({ error: 'Invalid YouTube URL' });
    }
    
    const videoId = videoIdMatch[1];

    // clean URL by removing the timestamp if present for some reason
    const cleanUrl = youtubeUrl.replace(/(\?|&)t=\d+/, '');

    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
            params: {
                part: 'snippet,contentDetails',
                id: videoId,
                key: apiKey
            }
        });

        if (response.data.items.length === 0) {
            return res.status(404).json({ error: 'Video not found' });
        }

        const video = response.data.items[0];
        const videoInfo = {
            title: video.snippet.title,
            description: video.snippet.description,
            duration: video.contentDetails.duration, // ISO 8601 format
            url: cleanUrl // send back the original URL too - smplifies progression calc requests
        };

        res.json(videoInfo);

    } catch (error) {
        console.error('Error fetching video data:', error);
        res.status(500).json({ error: 'Failed to fetch video data' });
    }

};

// test setup
// export const getVideoInfo = (req, res) => {
//     // test data setup
//     const mockData = {
//         title: 'Random title',
//         descripton: 'Random description for this video.',
//         duration: 'PT4H43M01S', // ISO 8601
//         url: 'https://www.youtube.com/watch?v=CgkZ7MvWUAA&'
//     };

//     res.json(mockData);
// };