import React, { useState } from 'react';
import { Button, CardTitle, Spinner } from 'reactstrap';
import DeleteModal from '../Modal/Modal';
import SideModal from '../Modal/SideModal';
import Pagination from '../Pagination/Paginations';
import UsersTable from '../Table/UsersTable';
import useUsers from '../hooks/useUsers';
import Toast from '../Toast/Toast';

const UsersContent = () => {
    const [deleteModal, setDeleteModal] = useState({ visivel: false });
    const [sidePanel, setSidePanel] = useState({ visivel: false });

    const {
        users,
        isFetching,
        page,
        onChangePage,
        totalUsers,
        onDeleteUser,
        onSubmitNewUser,
        onEditUser,
        toastMessage,
        onClearToastMessage
    } = useUsers();

    const onDeleteClick = () => {
        onDeleteUser(deleteModal.userId);
        setDeleteModal({ visivel: false });
    };

    const tableState = () => {
        if (isFetching) {
            return (
                <div className="spinner">
                    <Spinner className="loading-spinner" type="grow" />
                    Loading
                </div>
            );
        } else if (users.length === 0) {
            return <>No users to show. Try adding a new user</>;
        } else {
            return (
                <>
                    <UsersTable
                        users={users}
                        showSidePanel={() => setSidePanel({ visivel: true })}
                        showDeleteModal={(userId) =>
                            setDeleteModal({ visivel: true, userId })
                        }
                        showEditModal={(user) =>
                            setSidePanel({ visivel: true, user })
                        }
                    />
                    <Pagination
                        totalUsers={totalUsers}
                        currentPage={page}
                        handlePagination={onChangePage}
                    />
                </>
            );
        }
    };

    return (
        <>
            <Toast
                toastMessage={toastMessage}
                onClearToastMessage={onClearToastMessage}
            >
                <CardTitle>
                    <h1 className="font-face-gm top-left-card-title">Users</h1>
                    <Button
                        className="top-right-button-container"
                        color="primary"
                        outline
                        onClick={() => setSidePanel({ visivel: true })}
                    >
                        Add user
                    </Button>
                </CardTitle>

                {tableState()}

                <DeleteModal
                    onConfirm={() => onDeleteClick()}
                    onDismiss={() => setDeleteModal({ visivel: false })}
                    labels={{
                        header: 'Delete user?',
                        body: "You can't undo this action",
                        cancelButton: 'Cancel',
                        confirmButton: 'Delete'
                    }}
                    isVisible={deleteModal.visivel}
                />
                {sidePanel.visivel && (
                    <SideModal
                        isVisible={true}
                        user={sidePanel.user}
                        onDismiss={() => setSidePanel({ visivel: false })}
                        onSubmitNewUser={onSubmitNewUser}
                        onEditUser={onEditUser}
                    />
                )}
            </Toast>
        </>
    );
};

export default UsersContent;
