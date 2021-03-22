
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# The Employee Tracker (Management System)

Repo: https://github.com/zehrl/employee-tracker

---

## Table of Contents
* [Description](#Description)
* [Instructions](#Instructions)
* [Questions](#Questions)
* [License](#License)

---

## Description

The Employee Tracker is a company management system to view, edit, create and delete employees, managers, departments and roles in a database. The user can track the budget of each department as well.

*NOTE: this project is still in work. Many features like adding and deleting employees are not implemented yet.*

---

## Instructions

1. Clone this repo to your local device.
2. Run *npm i* in the root folder to download node dependencies.
3. Using MySQL Workbench, run the schema & seed data located in /db/schema.sql and /db/seeds.sql. (Because you cannot add employees as of 3/22, you must use seed data)
4. Run "node index.js" in the command line to view the main menu.

![employee directory live app website](/readmeAssets/main-menu.png)

5. From here, use the arrow keys and enter key to navigate throught the menu's. There's only functionality for: viewing all employees, employees by department & by manager, viewing all roles and removing rolls.

6. If you are ever stuck, type "ctrl+c" to exit the node application.

---

## Questions

* My github: https://github.com/zehrl
* Email me at zehrl315@outlook.com if you have any questions.

---

## License

© 2021 Logan J. Zehr

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.