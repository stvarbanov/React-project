
import { createContext, useState, useContext, useCallback } from "react";

const NotificationContext = createContext();

export const types = {
    error: 'error',
    warn: 'warn',
    info: 'info',
    success: 'success'
}

export const NotificationProvider = ({
    children
}) => {

    const [notification, setNotification] = useState({ show: false, message: '', type: types.error });

    const addNotification = useCallback((message, type = types.error) => {
        setNotification({ show: true, message, type });
    }, []);

    return (
        <NotificationProvider value={{ notification }}>
            {children}
        </NotificationProvider>
    )
}

export const useNotificationContext = () => {
    const state = useContext(NotificationContext);

    return state;
}

