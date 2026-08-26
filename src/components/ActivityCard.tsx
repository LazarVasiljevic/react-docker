import React from 'react'
import { useNavigate } from 'react-router-dom';

interface ActivityCardProps {
    title: string;
    image: string;
    link: string;
}


function ActivityCard({ title, image, link }: ActivityCardProps) {
    const navigate = useNavigate();
  
    return (
        <div onClick={() => navigate(link)}
            className="w-42 overflow-hidden rounded-lg border-2 border-black bg-[#F8D98B] shadow-[2px_3px_0px_black] cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:shadow-[3px_5px_0px_black]"
        >
            <img
                src={image}
                alt={title}
                className="h-61 w-full object-cover"
            />
            <div className="px-2 py-1">
                <h2 className="text-lg font-semibold text-gray-900">
                    {title}
                </h2>
            </div>
        </div>
    );
}

export default ActivityCard