import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegUserCircle } from 'react-icons/fa';
import "./SearchPage.css"


const SearchPage = () => {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterValue, setFiltervalue] = useState("");
  const [dropdown, setDropdown] = useState([]);
  let navigate = useNavigate()
  const fetchPeopleData = () => {
    fetch(`/data`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setSearchApiData(data);
      });
  };
  useEffect(() => {
    fetchPeopleData();
  }, []);

  function postData(name, email, group, members) {
    fetch("/share", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: `${email}@${parseInt(Math.random() * 1000)}.com`,
        group: group,
        members: members,
        dropdown: dropdown
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
  }

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase()) || item.group.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterResult);
    }
    setFiltervalue(e.target.value);
  };

  let handleDropdown = (e) => {
    setDropdown(e.target.value)

  }
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(filterValue, dropdown)
    if (filterValue !== "" && dropdown.length !== 0) {
      postData(filterValue, filterValue, filterValue, filterValue)
      navigate(`/invite`)
    } else {
      alert("All fields necessarry")
    }
  }

  return (
    <div className='search-main-container'>
      <div>
        <form className='search-container' onSubmit={handleSubmit}>
          <input
            className='serch-bar'
            placeholder="Search people or groups "
            value={filterValue}
            onInput={(e) => {
              handleFilter(e);
            }}
          />
          <select onChange={handleDropdown} >
            <option defaultValue="" >Full Access</option>
            <option value="Full access">Full Access</option>
            <option value="Can edit">Can Edit</option>
            <option value="Can view">Can View</option>
            <option value="No access" style={{ color: "red" }}>No Access</option>
          </select>
          <button className='invite-btn' onClick={() => { navigate(`/invite`) }} >  Back</button>
          <button className='invite-btn' type='submit'>Invite</button>
        </form>
      </div>
      <div>
        <div className="search-results">
          <div>
            <div className='title'>Select a person</div>
            {data.map((data, index) => {
              return (
                <div key={index} className="result" onClick={(e) => { setFiltervalue(data.name) }}><span><FaRegUserCircle /></span> <span>{data.name}</span> </div>
              );
            })}
          </div>
          <div>
            <div className='title'>Select a group</div>
            {data.map((data, index) => {
              return (
                <div key={index} className="result" onClick={(e) => { setFiltervalue(data.group) }}><span className='first-letter'>{data.group[0]}</span> <span>{data.group}</span></div>
              );
            })}
          </div>
          {/* <div>
            <div className='title'>Select a Email</div>
            {data.map((data, index) => {
              return (
                <div key={index} className="result" onClick={(e) => { setFiltervalue(data.email) }}>{data.email}</div>
              );
            })}
          </div> */}

        </div>
      </div>
      <div className='learn-more-bar'><span className='question-icon'><AiOutlineQuestionCircle /></span><span>Learn about sharing</span></div>
    </div>

  )
}

export default SearchPage
