<b>Темы:</b> классы, наследование классов, методы и свойства, асинхронность, event loop, callback-hell, promises, async/await, file system

### [Задание 1](https://github.com/kvther1ne/Frontend-Bootcamp/blob/main/day01/chapter_1/classes.js)
Описать класс Employee

![Иллюстрация к проекту](https://user-images.githubusercontent.com/48245816/170902240-ab540276-e2b6-450f-ac32-d11ced7580ea.png)

### [Задание 2](https://github.com/kvther1ne/Frontend-Bootcamp/blob/main/day01/chapter_1/hardClasses.js)
Создать 5 новых классов

![Иллюстрация к проекту](https://i.ibb.co/FBttW42/Hard-classes-schema.png)

### [Задание 3](https://github.com/kvther1ne/Frontend-Bootcamp/blob/main/day01/chapter_2/fsSimple.js)
Прочитать данные из файла file1.txt, после прочтения полученные данные надо записать в файл file2.txt. Реализовать это надо 3 разными способами, для каждого способа своя функция: 
- readAndWriteCallbackHell() - в данной функции ты должен использовать только передачу коллбека в ассинхронную функцию. 
- readAndWritePromises() - в данной функции ты должен использовать промисы и then. 
- readAndWriteAsyncAwait() - в данной функции можно использовать async await.

### [Задание 4](https://github.com/kvther1ne/Frontend-Bootcamp/blob/main/day01/chapter_2/fsHard.js)
Когда пользователь загружает страницу - данные с сервера поступают на клиент асинхронно и неравномерно.
Необходимо написать progressbar, применимый не к статически заданному времени, а к размеру «загружаемых» файлов.
Прогрессбар будет заполняться до общего размера всех имеющихся файлов в папке. Если есть файл размером 5Кб, при общем размере всех файлов - 10 Кб, то полоса загрузки после обработки такого файла должна заполниться на 50% (100% * (5Кб / 10Кб)).
Сделать полосу загрузки(progressbar) в Консоли Терминала. Не в браузере! Она должна увеличиваться с каждым новым загруженным файлом.
