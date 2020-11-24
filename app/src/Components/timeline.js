import React, { Component } from 'react'
import Header from './header'
import Content from './contents'
class Timeline extends React.Component
{
    render()
    {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header />
                    <Content />
                </div>
            </div>
        );
    }
}

export default Timeline;