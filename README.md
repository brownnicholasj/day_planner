# Day Planner

https://brownnicholasj.github.io/day_planner/

## Description

The day planner will allow a user to schedule their day and save events
throughout the day. It compares the current date/time with the schedule and
color codes the time.

- Allows the user to put important events/tasks throughout the day
- The day planner also allows a user to prioritize their schedule and check off
  as completed
- Allows the user to have a virtual day planner that they can access, yet still
  separate from email/shared calendars (private list)
- Putting this solution together, it taught me a lot about traversing the DOM
  and quick/non-repetitive steps to format the page/table.

![screenshot_001](assets/images/pageScreenshot.jpg)

## Table of Contents

- [Features](#features)
- [Credits](#credits)
- [Tests](#tests)

## Features

The page has a mobile first design, allowing users to utilize the page from a
smaller screen along with larger screen.
![feature_001](assets/images/features_001.jpg)<br> The page utilizes dayjs
date/time library to gather the current time and dates. We utilize that to
dynamically colorize the table [grey for past, red for present, and green for
future] ![feature_002](assets/images/features_002.jpg)<br> The user is able to
input text into the text area. If the user wants to save their text to local
storage, they can press the save/lock icon. It will change color when saved and
hold that color when saved... to unsave/clear the local storage, the user can
push the button again. ![feature_003](assets/images/features_003.jpg)<br> The
time blocks allow the user some 'grace' time before and after regular business
hours to account for time zone differences. It starts at 06:00 and ends at
18:00. [times are also shown in military time]<br> The local storage matches
current date with storage date, meaning... If you save information on a
different date then the current date, it will not load into the textarea.

## Credits

The formatting of the webpage utilizes Bootstrap (https://getbootstrap.com/).
<br> The formatting of the webpage utilizes FontAwesome
(https://fontawesome.com/)<br> The formatting of the webpage utilizes Google
fonts (https://fonts.google.com/)<br> The date functionality of the webpage
utilizes Dayjs date library.

## Tests

1. Run test before 18:00, times in the past will have grey color, current hour
   will be red and times in future will be green
   ![test001](assets/images/test001.jpg)

2. Type any values into any box - click outside the box and the text stays in
   the box. ![test002](assets/images/test002.jpg)

3. Click on the lock icon, turning the icon box white and the lock icon grey
   (this means the value is saved). ![test003](assets/images/test003.jpg)

4. Click a different box and populate the text area, but do not click the save
   icon. ![test004](assets/images/test004.jpg)

- click refresh, the saved text will stay populated the non-saved box will be
  blank ![test005](assets/images/test005.jpg)

5. Click on the white saved icon from previous text to 'unsave' the value from
   local storage. ![test006](assets/images/test006.jpg)

- click refresh and the text value will be cleared
