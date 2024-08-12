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


