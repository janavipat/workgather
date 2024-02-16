import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import Select from "react-select";
import  MyContext,{MyProvider}  from "../context";
import Cookies from "universal-cookie";
import './banner.css'

const allowedInputs = [
  "Salon",
  "Cook",
  "Home Clean",
  "Ac Repair",
  "Beauty",
  "House Shift",
  "Vehicle & Care",
  "Plumbing",
  "Electrician",
  "Interior",
];

function Banner1(props) {
 
  const { serviceType, updateVariable } = useContext(MyContext);

  const cookies = new Cookies();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "select",
  });
  const [error, setError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const handleService = (input) => {
    
    updateVariable({"location":"","category":input,"pricerange":"","rating":""});
  }

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  function handleSelectChange(event) {
    console.log(event);
    setSelectedOption(event);
    updateVariable({
      location: event.value,
      category: inputValue,
      pricerange: "",
      rating: "",
    });
  }
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSuggestions(getMatchingSuggestions(value));
  };
  useEffect(() => {
    for (var i = 0; i <= 10; i++) {
      var s = allowedInputs[i];
      if (s && inputValue.toLowerCase() == s.toLowerCase() || inputValue == "") {
        setError(false);

        updateVariable({
          location: selectedOption.value,
          category: s,
          pricerange: "",
          rating: "",
        });
        break;
      } else {
        setError(true);
      }
    }
  }, [inputValue]);
  cookies.set("mycookie", selectedOption);
  cookies.set("mycookie2", inputValue);
  const options = [
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "vadodara", label: "Vadodara" },
    { value: "Rajkot", label: "Rajkot" },
    { value: "Surat", label: "Surat" },
    { value: "Anand", label: "Anand" },
    { value: "Jamnagar", label: "Jamnagar" },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    updateVariable({
      location: selectedOption.value,
      category: suggestion,
      pricerange: "",
      rating: "",
    });
    setSuggestions([]);
  };
  const getMatchingSuggestions = (value) => {
    return allowedInputs.filter((input) =>
      input.toLowerCase().includes(value.toLowerCase())
    );
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      minWidth: "180px",
      marginTop: "-5px",
      paddingLeft: 25,
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#5bb543",
      minHeight: 55,
      outline: "none",
      borderRadius: 10,
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#fff",
      fontWeight: "400",
      fontSize: 20,
    }),
    container: (provided) => ({
      ...provided,
      width: 180,
      // paddingLeft: 55,
      // marginTop: -12,
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 20,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: 20,
      color: "white",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#fff",
    }),
  };
  return (
    <section className="hero-area" style={{height:"700"}}>
      <div className="container-fluid">
        <div className="hero-wrapper">
          <div
            className="hero-content wow animate fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <br/> 
            <br/> 
            <span>Welcome to WorkDeal</span>
            <h1>Your trusted destination<br/> for all household service<br/>  needs!</h1>
            <p>
              We understand the importance of finding reliable workers who can<br/> 
              provide exceptional service for your household tasks.Take the
              first step<br/>  towards enhancing your home with the help of trusted
              experts.
            </p>
            {error && showTooltip && (
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  color: "#5bb543",
                  marginLeft: "460px",

                  borderRadius: "5px",
                  padding: "5px",
                  width: "172px",
                  transform: "translateX(-50%)",
                }}
              >
                select from below list.
              </div>
            )}
            <div className="find-service">
              <div className="location-search" style={{ marginTop: "35px" }}>
                <div className="location-btn">
                 
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,

                      padding: 0,
                      colors: {
                        ...theme.colors,

                        primary: "#444",
                      },
                    })}
                    styles={customStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    width="250px"
                    menuColor="#333"
                    defaultValue={selectedOption}
                    
                    onChange={handleSelectChange}
                    placeholder="Select"
                    instanceId="my-unique-id"
                  ><options value="surat">surat</options></Select>
                   
                </div>

                <div className="location-form" style={{width:"60"}}>
                  <form method="post" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="location"
                      value={inputValue}
                      autoComplete="off"
                      onChange={handleInputChange}
                      placeholder="Find Your Services Here"
                      style={{
                        width: "350",
                        padding: "10px",
                        fontSize: "16px",
                        marginLeft: "300",
                         marginTop: "-75",
                         paddingTop:"15",
                         paddingBottom:"15",
                        border: "1px solid #ccc",
                        boxShadow: error
                          ? "0px 1px 10px 0px rgb(255 0 0 / 50%)"
                          : "none",
                        borderRadius: "10px",
                        transition: "box-shadow 1s",
                        
                      }}
                    />
                    <button
                    style={{
                      backgroundColor: error ? "red" : "#5bb543",
                     marginLeft:"595",
                     width:"50",
                     height:"50",
                     marginTop:"-60",
                     borderEndStartRadius:"10px",
                     borderBottomLeftRadius:"10px",}}
                    onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      type="submit"
                    ><Link legacyBehavior href={error ? "/" : "/service "}><img src={"assets/images/search-svgrepo-com.svg"}
                    
                    style={{
                      width: "30",
                      marginLeft:"9",
                    }}/>
                    </Link></button>
                   
                    {suggestions.length > 0 && (
                      <ul
                        className="suggestions"
                        style={{
                          listStyleType: "none",
                          padding: "0",
                          margin: "4px 0",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          backgroundColor: "white",
                          position: "absolute",
                          maxHeight: "140px",
                          overflowY: "auto",
                        }}
                      >
                        {suggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            style={{
                              cursor: "pointer",
                              padding: "8px 220px 8px 8px",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#81d866";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "white";
                            }}
                          >
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    )}
                  </form>
                </div>
              </div>
              <div className="suggest">
                <span>Suggest For You:</span>
                <ul className="suggest-list">
                  <li onClick={() => handleService("Beauty")}>
                    <Link legacyBehavior href="/service">
                      <a >Spa &amp; Beauty</a>
                    </Link>
                  </li>
                  <li onClick={() => handleService( "House Shift")}>
                    <Link legacyBehavior href="/service">
                      <a>House Shift</a>
                    </Link>
                  </li>
                  <li onClick={() => handleService("Ac Repair")}>
                    <Link legacyBehavior href="/service">
                      <a>AC Repair</a>
                    </Link>
                  </li>
                  <li onClick={() => handleService("Salon")}>
                    <Link legacyBehavior href="/service">
                      <a>Salon </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="hero-banner wow animate fadeInRight"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <img
              src="assets/images/home-1/fp_wd_1.jpg"
              alt=""
              className="banner"
              style={{ borderRadius: "20px",
             
              width: "550",
              height: "440",
              marginLeft: "750",
              marginTop: "-450", }}
            />
          </div>
        </div>
      </div>
      <div className="scroll-down" >
     
      
        <a href="#category">
        <p>Scroll Down</p>
          <div className="scroll">
        
          </div>
         
          {/* <span>
            <i className="bi bi-arrow-right" />
          </span> */}
         
        </a>
        
      </div>
    </section>
  );
}

export default Banner1;
