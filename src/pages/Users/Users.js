import React from 'react';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import Header from '../../components/Header/Header';
import UsersContent from '../../components/Users/UsersContent';

const Users = () => {
    return (
        <div className="app-background">
            <Header>
                <div className="main-content">
                    <Card>
                        <CardBody>
                            <UsersContent />
                        </CardBody>
                    </Card>
                </div>
            </Header>
        </div>
    );
};

export default Users;
