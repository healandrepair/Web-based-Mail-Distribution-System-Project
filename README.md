# Project Name: Web Based Mail Distribution System 
![titlepage](https://user-images.githubusercontent.com/54693111/129130782-cce765e3-cbbd-4530-8115-d19cbc4856a9.jpg)

## Team 13 Roles 

- Alvee Alam - Front-end developer   
- Matthew McLachlan - Front-end developer 
- Quynh Vo - Front-end developer 
- Evan Ng - Back-end developer
- Zhonghao Mai - Back-end developer
- Markos Tadesse - Back-end developer
- Prateek Gounder - Back-end developer

## Link to Project Management tool

We used a Google Sheet to allocate tasks to members.
Access to our task sheet: https://docs.google.com/spreadsheets/d/1tDWb1UtjUcYNdym13fQ_3OFKGgCWNMXbuch58FvpjrU/edit?usp=sharing

## A short description of what the project is about

Canvas currently does not allow a means for lecturers to send out individual feedback to students in a convenient manner. Sending out individualised emails is time consuming, tedious and prone to human errors. Right now when grades or feedback is given, there isn’t much personalisation because certain templates for emails only incorporate some form of plain marks feedback with no lecturer specific personalisation. Therefore, the process could be simplified with some form of automation.

Our solution is to provide University of Auckland (UoA) staff with a web-based system to quickly send out an email to all appropriate students, and it will be accessible using their Google UoA credentials. Teaching staff will upload a CSV file with email data, and an email template specifying the template of the email to increase personalisation of individual emails. Users should be able to store and retrieve the email data they have uploaded.


## Technologies that are used to build the project

- HTML5, CSS & JavaScript for front-end
- PHP v8.0 for back-end
- MySQL for database
- Google Cloud Platform (GCP) for login, database & host website
- PHPMailer v6.5 for email distribution

## Instructions on how to install and setup the project (specify all dependencies).

If you want to run the website on your local server:
1. Download & install Xampp and you will notice that you have folder called "htdocs".
2. Download & install PHP.
3. Clone this repository "Web-based-Mail-Dsitribution-System_Project" to your computer.
4. Copy & paste the project folder to Xampp "htdocs" folder. ![image](https://user-images.githubusercontent.com/54693111/138271659-240da2e0-521c-456d-9b13-f858a49d867b.png)
5. Run the Apache server on Xampp, click on "Admin", and it will open the webpage showing the content in "htdocs" folder.
![Xampp](https://user-images.githubusercontent.com/54693111/138271830-aa750350-1569-4a02-9bb1-2001d16b9572.JPG)
6. Click on the project folder on the webpage. ![localhost](https://user-images.githubusercontent.com/54693111/138272000-0cacf151-a1b3-40b4-9479-90f52c7e9273.JPG)
7. Click on our landing page "landing.html" to access our website. ![Landing page](https://user-images.githubusercontent.com/54693111/138272080-332e0d13-9f27-46a1-90e9-4c5cba4c2445.JPG)

## Usage Examples

- For testing purposes: We have provided an example CSV file and an email template for you to edit. Feel free to edit the content of these files to test our mail distribution system.
- For real usage: Lecturers can edit the CSV file to include the marks and feedback of each student and edit the email template, such as replacing the placeholders with the column names of their CSV file.

## URL of the website where the project has been deployed
http://gunit.online/

## Future Plan (Ideas for future releases)
- Secure our website with https.
- Improve security because our database can easily be altered or deleted by anyone at the university. 
- Test the current prototype with a non-trivial real-world data set.
- Conduct usability testing to identify usability issues and improve user interface.
- Improve website accessibility. 
- Canvas integration & implement the University’s single sign on for login.

## Acknowledgements - tutorials used, projects referred to, people consulted etc.

- Our client Gerald, our lecturer Asma and our tutor Andrey.
- https://www.w3schools.com/
- https://sebhastian.com/javascript-csv-to-array/
- https://www.w3schools.com/howto/howto_js_sort_table.asp
- https://github.com/PHPMailer/PHPMailer
- https://developers.google.com/identity/sign-in/web
- https://www.intricatecloud.io/2019/07/adding-google-sign-in-to-your-webapp-pt-1/
- https://www.reddit.com/r/webdev/comments/95m8n5/google_signin_doesnt_refresh_button_after_signout/















