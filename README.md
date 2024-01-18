# Note App README

## Overview

Welcome to Note App! This application is designed to help users organize and manage their notes efficiently.

## Features

### 1. User Authentication

Before diving into note-taking, users must securely log-in an account via google. This ensures that their notes are private and accessible only to them.

### 2. CRUD(Create, Read, Update, Delete)

Users should be able to create, edit, and view, delete notes with ease. 

## Getting Started

1. **Installation:**
   - Create a folder first, name it anything you want. Then go to the folder directory.
   - Fork, pull or download the GitHub repository [https://github.com/CesarF1204/note-app](https://github.com/CesarF1204/note-app).
   - Open your terminal and navigate to the project directory. Ex. `git pull https://github.com/CesarF1204/note-app`
   - Run the command `npm install` to install the required packages and dependencies.
   - Get the `.env` file provided by the owner and save it on the root folder.
     
3. **Creating Database in MongoDB   :**
   - Connect to mongodb://localhost:27017 and create database in MongoDB.
   - Database name: note-app
   - Collections: notes and users
   
3. **Running the App Locally:**
   - After installing the dependencies, run the command `npm run start:dev` in your terminal.
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000).
   - You will be redirected to Google Authentication.
   - Log in via Google to access the Note App.

4. **Creating Notes:**
   - Once authenticated, you can create a new note by entering anything in the title and content fields.
   - Click the "Add Note" button to add the note.
   - The added note will be displayed in the "All Notes" list.

5. **Deleting Notes:**
   - To delete a note, navigate to the "All Notes" list
   - Navigate to the "All Notes" list.
   - "Delete" button will show only on the notes that you added and have access.
   - Find the note you want to delete, and click the "Delete" button.

6. **Editing and Updating Notes:**
   - To edit a note, navigate to the "All Notes" list.
   - "Edit" button will show only on the notes that you added and have access.
   - Find the note you want to edit, and click the "Edit" button.
   - Make changes to the title or content, then click the "Update" button to save the changes.
