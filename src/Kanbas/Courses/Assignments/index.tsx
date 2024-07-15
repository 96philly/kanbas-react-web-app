import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { MdGroup, MdAssignment } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { BsGridFill, BsList } from 'react-icons/bs';
import { VscBook } from 'react-icons/vsc';
import './styles.css';

export default function AssignmentsScreen() {
    return (
        <div id="wd-assignments-screen" className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group w-50">
                    <span className="input-group-text">
                        <FaSearch />
                    </span>
                    <input type="text" className="form-control" placeholder="Search Assignments" />
                </div>
                <div>
                    <button className="btn btn-outline-secondary me-2">
                        <MdGroup className="me-2" />
                        Teams
                    </button>
                    <button className="btn btn-outline-danger">
                        <MdAssignment className="me-2" />
                        New Task
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <span className="d-flex align-items-center">
                        <BsList className="me-2" />
                        <span>HOMEWORK</span>
                    </span>
                    <span className="d-flex align-items-center">
                        <span>40% of Grade</span>
                        <button className="btn btn-outline-secondary ms-2">
                            <FaPlus />
                        </button>
                        <FiMoreVertical className="ms-2" />
                    </span>
                </div>
                <div className="list-group list-group-flush">
                    {assignments.map((assignment) => (
                        <div
                            className="list-group-item d-flex justify-content-between align-items-center"
                            key={assignment.id}
                            style={{ borderLeft: '5px solid blue' }}
                        >
                            <div className="d-flex align-items-center">
                                <BsGridFill className="me-2" />
                                <VscBook className="me-2" style={{ color: 'blue', fontSize: '24px' }} />
                                <a className="wd-assignment-link fw-bold" href={`#/Courses/1234/Homework/${assignment.id}`}>
                                    {assignment.name}
                                </a>
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <span className="text-muted">{assignment.unit}</span>
                                <span className="text-muted">
                                    Available from {assignment.start}
                                </span>
                                <span className="text-muted">
                                    <BiCalendar className="me-1" />
                                    Deadline {assignment.due}
                                </span>
                                <span className="text-muted">{assignment.points} points</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <AiOutlineCheckCircle className="text-success" />
                                <FiMoreVertical className="ms-3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const assignments = [
    {
        id: 1,
        name: 'A1',
        unit: 'Module 1',
        start: '2024-07-01 at 12:00 AM',
        due: '2024-07-08 at 11:59 PM',
        points: 100,
    },
    {
        id: 2,
        name: 'A2',
        unit: 'Module 2',
        start: '2024-07-09 at 12:00 AM',
        due: '2024-07-16 at 11:59 PM',
        points: 100,
    },
    {
        id: 3,
        name: 'A3',
        unit: 'Module 3',
        start: '2024-07-17 at 12:00 AM',
        due: '2024-07-24 at 11:59 PM',
        points: 100,
    },
];

