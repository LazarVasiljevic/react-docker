import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/ActivityCard.css';

interface ActivityCardProps {
    title: string;
    image: string;
    link: string;
}


function ActivityCard({ title, image, link }: ActivityCardProps) {
    const navigate = useNavigate();
  
    return (
        <div onClick={() => navigate(link)} className='activity-card'>
            <img
                src={image}
                alt={title}
                className="activity-card-image"
            />
            <div className="activity-card-content">
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    );
  
}

export default ActivityCard