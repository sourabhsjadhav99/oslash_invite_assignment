import { useNavigate } from 'react-router-dom'
import Share from '../Share'
import React, { useEffect, useState } from 'react'
import {  AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegUserCircle } from 'react-icons/fa';
import { Switch } from 'antd';
import "../Style.css"
const InvitePage = () => {
    let [toggle, setToggle] = useState(false)
    let [data, setData] = useState([])
    let navigate = useNavigate()
    let handleClick = () => {
        navigate(`/search`)
    }
    let toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    const fetchData = () => {
        fetch("/share")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='main-container'>
            <Share />
            <div className='sub-container'>
                <form action="#">
                    <div className='card'>
                        <div className='logo-data'>
                            <img className='share-icon' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAD8DASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABgcDBAUCAAH/xAA3EAACAQMBBQYDBQkBAAAAAAABAgMABAURBhIhQVEHEzFxgZEiYaEUIzJSwUJDYoKSorGywvD/xAAXAQEBAQEAAAAAAAAAAAAAAAACAQMA/8QAGREBAQEBAQEAAAAAAAAAAAAAAQARAiEx/9oADAMBAAIRAxEAPwB41FdXMFpA89zKkUSDVnc6AV8vLqGytZbm5cJDEpZmPIUn9pNoLnO3ZeQmO2Q/dQa8FHU9TVDaLkV5btDjjZo8Ta97p++n1C+ijifUih+bbbPysSt2kQ6JCun1BrAmhlt5TFPG8Ug0JR1II14jga4rQ5I6xJb7c56FgXuIph+WSIf86US4btAtLlliykJtXPDvVO8h8+Y+vnS2r1c8l2s+45EljWSJ1dGGqsp1BHUGuqUmyO082EuFguGZ8e5+NPHu/wCJf1HPzpsxusiK8bBkYAqwOoIPOs0yQ7AHadlWMkGKibRQO+m05n9kfQn2qv2d4FLyZspdpvRQtuwqfBn5t6f58qwtr5zcbTZB2P4ZdweSgD9Kn2a2nvMLNFE8hksN744Tx3QTxK9Dz+dPPPI77NS+xdhkCDe2cE7AaBpIwSB8jSw24wcGFyUX2PUW9whZUJ13CDxGvTiKbQII1HEGg3tIxFxfWdveWsbSNa7wkRRqd06cQPlp9aPL7JJaUVbDbNQ5p5bq+1NrC24I1OneNproSOQBHvQqgMjqkYLux0VVGpJ6AU39isVLicEkVyN2eVzK6flJ0AHsBT6cIhAu3OATDZBJbVd2zuNSi/kYeK+XMevSibs1yrXWOlx8zavakGPXmh5eh19xV7tBtVuNmZ3I+KB0lU9OOh+hNBnZ1OYtpUQHhNC6H0G9/wA0fvNfjZ21cRh2kyKMOJnLf1cf1rJI1GlGvabjWhyEORRfu517tz0dfD3H+tBdI+UZx7LZu2zGNhKSKLmNAs0WvxKRw106HrW1SCBIIYEgjwI5UR7JbR3uPydvBLPJLZzOEeN2Lbup0DDXw0NF5qdTWW3hWUyrDGJD4uFGp9aqZnL2eGtftF9IVUnRVUas56AVfpZdp8rtnLaIse7S2DKvQlm1P9o9qIa1fKbP7cW+UxNzYw2U0ZmAAd2HDiD4DyrN7PIjJtRCwHCON3Plpp+tDdMPswxrR29zk5F0737qLXmo/EffQfy03AiesXZfHQZXHzWVyPgkHBh4qeRHzBpN5jFXWHvntLxNGHFHA+GReo/9wp4VSy2Ks8vam3voRIvireDIeoPKjz1kk2R9T2B0v7Unw75P9hRTltgMhbsz42RLuLkrEI49+B9x5UPTYPLQNuy4y8HlCzD3A0rTRjk37vNYyyUtc39umnLvAT7DiaV22eXts1mRc2W/3SQrEGddN4gsdQOnHnVO2wGXuGCw4u6482iKD3Ogolw3Z9cyusmXmWGPnFEd5z5nwHprRAK+sPbOYK4zt8IYgUgQ6zTacEHQfM8hTjtbaK0tora3QJFEoVFHICuLCytsfbJbWcKxQr4Kv+T1PzqxQXahl//Z" alt="" />
                            <div>
                                <div className='main-line'>Share to web</div>
                                <div className='sub-line'>Publish and share link with anyone</div>
                            </div>
                        </div>
                        <Switch onClick={toggler} />
                    </div>
                    {toggle ? (<div className='toggle-content'>
                        <div className='copylink'><pre>http://localhost:3000/</pre><span>copy link</span></div>
                        <div><span>Allow editing</span><Switch /></div>
                        <div><span>Allow comments</span><Switch /></div>
                        <div><span>Allow duplicates as template</span><Switch /></div>
                        <div><span>Search enginee indexing</span><Switch /></div>
                    </div>) : ""}
                    <div className='input-main-box'>
                        <input type="text" className='input-box' placeholder="People, emails or groups" onClick={handleClick} />
                        <button className='invite-btn' onClick={handleClick}>Invite</button>
                    </div>
                </form>
            </div>
            <div className='shared-users'>
                {data.map((data, index) => {
                    return <div className='single-user' key={index}>
                        <div className='logo-data'>
                            <div className='logo'><FaRegUserCircle /></div>
                            <div>
                                <div className='main-line'>{data.name}</div>
                                <div className='sub-line'>{data.email}</div>
                            </div>
                        </div>
                        <div >
                            <select className='dropdown'>
                                <option value={data.dropdown}>{data.dropdown}</option>
                                {data.dropdown !== "Full access" && <option value="Full access">Full Access</option>}
                                {data.dropdown !== "Can edit" && <option value="Can edit">Can Edit</option>}
                                {data.dropdown !== "Can view" && <option value="Can view">Can View</option>}
                                {data.dropdown !== "No access" && <option value="No access" style={{ color: "red" }}>No Access</option>
                                }
                            </select>
                        </div>
                    </div>
                })}
            </div>
            <div className='learn-more'>
                <div><span className='question-icon'><AiOutlineQuestionCircle /></span><span>Learn about sharing</span></div>
                <div><span className='question-icon'><AiOutlineQuestionCircle /></span><span className='link'>Copy Link</span></div>

            </div>

        </div>
    )
}

export default InvitePage
