# Web-based-Mail-Distribution-System-Project
![titlepage](https://user-images.githubusercontent.com/54693111/129130782-cce765e3-cbbd-4530-8115-d19cbc4856a9.jpg)

## Roles (Tentative)
- Alvee Alam - Website design and Database 
- Matthew McLachlan - CSV processing and Website design
- Quynh Vo - Database and Security (login)
- Evan Ng - Email distribution and Security (login)
- Zhonghao Mai - Security (login) and CSV processing
- Markos Tadesse - Email template processing and Database
- Prateek Gounder - Email template processing and Email distribution

## Executive Summary

Canvas currently does not allow a means for lecturers to send out individual feedback to students in a convenient manner. The current method of sending out individual emails is prone to several issues, especially regarding human errors. We want to provide teaching staff with an easy to use and accessible method to counteract this problem. 

The solution is to provide University of Auckland (UoA) staff with a web-based system to quickly send out an email to all appropriate students by simply providing a CSV file, an email suffix and a template email. This solution will be available to all lecturers as it will be accessible using their UoA credentials.

This project will be successful because it will alleviate the currently inefficient way lecturers approach sending feedback to students. The proposed method will reduce both the time it would take and the number of errors.  

## Background and Rationale
### Explain the current situation and identify shortcomings/problems. 
Sending out grades and other feedback can be a time consuming and daunting task for lecturers and tutors. In this project, we will be creating a web application to take in feedback data in a standardised format, then allowing the automatic distribution of said data to students.
Canvas does not currently have a way to send individualised feedback to students and other recipients quickly. For instance, users cannot upload a file containing student UPIs and grades and efficiently distribute it to students.
### A comparison of the existing solutions 
Current solutions are quite limited, including manually copying and pasting and then sending information to students one at a time. This can lead to numerous problems, including data loss, recipient mismatching, and can be time-consuming compared to an automated system. Another issue is that many previous external methods of sending out automatic emails have been shut down, so it would be nice to have a reliable and straightforward way of doing so available at any time.
### What benefit will the project have? 
Our project aims to make it easier for lecturers to send feedback to students using automation. This would mean that users would no longer have to send information to students one at a time manually. Users could just upload a Comma-Separated Values (CSV) file containing the feedback information, then have the data etc. sent out automatically to recipients listed within the CSV file at the click of a button. Benefits of this include saving their time, preventing errors, and making sure feedback is sent to the correct recipients. The feedback distribution process would be much easier and more efficient, meaning less time spent for instructors and less wait time for students to receive said feedback.

## Specific Aims
The project aims to solve the problem of instructors within the university being unable to seamlessly send targeted, student-specific emails. Overall, the issue can be grouped into several smaller issues, from which we can extract specific project aims. 

- The first aim derived from the complex problem space is the use of CSV files. We must aim to understand, process and store the data from the CSV files. This involves understanding the delimiters within the columns, processing CSV files with various delimiters, and storing the data in a database. 

- Another aim for our project will be to create a simple, easy-to-learn and easy-to-use web-based application that lecturers, who may not be familiar with new technology, can quickly learn, operate efficiently, and use the system repeatedly without issues.

- The system must be efficient, consistent with current mail-distribution system standards and repeatable. Thus, we must minimise errors during the mail distribution process to avoid unnecessary rework. System status indicators must always work, and tasks should be easily repeatable, as feedback sending is a frequent task for many lecturers. We aim to iterate the system-level design multiple times as issues with prototypes are inevitable.

- System security is a paramount aspect of the system-level design. We aim to create a final concrete design that accounts for any outside attacks intended to take users’ private information. It is also crucial that student information is confidential to unauthorised users, such as lecturers who have no association with the student. 

- The nature of agile methodologies implies that the user and system requirements will change throughout the project. Because of this, we aim to frequently meet with the client to discuss the project progress and our solution scope. If there are any misunderstandings between the project team and the client, we aim to correct these. In remedying the potential disconnect between the client, we will refine the user and system requirements and change the solution scope, which may mean some rework.

- It is in our interest to maintain a high level of cohesion within the group to operate effectively as a team. We aim to build excellent team chemistry throughout this project in the hopes that we could continue to work on other projects together in the near future or even continue to build this system even further once the course is complete. 

## Project Approach
### What tools/technologies will you use to develop the project?
We will be using HyperText Markup Language (HTML) to create the structure of our web-based mail distribution system by adding the necessary elements. Then we will use Cascading Style Sheets (CSS) to style our HTML elements using the w3.CSS stylesheet, which the client requires. Most importantly, JavaScript will be the primary programming language that we will be using to implement the system’s functionalities and make it more interactive. Such functionalities include the CSV file processor, email template processor, database connector for storing and retrieving data and email distributor. To store the user’s data, we plan to use a combination of PHP scripting language and MySQL. To host our web-based application, we are planning to use the Google Cloud Platform (GCP). We will be looking into mail merge options to distribute the emails.
### Describe the methodology that you will use to answer your specific aims.
Our team has decided to use the modern agile approach to manage our project over the traditional waterfall approach. We want to continue working with our client throughout our software development phases and quickly adapt to project requirement changes. We believe that it is better to have iterations to develop the product and show it to our client each time because the client’s feedback will help us refine our system until we get to the point when our client is satisfied.

We have decided to use the scrum methodology because having sprints, which are time-boxed iterations of two weeks, will help us focus on high priority tasks from our backlog and keep us motivated to complete them. It is the only methodology with sprint planning, daily standups, sprint review and sprint retrospective that let us stay on track, reflect and improve for our next sprint.

We have created a Google Sheet to help manage our project visually with our backlog tasks and the progress of our sprints on full display. All members will be responsible for working on their assigned tasks and updating their progress on the scrum board regularly to let the rest of the team know.
Link to our scrum board: https://docs.google.com/spreadsheets/d/1tDWb1UtjUcYNdym13fQ_3OFKGgCWNMXbuch58FvpjrU/edit?usp=sharing

### How will the team be organised – different roles and responsibilities?
Everyone in our team will be contributing to the user interface design, implementation, testing and deployment of our web-based application. We have assigned tentative roles to each member. For most functionalities we will have two members working on them, while the most complicated parts like the database and the security aspects will consist of three members working on them. We aim to create a flexible and supportive team environment to plan our sprints together and allow members to pick the tasks they want to do and are comfortable doing. As a team, we will help each other and ensure that all tasks complete on time to a high standard. Most importantly, our team leader will ensure that everyone is on task and is on the same page.

### What challenges do you see in completing the project?
Although we have some knowledge and experience using the essential web technologies from previous courses, our technical limitations could affect the implementation and integration aspect of the project. We would need to experiment using JavaScript to implement the functionalities. Additionally, we would need to learn how to set up a database system with PHP and MySQL and connect the database with the data tier of our application to store and retrieve our user’s data. 

We would need to acquire additional skills for hosting our web system using GCP. Hence, the testing aspect can be challenging because we need to ensure that the functionalities of our system are working individually and the system is working as a whole before we can bring it online. Security is a significant concern because we need to protect our data and web application from cyberattacks, and the login functionality would need to use the University Sign-on. Therefore, testing that the inputs are in the appropriate formats, that only authenticated and authorised users would be accessing their account and that the correct recipients are receiving the emails would be our interest.

Time constraint is another obstacle because we have to complete our project within the semester. Therefore, we would have to manage our time well while juggling other courses simultaneously.  

## Project Plan 
Include a comprehensive project plan (Gantt chart). 
The Gantt chart needs to include key milestones, the tasks needed, who will complete each task, when the task starts and ends, and what are the dependencies (prerequisites).
1. [Project Research] Research into existing mail distribution systems and canvas to determine how our system needs to be implemented.
2. [CSV Processing] Process CSV files. Create a simple program that takes the CSV files with their delimiters and processes the data to be stored in a database and used.
3. [Database System Creation] Create a database system for storing email data using PHP and SQL. 
4. [Web Design, Conceptual] Conceptual design for a website, designing for usability
5. [Website Creation] Create a website using HTML, CSS, JS or Typescript 
6. [System Security] Make sure the system is secure and ensure student and staff information privacy 
7. [System prototyping and integration] Create an overall system design from the subsystems, a prototype for client feedback
8. [System Review and Rework] Review the prototype with the client and rework the system-level design and its subsystems 

![gantt](https://user-images.githubusercontent.com/54693111/129131969-f61c0fe3-1c7a-4092-aaa9-a13898a5910e.jpg)













