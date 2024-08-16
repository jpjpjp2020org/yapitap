## YouTube API Tool for Analyzing Progress (YAPITAP)

### Goal:

A stand-alone API that can:

    - Receive Youtube links.
    - Request video metadata from the Youtube API.
    - Return video title and description and the link itself to a consuming client.
    - Receive timestamped youtube links.
    - Return video progress calculation and the timestamped link to a consuming client.

Turning free Youtube resources into trackable courses, similar to UDemy and Coursera and allowing users to manage their bookmarks for structured learning.

### Approch:

- "Black box" and "API as the central truth", so the client that consumes the API handles displaying the info, but requires as little calculations and conditional decisions as possible.
- Focusing on problem at hand, but keeping in mind that API might be expanded into handling other different tasks.
- Developing specific endpoints and not trying to abstract different Youtube link processing under one unified process, which would make consuming the API by various clients more complex.
- Focusing on te API getting as much useful info on 1st request from youtube API and sending this back for the client to pass on to db for storing - which hopefully will reduce the need or any newAPI calls to euie the API to consume the youtube API again.

### TODO:

- Use playlist value to group single courses - more of a client side thing!
- NB - need to receive the 2nd request for progress with duration- so can calc progression!
- Restrict youtube API key under credentials!
- client side should show duration on public profile - data integrity
- handle the logic for going over duration: - DONE

    ```json
    {
        "bookmark_url": "https://youtu.be/CgkZ7MvWUAA?t=111114078",
        "timestamp": 111114078,
        "progress": "654343.5%"
    }
    ```
- Main point - on client side user can mark complete for already done courses too - unified logic. - DONE
- consider if need to return a clean url with 2nd request. - NO NEED
