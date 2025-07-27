import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, Building, MapPin, Calendar, Edit3, Save, X, Camera } from 'lucide-react';

const Profile = () => {
  const { state, updateProfile, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    firstName: state.user?.firstName || '',
    lastName: state.user?.lastName || '',
    phone: state.user?.phone || '',
    company: state.user?.company || '',
    address: state.user?.address || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      await updateProfile(editData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleCancel = () => {
    setEditData({
      firstName: state.user?.firstName || '',
      lastName: state.user?.lastName || '',
      phone: state.user?.phone || '',
      company: state.user?.company || '',
      address: state.user?.address || '',
    });
    setIsEditing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!state.user) {
    return (
      <div className="min-h-screen bg-[#0B1222] pt-20 flex items-center justify-center">
        <div className="text-white text-xl">Please sign in to view your profile.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1222] pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
              Profile
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Manage your account information and preferences
          </p>
        </div>

        <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 pb-8 border-b border-gray-700/50">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center">
                {state.user.avatar ? (
                  <img 
                    src={state.user.avatar} 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-[#0B1222]" />
                )}
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#00E3FF] rounded-full flex items-center justify-center hover:bg-[#00E3FF]/80 transition-colors">
                <Camera className="w-4 h-4 text-[#0B1222]" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold text-white">
                  {state.user.firstName} {state.user.lastName}
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  state.user.userType === 'buyer' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {state.user.userType.charAt(0).toUpperCase() + state.user.userType.slice(1)}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{state.user.email}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Joined {formatDate(state.user.joinedDate)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#00E3FF] text-[#0B1222] rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </>
              )}
              <button
                onClick={logout}
                className="px-4 py-2 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500/10 transition-all"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={editData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00E3FF] transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-white">{state.user.firstName}</span>
                  </div>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={editData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00E3FF] transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-white">{state.user.lastName}</span>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-white">{state.user.email}</span>
                  <span className="text-xs text-gray-400 ml-auto">Cannot be changed</span>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={editData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00E3FF] transition-all"
                    placeholder="Enter phone number"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-white">{state.user.phone || 'Not provided'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Business Information</h3>
              
              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="company"
                    value={editData.company}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00E3FF] transition-all"
                    placeholder="Enter company name"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <Building className="w-5 h-5 text-gray-400" />
                    <span className="text-white">{state.user.company || 'Not provided'}</span>
                  </div>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Address
                </label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={editData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00E3FF] transition-all resize-none"
                    placeholder="Enter business address"
                  />
                ) : (
                  <div className="flex items-start gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span className="text-white">{state.user.address || 'Not provided'}</span>
                  </div>
                )}
              </div>

              {/* Account Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Account Type
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                  <div className={`w-5 h-5 rounded-full ${
                    state.user.userType === 'buyer' ? 'bg-blue-400' : 'bg-green-400'
                  }`}></div>
                  <span className="text-white capitalize">{state.user.userType}</span>
                  <span className="text-xs text-gray-400 ml-auto">Contact support to change</span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Stats */}
          <div className="mt-8 pt-8 border-t border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">Account Activity</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#00E3FF] mb-2">12</div>
                <div className="text-gray-400 text-sm">Orders Placed</div>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#2ED47A] mb-2">8</div>
                <div className="text-gray-400 text-sm">Suppliers Connected</div>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">$24.5K</div>
                <div className="text-gray-400 text-sm">Total Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
