import React from 'react';
import { creators } from '../constants/index';
import { Mail, Phone, Facebook } from 'lucide-react';

const StudentProfile = ({ image, name, position, email, phone, facebook }) => {
    return (
      <div className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 my-4 mx-2"> {/* Card Styling */}
        {/* Image Div */}
        <div className="flex justify-center bg-gray-200 p-4">
          <img src={image} alt={name} className="w-full h-72 object-cover object-center" />
        </div>
        {/* Details Div */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 my-4">{position}</p>
          <div className="mt-2 text-sm space-y-1"> {/* Using space-y-1 for consistent spacing */}
                <div className="flex items-center text-gray-700 hover:text-orange-500">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
                <div className="flex items-center text-gray-700 hover:text-orange-500">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${phone}`}>{phone}</a>
                </div>
                <div className="flex items-center text-gray-700 hover:text-orange-500">
                    <Facebook className="w-4 h-4 mr-2" />
                    <a href={facebook} target='_blank'>{facebook}</a>
                </div>
          </div>
        </div>
      </div>
    );
};

const CreatorsSection = () => {
    return (
      <section id='creator' className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-white-800 mb-10">Meet the Creators</h2>
        <div className="flex flex-wrap justify-center"> {/* Centering the cards */}
          {creators.map((creator, index) => (
            <StudentProfile
              key={index}
              image={creator.image}
              name={creator.name}
              position={creator.position}
              email={creator.email}
              phone={creator.phone}
              facebook={creator.facebook}
            />
          ))}
        </div>
      </section>
    );
};

export default CreatorsSection;
