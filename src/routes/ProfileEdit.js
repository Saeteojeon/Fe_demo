// src/components/ProfileEdit.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProfileEdit.css';

const ProfileEdit = () => {
  const { user_id } = useParams();
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    role: '',
    description: ''
  });

  useEffect(() => {
    // Fetch user profile from the API
    fetch(`/dailband/user/${user_id}/profile`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        setFormData({
          name: data.name,
          username: data.username,
          email: data.email,
          role: data.role,
          description: data.description
        });
      })
      .catch(error => console.error('Error fetching profile:', error));
  }, [user_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user profile via the API
    fetch(`/dailband/user/${user_id}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        alert('Profile updated successfully!');
      })
      .catch(error => console.error('Error updating profile:', error));
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-edit-container">
      <form onSubmit={handleSubmit} className="profile-edit-form">
        <label>
          이름:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          유저네임:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>
          이메일:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          역할:
          <input type="text" name="role" value={formData.role} onChange={handleChange} />
        </label>
        <label>
          설명:
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </label>
        <button type="submit">수정 완료</button>
      </form>
    </div>
  );
};

export default ProfileEdit;