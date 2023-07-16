import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types"
export default function DropdownWindow({ title, data }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className='dropdown-header' onClick={toggleDropdown}>
                <span className='dropdown-title'>{title}</span>
                <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>&#x25BC</span>
            </div>
            {isOpen && (
                <div className='dropdown-content'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

DropdownWindow.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        })
    ).isRequired
};