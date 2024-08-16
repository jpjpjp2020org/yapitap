export const getVideoInfo = (req, res) => {
    // test data setup
    const mockData = {
        title: 'Random title',
        descripton: 'Random description for this video.',
        duration: 'PT4H43M01S', // ISO 8601
        url: 'https://www.youtube.com/watch?v=CgkZ7MvWUAA&'
    };

    res.json(mockData);
};