const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix server issue",
        "taskDescription": "Resolve downtime issue on the main server.",
        "taskDate": "2025-03-25",
        "category": "IT Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update employee handbook",
        "taskDescription": "Add new sections about remote work policy.",
        "taskDate": "2025-03-20",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Conduct meeting",
        "taskDescription": "Schedule and conduct a client feedback meeting.",
        "taskDate": "2025-03-22",
        "category": "Management"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop login feature",
        "taskDescription": "Implement user login functionality with validation.",
        "taskDate": "2025-03-27",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix CSS bugs",
        "taskDescription": "Fix layout issues on the homepage.",
        "taskDate": "2025-03-15",
        "category": "UI/UX"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database optimization",
        "taskDescription": "Optimize database queries to improve performance.",
        "taskDate": "2025-03-28",
        "category": "Backend"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement API",
        "taskDescription": "Create and document REST APIs for the project.",
        "taskDate": "2025-03-30",
        "category": "API Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Conduct user testing",
        "taskDescription": "Run user testing sessions for the new app.",
        "taskDate": "2025-03-18",
        "category": "QA"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write blog post",
        "taskDescription": "Write a blog post about cybersecurity trends.",
        "taskDate": "2025-03-26",
        "category": "Content Writing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO optimization",
        "taskDescription": "Improve website SEO to increase traffic.",
        "taskDate": "2025-03-28",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create video tutorial",
        "taskDescription": "Record and edit a tutorial video on JavaScript basics.",
        "taskDate": "2025-03-22",
        "category": "Video Production"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Customer support",
        "taskDescription": "Handle customer support tickets.",
        "taskDate": "2025-03-10",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Create product design",
        "taskDescription": "Design mockups for the new product.",
        "taskDate": "2025-03-28",
        "category": "Design"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

    

   export const  setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
   }

   export const  getLocalStorage =()=>{
const employees = JSON.parse(localStorage.getItem('employees'));

const admin = JSON.parse(localStorage.getItem('admin'));

return {employees,admin}

   } 