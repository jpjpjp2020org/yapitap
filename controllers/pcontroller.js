export const getProgressInfo = (req, res) => {

    // prod
    const { url, duration } = req.body;

    // const url = 'https://youtu.be/CgkZ7MvWUAA?t=4347'; // mock timestamped URL
    // const duration = 'PT4H43M01S'; // mock duration in ISO 8601

    const timestampMatch = url.match(/t=(\d+)/);
    if (!timestampMatch) {
        return res.status(400).json({ error: 'Timestamp not found in URL' });
    }

    const timestamp = parseInt(timestampMatch[1], 10);

    const durationSeconds = convertISOToSeconds(duration);
    let progressPercentage = ((timestamp / durationSeconds) * 100).toFixed(1);

    // capping the progress at 100% - so API does the interpretation and offloads the work from client.
    if (progressPercentage > 100) {
        progressPercentage = 100;
    }

    // send status too, so client does not have to interpret
    const status = progressPercentage < 100 ? "Progress" : "Completed";

    const progressData = {
        bookmark_url: url,
        timestamp,
        progress: `${progressPercentage}%`,
        status
    };

    res.json(progressData);
};

const convertISOToSeconds = (duration) => {
    const matches = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    let seconds = 0;

    if (matches[1]) seconds += parseInt(matches[1]) * 3600;
    if (matches[2]) seconds += parseInt(matches[2]) * 60;
    if (matches[3]) seconds += parseInt(matches[3]) * 1;

    return seconds;
};