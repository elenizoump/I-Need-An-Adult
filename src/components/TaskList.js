import React from 'react';
import { useState } from 'react';
import TaskCard from './TaskCard';

const tasks = ['task1', 'task2', 'task3', 'task4', 'task5'];

export default function TaskList() {
  return (
    <div>
      {tasks.map((task) => {
        return <TaskCard />;
      })}
    </div>
  );
}