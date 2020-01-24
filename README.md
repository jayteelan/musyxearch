# Project Overview

![diarrhea planet](https://data.whicdn.com/images/20753190/original.gif "I read the instructions")
## Project Name
musYXearch

**Project decription:** 
musYXearch pulls musical artist and release information from the Discogs API and presents it to the user in an X/Y-navigable grid - for example, an artist's releases will be positioned along the Y axis according to release type (album, EP, single) and the X axis according to release date.

## API Snippet

```
{
pagination: {
per_page: 50,
items: 3,
page: 1,
urls: { },
pages: 1
},
results: [
{
style: [
"Downtempo",
"Leftfield",
"Trip Hop",
"Fusion"
],
master_id: 57965,
thumb: "https://img.discogs.com/ZWKbNH4sfIq57hWywmX9SFmO5hM=/fit-in/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-87829-1408826976-2690.jpeg.jpg",
format: [
"Vinyl",
"LP",
"Album"
],
country: "US",
barcode: [
"0 9362-45989-1 6",
"1-45989-A-SR1",
"1-45989-B-SR1 R/G",
"ASCAP",
"BMI"
],
uri: "/Cibo-Matto-Viva-La-Woman/master/57965",
master_url: "https://api.discogs.com/masters/57965",
label: [
"Warner Bros. Records",
"Warner Bros. Records",
"Warner Bros. Records Inc.",
"Warner Bros. Records Inc.",
"WEA International Inc.",
"WEA International Inc.",
"Soul Urchin Songs",
"Trademark Music Inc.",
"CAM Cine TV Music, Inc.",
"The Sound Factory",
"Electric Lady Studios",
"Gateway Mastering",
"Specialty Records Corporation"
],
cover_image: "https://img.discogs.com/In5zhDYZqFiwiW_w7yV-z3MYx9I=/fit-in/600x595/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-87829-1408826976-2690.jpeg.jpg",
catno: "9 45989-1",
community: {
have: 2364,
want: 955
},
year: "1996",
genre: [
"Electronic",
"Hip Hop",
"Pop"
],
title: "Cibo Matto - Viva! La Woman",
resource_url: "https://api.discogs.com/masters/57965",
type: "master",
id: 57965
},
```

## Wireframes
(overall structure has been modified since this image was saved, but individual screen wireframes are accurate)
[wireframe](https://i.imgur.com/kdQuqpa.png)

### MVP

- artist search bar
- dynamically-rendered X/Y "grid" for search results 
- component cells (screens) for search results, artist, release

### Post-MVP

- implement CSS swipe gestures for touchscreen devices
- use localStorage to check if site has been accessed before and render instruction overlays if not
- add a Z-axis (content TBD, possibly different formats or versions of a title); rename product to muZYXearch in this case
- add pinch/zoom gestures linked to Z-axis (anticipate need for external library)

## React Component Hierarchy
(this architecture is more up-to-date than the one in the wireframe section; may add a header component on same level as Main)
[hierarchy](https://i.imgur.com/8jjZycw.png)

## Components


| Component | Description | Type |
| --- | --- | --- |
| app.js | contains primary structure and methods | class |
| main | displays current content based on inherited X/Y states | functional |
| header | displays current section based on inherited category state | functional |
| about | instructions on how to use the app, copyright note | functional |
| search | sends user input for API call | class |
| PictureList | displays list items with associated thumbnail pictures | functional |
| ReleaseDeets | displays detailed information about a selected album or single | functional |

## Priority Matrix

[matrix](https://i.imgur.com/6PXX42L.png)

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish!  Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| create file structure | H | 3hrs |  |  |
| fetch/parse API data | H | 8hrs |  |  |
| code search components/ screen | H | 3hrs |  |  |
| code/link remaining screens with inherited API data | H | 12 hrs |  |  |
| Styling | L-M | 8hrs |  |  |
| Post-MVP | L | 6 hrs |  |  |
| Total |  | 40 hrs |  |  |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Wireframes / Priority Matrix / Functional Components | Incomplete
|Jan 27th| Core Application Structure | Incomplete
|Jan 28th| Pseudocode / actual code | Incomplete
|Jan 29th| code/MVP | Incomplete
|Jan 30th| Styling/Post-MVP | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

- **react-router-dom**: enable navigation between component screens
- **axios**: retrieve API data
- **dotenv**: hide API key

## Issues and Resolutions

Use this section to list of all major issues you anticipate encountering during development and how you plan to tackle them. Be sure to update this section during development, documenting the actual resolutions you inacted, as well as any other unexpected obstacles you encountered along the way.

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

**24. Jan**
- scrapped plan to structure with CSS grid and instead focus on full-viewport screens
