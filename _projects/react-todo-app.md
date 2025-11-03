---
title: "React Todo Application"
description: "A feature-rich todo app with drag-and-drop, filtering, and local storage"
date: 2024-09-10
tags: [React, TypeScript, Vite]
image: /assets/images/projects/example-project-2.png
link: https://todo-demo.example.com
github_url: https://github.com/freddycervantes/react-todo
featured: true
---

## Overview

A modern todo application built with React and TypeScript, featuring an intuitive interface and powerful organization features.

## Features

- ✅ Create, edit, and delete tasks
- 🎯 Drag and drop to reorder
- 🏷️ Tag system for categorization
- 📱 Fully responsive design
- 💾 Automatic local storage sync
- 🌓 Dark mode support

## Technical Implementation

Built with modern React patterns including:
- Custom hooks for state management
- Context API for theme switching
- React Beautiful DnD for drag and drop
- TypeScript for type safety

## Code Sample

```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  tags: string[];
}

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      tags: [],
    };
    setTodos([...todos, newTodo]);
  };

  return { todos, addTodo };
};
```

## Challenges Solved

The main challenge was implementing smooth drag-and-drop while maintaining performance with large lists. I solved this using virtualization and memoization techniques.

## Future Enhancements

- Backend sync with cloud storage
- Collaborative features
- Recurring tasks
- Mobile app version
