'use strict'

// Summary: Which Data Structure to Use?
// arrays vs sets 

const tasks = ['code', 'eat', 'code']
const task = new Set(['code', 'eat', 'code'])

// objects vs maps
const taskss = {
    task: 'Code',
    day: 'Today',
    repeat: true,
}

const tasksss = new Map([
    ['task', 'code'],
    ['day', 'today'],
    [false, 'start codding!'],
])