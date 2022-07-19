import React, { useEffect } from 'react';

const Toast = ({ toastMessage, onClearToastMessage, children }) => {
    useEffect(() => {
        if (toastMessage.visible) {
            setTimeout(() => {
                onClearToastMessage();
            }, 2000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toastMessage.visible]);

    let toastClass = toastMessage.error
        ? 'notification-warning'
        : 'notification-success';

    return (
        <>
            {children}
            {toastMessage.visible && (
                <div className="notification-container">
                    <div>
                        <div
                            className={
                                'notification ' +
                                toastClass +
                                ' filled notification-enter-done'
                            }
                        >
                            <div className="notification-message" role="alert">
                                <h4 className="title">
                                    {toastMessage.message}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Toast;
