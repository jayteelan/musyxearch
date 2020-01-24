# Project Overview


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

Display all wireframes here with any neccessary descriptions.

### MVP

- artist search bar
- dynamically-rendered X/Y grid for search results 
- component cells (screens) for search results, artist, release

### Post-MVP

- implement CSS swipe gestures for touchscreen devices
- add a Z-axis (content TBD, possibly different formats or versions of a title); rename product to muZYXearch in this case
- add pinch/zoom gestures linked to Z-axis (anticipate need for external library)

## React Component Hierarchy

Include an image of your component hierarchy that shows the data flow and architectural design of your app.

## Components

Based on the initial logic defined in the previous section, try to breakdown the logic further into stateless/stateful components. 

| Component | Description |Type |
| --- | --- | --- |
| Header | The Header receives props that render multiple nav titles and links | Functional |
| Main | This component houses multiple rendered views through React Router and controls data received from the initial API call in state | Class |

## Priority Matrix

Include an image of your Priority Matrix (X is time and Y is priority)

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish!  Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Wireframes / Priority Matrix / Functional Components | Incomplete
|Jan 27th| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28th| Pseudocode / actual code | Incomplete
|Jan 29th| Initial Clickable Model  | Incomplete
|Jan 30th| MVP | Incomplete
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
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
