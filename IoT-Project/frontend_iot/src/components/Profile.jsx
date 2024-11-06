import React from 'react';
import Sidebar from './SideBar';
import '../css/Profile.css';
import { FaBars } from 'react-icons/fa';
import { useSidebar } from '../contexts/SidebarContext';
const Profile = () => {
  document.title = 'Profile';
    const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <div id="main">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
        {isSidebarOpen && <Sidebar className={`sidebar ${isSidebarOpen ? '' : 'closed'}`} />}
        <div className="profile-container">
            <div className="profile-header">
                <img src='/img/avt2.jpg' alt="Avatar" className="profile-avatar" />
                <h1>Lưu Minh Hiếu</h1>
                <p className="profile-id">Mã sinh viên: B21DCCN358</p>
                <p className="profile-class">Lớp: D21CQCN10-B</p>
                <p className="profile-links">
                    <a href="https://example.com/report" target="_blank" rel="noopener noreferrer">Báo cáo</a> | 
                    <a href="https://github.com/HieuLuu203/IoT-Project" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="http://localhost:8000/api-docs/" target="_blank" rel="noopener noreferrer">Api Docs</a>
                </p>
            </div>
            <div className="profile-details">
                <section className="profile-section">
                    <h2>Giới thiệu bản thân</h2>
                    <p>Tôi là một sinh viên công nghệ thông tin đam mê lập trình và học hỏi các công nghệ mới. Tôi thích làm việc với các dự án phần mềm và có kinh nghiệm trong phát triển game</p>
                </section>
                <section className="profile-section">
                    <h2>Kỹ năng</h2>
                    <ul>
                    <li>Unity & C#</li>
                    <li>Unreal Engine & C++</li>
                    <li>Godot & GDScript</li>
                        <li>Git & GitHub</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
  );
};

export default Profile;
