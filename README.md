# 🍽️ DineTime - Restaurant Slot Booking System

DineTime is a mobile application built with **React Native & Expo** that allows users to effortlessly **book dinner slots**, explore **restaurants**, and manage their **dining schedule**.  
With an intuitive interface, users can select a preferred date & time, track their booking history, and manage their personal profile – all in one place.

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🎯 Goals](#-goals)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
- [⚙️ Configuration](#️-configuration)
- [📸 Screenshots (Optional)](#-screenshots-optional)
- [🐛 Troubleshooting](#-troubleshooting)
- [🤝 Contributors](#-contributors)
- [📜 License](#-license)

---

## ✨ Features

- 📅 **Book Slots** – Select your preferred date & time for dinner.
- 🍴 **View Restaurants** – Browse restaurants and their dining schedules.
- ⏳ **Check Availability** – Find available slots on any date.
- 📝 **Booking History** – View and manage past reservations.
- 👤 **User Profile** – Manage and update user details.
- 🎨 **Beautiful UI** – TailwindCSS + NativeWind for modern styling.
- 🔒 **Firebase Integration** – Secure data handling and authentication.

---

## 🎯 Goals

The goal of **DineTime** is to provide a **seamless dining reservation experience** by:

- Simplifying the process of finding and booking dinner slots.
- Reducing wait times and improving user convenience.
- Giving restaurants a modern tool to manage bookings.

---

## 🛠️ Tech Stack

- ⚛️ **React Native (v0.79.3)** – Mobile framework
- 📱 **Expo (v53.0.11)** – Development & build platform
- 🔥 **Firebase** – Authentication & database
- 🎨 **TailwindCSS + NativeWind** – Styling
- 🧭 **React Navigation** – Navigation & routing
- ⏰ **Datetime Picker** – Smooth slot selection
- ✅ **Formik + Yup** – Form handling & validation
- 🧪 **Jest + Expo Testing Library** – Testing framework

---

## 📦 Installation

Follow these steps to set up the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/dinetime.git

# 2️⃣ Navigate to project folder
cd dinetime

# 3️⃣ Install dependencies
npm install
# or
yarn install

# 4️⃣ Start the app
npm start
```

---

## 🚀 Usage

Once the app is running:

1. 📱 Scan the QR code with the **Expo Go app** to run it on your device.
2. 💻 Or press `a` to run on Android Emulator, `i` for iOS Simulator, `w` for Web.
3. 🔑 Configure Firebase (see below) before using authentication features.

---

## ⚙️ Configuration

To enable full functionality:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add your Firebase config to the app (usually in a `firebaseConfig.js` file).
3. Enable Authentication, Firestore, and any other required Firebase services.

---

## 🐛 Troubleshooting

- ❌ **App not starting?** Run `expo start -c` to clear cache.
- ⚠️ **Firebase errors?** Check if your Firebase config is correctly set.
- 🛠️ **Styling issues?** Ensure `tailwindcss` is properly configured.

---

## 🤝 Contributors

👨‍💻 Developed by **[Sheikh Jabed](https://github.com/SK-Jabed)**

Contributions are welcome! Feel free to open issues & pull requests.

---

## 📜 License

This project is licensed under the **MIT License**.
You’re free to use, modify, and distribute it with attribution.

---
