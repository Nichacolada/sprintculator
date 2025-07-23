# Sprintculator - Product Requirement Document (PRD)

## Overview
Sprintculator is a tool designed to help product managers and teams plan sprints effectively by managing tasks across four stages:
1. **Define Stage**: Product managers define the Software Requirements Specification (SRS) for each task.
2. **Design Stage**: Designers work on the task based on the SRS provided by the product manager.
3. **Dev Stage**: Engineers (Frontend, Backend, AI, Infrastructure) implement the task.
4. **QA Stage**: Testers create and execute test cases based on the SRS, including edge cases.

The tool ensures that the workload for each team member fits within their available working hours for the sprint.

## Requirements

### 1. Task Management Table
- **Input**: A table with tasks listed in rows and the following columns:
  - Task name/description
  - Assigned Product Manager (PM)
  - Assigned Designer(s)
  - Assigned Engineers (tagged by functionality: FE, BE, AI, Infra)
  - Assigned QA Tester(s)

### 2. Working Hours Input
- **Input Fields**:
  - For each team member (PM, Designer, Engineer, QA), provide:
    - Number of working days in the sprint
    - Hours per day
    - Deductible meeting time (hours)
- **Output**: Total available working hours per team member for the sprint.

### 3. Task Hours Input
- **Input Fields**:
  - For each task, input the estimated hours required for:
    - Define Stage (PM)
    - Design Stage (Designer)
    - Dev Stage (Engineers, split by functionality)
    - QA Stage (QA Tester)

### 4. Work Distribution Proposal
- **Logic**:
  - Calculate the total hours required for each team member across all tasks.
  - Compare this with their available working hours.
  - If the total exceeds available hours, highlight the overage and suggest adjustments.
- **Output**:
  - Visual representation of workload distribution (e.g., bar chart or color-coded table).
  - Suggestions for redistributing tasks or adjusting estimates to balance the workload.

### 5. Adjustment Opportunity
- **Feature**: Allow users to:
  - Reassign tasks between team members.
  - Adjust estimated hours for tasks.
  - Recalculate the workload distribution dynamically.

## Success Metrics
- Reduction in sprint planning time.
- Improved balance of workload across team members.
- Fewer instances of overcommitment or burnout.

## Future Enhancements
- Integration with project management tools (e.g., Jira, Trello).
- Historical data analysis to predict future sprint capacity.
- Automated task assignment based on past performance.

---

*Designed for product managers and teams to streamline sprint planning and ensure sustainable workloads.*

