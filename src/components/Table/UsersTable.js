import React from 'react';
import { Badge, Button } from 'reactstrap';

const UsersTable = ({ users, showDeleteModal, showEditModal }) => {
    return (
        <>
            <table className="r-table table">
                <thead>
                    <tr className="font-face-gm">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody className="font-face-gm">
                    {users.map((user) => {
                        return (
                            <tr key={`td_${user.id}`}>
                                <td className="text-muted w-25">
                                    {user.first_name} {user.last_name}
                                </td>
                                <td className="text-muted w-25">
                                    {user.email}
                                </td>
                                <td className="text-muted w-25">{user.role}</td>
                                <td className="text-muted w-25">
                                    <Badge
                                        color={
                                            user.status === 'Active'
                                                ? 'success'
                                                : 'light'
                                        }
                                        pill
                                        className="mb-1"
                                    >
                                        {user.status}
                                    </Badge>
                                </td>
                                <td className="text-muted w-25">
                                    <div className="table-buttons">
                                        <Button
                                            outline
                                            color="primary"
                                            className="icon-button "
                                            onClick={() => showEditModal(user)}
                                        >
                                            <i className="simple-icon-pencil" />
                                        </Button>
                                        <Button
                                            outline
                                            color="primary"
                                            className="icon-button"
                                            onClick={() =>
                                                showDeleteModal(user.id)
                                            }
                                        >
                                            <i className="simple-icon-trash" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default UsersTable;
