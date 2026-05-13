# Battle of Minds

**Battle of Minds** is a mobile quiz learning application designed for students who want an engaging and accessible way to practice academic subjects. The app allows students to browse subjects, select topics, answer quizzes, view results, review answers, and monitor their learning progress through saved score history.

## Problem Statement

Some students want to improve their academic knowledge, but they often struggle to find a simple, accessible, and engaging way to practice what they have learned. In a traditional learning setup, students usually depend on notes, books, classroom discussions, or printed reviewers. However, these materials do not always provide immediate feedback. A student may answer practice questions, but without instant results and explanations, it becomes harder to determine which answers are correct, what mistakes were made, and which topics need further improvement.

**Battle of Minds** addresses this concern by providing an interactive mobile quiz application where students can practice subject-based and topic-based quizzes, receive immediate results, review correct answers, and monitor their learning progress.

## Target Users

The target users of this application are **students** who want an engaging way to practice academic subjects. The app is intended to help them enhance their understanding through quizzes. Instead of only reading notes or memorizing lessons, students can answer topic-based questions and immediately see their results after completing a quiz.

## Features

### Midterm MVP Features

- Home screen
- Subject browsing
- Topic selection
- Multiple-choice quiz
- Quiz timer
- Quiz result screen
- Answer review with explanations
- User registration
- User login and logout
- Forgot password
- Firebase Authentication
- Firestore score saving
- Profile screen
- Score history
- Loading states, empty states, and error handling
- Form validation

### Final Features

- Login persistence
- Edit profile
- Learning notifications
- Delete notification
- Delete score history record
- App logo integration
- Android APK build using EAS Build
- Firebase Security Rules for private user data
- Improved UI/UX with consistent purple theme
- Firestore query for user score history
- Local caching using AsyncStorage
- Personalized progress feedback after quizzes

## Technology Stack

- Expo
- React Native
- Expo Router
- Firebase Authentication
- Firebase Firestore
- AsyncStorage
- EAS Build

## Architecture Overview

The project follows an organized folder structure to separate screens, reusable components, constants, services, data, and types.

```text
BattleOfMinds
├── app
│   ├── _layout.tsx
│   ├── login.tsx
│   ├── register.tsx
│   ├── forgot-password.tsx
│   ├── topics.tsx
│   ├── quiz.tsx
│   ├── result.tsx
│   ├── notifications.tsx
│   ├── score-history.tsx
│   ├── edit-profile.tsx
│   └── (tabs)
│       ├── _layout.tsx
│       ├── index.tsx
│       ├── subjects.tsx
│       └── profile.tsx
├── assets
├── components
├── constants
├── data
├── services
├── types
├── app.json
├── eas.json
└── package.json