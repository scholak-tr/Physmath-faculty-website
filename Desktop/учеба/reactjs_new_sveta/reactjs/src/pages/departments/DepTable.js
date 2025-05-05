import React from "react";

const DepTable = ({ department }) => {
    return (
            <table style={{border:"1px"}}>
                <thead> 
                    <tr> 
                        <th>Фото</th> 
                        <th style={{width:"25%"}}>Ф.И.О</th> 
                        <th style={{width:"20%"}}>Должность</th> 
                        <th>Перечень преподаваемых дисциплин</th> 
                    </tr> 
                </thead>
                <tbody>
                    {department.employees.map((person) => (
                        <tr key={person.id}>
                            <td>
                                <img 
                                    src={person.image} 
                                    alt={person.fio} 
                                    style={{
                                        width: "200px", 
                                        height: "auto", 
                                        objectFit: "cover"
                                    }} 
                                />
                            </td>
                            <td>{person.fio}</td>
                            <td>{person.jobtitle}</td>
                            <td>{person.listdiscip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
};

export default DepTable;
