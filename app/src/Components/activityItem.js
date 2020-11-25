import React, { Component } from 'react'

class activityItem extends React.Component
{
    render()
    {
        const { activity } = this.props;
        return (
            <div className="item">
                {activity.user.name}
                <div className="avatar">
                    <img
                        alt={activity.text}
                        src={activity.user.avatar} />
                </div>
                <span className="time">
                    {activity.timestamp}
                </span>
                <p>{activity.text}</p>
                <div className="commentCount">
                    {activity.comments.length}
                </div>
            </div>
        )
    }
}
export default activityItem;