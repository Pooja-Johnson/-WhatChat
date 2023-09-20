# WhatChat 
![image-removebg-preview (15)](https://user-images.githubusercontent.com/75480066/208282335-14768134-db00-4aa6-832e-55ba3e51d683.png)


WhatChat is a web application which focuses on improving user experience by providing a comfortable user interface similar to that of WhatsApp, to view exported chats.

Exported whatsapp chats are available to users as a text file, which are inconvenient to view and read.

- The webapp allows the end users to authenticate and upload exported chat text files to the platform
- The text file will then be parsed and displayed through a user interface similar to that of Whatsapp
- All previously imported chats of the user will be displayed in the platform.

*Image of text file of exported chat*

![chat2](https://user-images.githubusercontent.com/75480066/208280300-9d0507f6-e85a-4406-a4ad-210f147df6a0.jpg)

*Image of user friendly interface of our website which improves readability*

![3](https://user-images.githubusercontent.com/75480066/208288151-7af72140-00c8-46b7-b591-1940f1b7bc4d.jpeg)
![4](https://user-images.githubusercontent.com/75480066/208288154-5def45c3-ad14-4e0b-931f-4f2b9ead5c27.jpeg)
## Who uses WhatChat
- WhatsApp users who need to view their old chats, which were exported before back up feature was introduced.
- WhatsApp users who do not want their backed up chats to consume their limited Google Drive space
- WhatsApp users who want to declutter and organize their Whatsapp by backing up important but space consuming chats, thereby increasing their productivity

## How It Works
- Users are authenticated using Firebase Google Authentication
- The text file uploaded by the user is read line-by-line and stored as a list of message
- Each message is parsed using delimiters 
- The messages are aligned to left hand side and right hand side based on the input Active User, given by end user
- For more details and the live version of the project, visit [WhatChat](https://whatchat-eb1e2.web.app/).
## Screenshots
- Sign In
![1](https://user-images.githubusercontent.com/75480066/208288133-8b1e0060-f7bb-4432-972e-4f5d7e359f2f.jpeg)
- Landing page
![2](https://user-images.githubusercontent.com/75480066/208288145-1dce3049-688e-4fd3-a554-e8f5020ea230.jpeg)
- Loaded chat in user-friendly UI
![3](https://user-images.githubusercontent.com/75480066/208288151-7af72140-00c8-46b7-b591-1940f1b7bc4d.jpeg)
![4](https://user-images.githubusercontent.com/75480066/208288154-5def45c3-ad14-4e0b-931f-4f2b9ead5c27.jpeg)

## Requirements

- [Node](https://nodejs.org/en/download/)

```bash
  node.js >= 8.0.0
```
- Install all dependencies

```bash
  npm install
```

## Tech Stack

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)


## License

[MIT](https://choosealicense.com/licenses/mit/)
