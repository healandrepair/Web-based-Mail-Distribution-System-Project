# Project Name: Web Based Mail Distribution System 
![G Unit logo](https://user-images.githubusercontent.com/54693111/138274242-9a7e10e0-ddff-4971-b49a-b4ac8891b545.png)

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

Canvas currently does not allow a means for lecturers to send out individual feedback to students in a convenient manner. Sending out individualised emails is time consuming, tedious and prone to human errors. Right now when grades or feedback is given, there isn’t much personalisation because certain templates for emails only incorporate some form of plain marks feedback with no lecturer specific personalisation. Therefore, the process could be simplified with some form of automation and personalisation.

Our solution is to provide University of Auckland (UoA) staff with a web-based system to quickly send out an email to all appropriate students, and it will be accessible using their Google UoA credentials. Teaching staff will upload a CSV file with email data, and an email template specifying the template of the email to increase personalisation of individual emails. Users should be able to store and retrieve the email data that they have uploaded.

## Technologies that are used to build the project

- HTML5, CSS & JavaScript for front-end
- PHP v8.0 for back-end
- MySQL for database
- Google Cloud Platform (GCP) for login, database & host website
- PHPMailer v6.5 for email distribution
- OnlyDomains to create our website domain

## Instructions on how to install and setup the project (specify all dependencies).

If you want to run the website on your local server (localhost):
1. Download & install Xampp, and you will notice that you have folder called "htdocs".
2. Download & install PHP.
3. Clone this repository "Web-based-Mail-Dsitribution-System_Project" to your computer.
4. Copy & paste the project folder to Xampp "htdocs" folder. ![image](https://user-images.githubusercontent.com/54693111/138271659-240da2e0-521c-456d-9b13-f858a49d867b.png)
5. Run the Apache server on Xampp, click on "Admin", and it will open the webpage showing the content in "htdocs" folder.
![Xampp](https://user-images.githubusercontent.com/54693111/138271830-aa750350-1569-4a02-9bb1-2001d16b9572.JPG)
6. Click on the project folder on the webpage. ![localhost](https://user-images.githubusercontent.com/54693111/138272000-0cacf151-a1b3-40b4-9479-90f52c7e9273.JPG)
7. Click on our landing page "landing.html" to access our website. ![Landing page](https://user-images.githubusercontent.com/54693111/138272080-332e0d13-9f27-46a1-90e9-4c5cba4c2445.JPG)
8. Click on "login" to access our homepage.

## Usage Examples

- For testing/real usage: We have provided an example CSV file and an email template. Feel free to edit the content of these files to test our mail distribution system. For example, add your recipients' UoA UPIs to the CSV file and their feedback. When editing the email template, make sure that the placeholders match with the column names of your CSV file.

Link to our website's demo video: https://www.youtube.com/watch?v=F_Xh3tgmBow

## URL of the website where the project has been deployed
http://gunit.online/
Note: Emails sent by our deployed website might end up in the Spam email folder so please check it.

## Future Plan (Ideas for future releases)
- Secure our website with https.
- Fix the spam issue of our deployed site (as emails end up in the Spam folder of the receipient's email account because we deployed our site on a Virtual Machine).
- Add a feature for lecturers to delete a specific CSV file from the database.
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
- https://www.onlydomains.com/















