import React from 'react'

const Notification = (props) =>
{
    const { level, message } = props;
    const classNames = ['alert', 'alert-' + level]
    return (
        <div className={classNames}>
            {message}
        </div>
    )
};
export default Notification;