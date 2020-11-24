import React, { Component } from 'react'
import Header from './header'
import Content from './contents'
import data from './data'
class Timeline extends React.Component
{
    render()
    {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="~~Timeline~~" />
                    <Content activities={data.activities} />
                </div>
            </div>
        );
    }
}

export default Timeline;