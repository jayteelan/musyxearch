# Project Overview

![diarrhea planet](https://data.whicdn.com/images/20753190/original.gif "I read the instructions")

## musYXearch

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
![wireframe](https://i.imgur.com/kdQuqpa.png)

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
![hierarchy](https://i.imgur.com/8jjZycw.png)

## Components

| Component    | Description                                                    | Type       |
| ------------ | -------------------------------------------------------------- | ---------- |
| app.js       | contains primary structure and methods                         | class      |
| main         | displays current content based on inherited X/Y states         | functional |
| header       | displays current section based on inherited category state     | functional |
| about        | instructions on how to use the app, copyright note             | functional |
| search       | sends user input for API call                                  | class      |
| PictureList  | displays list items with associated thumbnail pictures         | functional |
| ReleaseDeets | displays detailed information about a selected album or single | functional |

## Priority Matrix

![matrix](https://i.imgur.com/6PXX42L.png)

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish! Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.

| Component                                           | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| create file structure                               |    H     |      3hrs      |     2hrs      |             |
| fetch/parse API data                                |    H     |      8hrs      |     7hrs      |             |
| code search components/ screen                      |    H     |      3hrs      |     3hrs      |             |
| code/link remaining screens with inherited API data |    H     |     12 hrs     |     12hrs     |             |
| Styling                                             |   L-M    |      8hrs      |               |             |
| Post-MVP                                            |    L     |     6 hrs      |               |             |
| Total                                               |          |     40 hrs     |               |             |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day       | Deliverable                                                          | Status            |
| --------- | -------------------------------------------------------------------- | ----------------- |
| Jan 24th  | Project Pitch / Wireframes / Priority Matrix / Functional Components | Complete          |
| Jan 27th  | create/route components with placeholder divs                        | (nearly) Complete |
| Jan 28th  | functioning search bar/API call/data parse to console                | Complete          |
| Jan 29th  | render data to DOM                                                   | Complete          |
| Jan 30th  | Styling/Post-MVP                                                     | Incomplete        |
| Jan 31tst | Present                                                              | Incomplete        |

## Additional Libraries

- **react-router-dom**: enable navigation between component screens
- **axios**: retrieve API data
- **dotenv**: hide API key
- [**react-string-replace**](https://www.npmjs.com/package/react-string-replace): simplifies string replacement in react

## Issues and Resolutions

**29. Jan**

- album title parse working (although it sometimes leaves double-comma artifacts) after declaring `reactStringReplace` directly inside the `map` function instead of defining it outside and only invoking it inside the `map`
- `PicListItem` components did not update with changes in `posX` state. Unable to find any solutions via Google, I consulted Corey who - after another hour or so of testing, Googling, and learning - worked out a solution: set an internal state in the `PicListItem` component tracking its X-position and compare it to the global X-position state (from `App.js`); if they aren't equal, the component re-renders and updates the internal state so it's once again equal to the global X-position (thereby preventing an infinite loop).
- although data was rendering to each screen properly, the direction buttons were behaving erratically. A diagram of the app's overall "grid" structure was drawn and the behavior of each button on each screen was mapped to determine under which conditions they would throw errors or otherwise misbehave. Using this diagram, the various navigation functions were refactored to account for these exceptions so that the buttons (mostly) behaved as expected.
- although the links from overview pages (e.g., the list of albums) properly routed to a detail page for the selected release, the up-down navigation buttons did not function properly; the complexity of this issue was compounded by the fact that although the releases were sorted in chronological order, the id numbers taken from the API and used as params were non-consecutive. Several possible solutions were investigated to no avail. After taking a break for mental refreshment, I pseudocoded a roundabout solution: get the current release's index in the array of releases (the `arrY` state), increment that number by one, retrieve the id number from the release object at the incremented index, then place that id in the slug. This approach was successfully coded until it came time to render the new page when the button was clicked: instead, it reloaded the same page. Some headway was made by wrapping the `Directions` component in a `Route` tag to provide access to a `history.push()` method, but this still did not work and had the side-effect of removing the navigation buttons from the `Release` page. The buttons reappeared when they were imported and directly rendered into the `Release` component, but they were still nonfunctional.
  This issue remains unresolved.

**27. Jan**

- main screen initially did not update with X-position changes; refactored code to create function in App.js to set state and then call this function in Main.js
- album titles com with artist name attached; discovered that `str.replace()` does not work in react. installed `react-string-replace` to facilitate renaming, but not yet able to use it in mapped arrays.

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

**29. Jan**

- several components refactored from functional to class so they could change states to facilitate navigation
- `ResultList` component and method renamed to `PicListItem` to clarify its role
- internal `pos` state and a `componentDidUpdate()` function added to `PicListItem` to make `PicList` make new API calls (and not get stuck in infinite loops) when `posX` (i.e., the type of release) changed.

**28. Jan**

- converted `ResultList` component from functional to class to accomodate changing `isLoading` state to prevent infinite loop

**24. Jan**

- scrapped plan to structure with CSS grid and instead focus on full-viewport screens
