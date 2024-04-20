import React from "react";
import "./services.css";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import FlutterDashOutlinedIcon from "@mui/icons-material/FlutterDashOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import FormatColorFillOutlinedIcon from "@mui/icons-material/FormatColorFillOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const Services = () => {
  return (
    <>
      <section className="services_container" id="services">
        <div className="top_services_text">
          <h1>Services</h1>
          <h2>What I Do?</h2>
        </div>
        <div className="center_services_container">
          <div className="grid_container">
            <div className="grid_items">
              <div>
                <div>
                  <SpaceDashboardOutlinedIcon
                    className="grid_icon"
                    sx={{ fontSize: "100px", color: "lightcoral" }}
                  />
                </div>
                <h1>UI/UX Design</h1>
                <p className="ptext">
                  "Programming is the art of instructing machines with precision
                  and clarity, turning logic into lines of code that shape the
                  digital world."
                </p>
              </div>
            </div>
            <div className="grid_items">
              <div>
                <div>
                  <TerminalOutlinedIcon
                    className="grid_icon"
                    sx={{ fontSize: "100px", color: "lightcoral" }}
                  />
                </div>
                <h1>Web Development</h1>
                <p className="ptext">
                  "Programming is the art of instructing machines with precision
                  and clarity, turning logic into lines of code that shape the
                  digital world."
                </p>
              </div>
            </div>
            <div className="grid_items">
              <div>
                <div>
                  <FlutterDashOutlinedIcon
                    className="grid_icon"
                    sx={{ fontSize: "100px", color: "lightcoral" }}
                  />
                </div>
                <h1>Graphic Design</h1>
                <p className="ptext">
                  "Programming is the art of instructing machines with precision
                  and clarity, turning logic into lines of code that shape the
                  digital world."
                </p>
              </div>
            </div>
            <div className="grid_items">
              <div>
                <div>
                  <TaskOutlinedIcon
                    className="grid_icon"
                    sx={{ fontSize: "100px", color: "lightcoral" }}
                  />
                </div>
                <h1>Branding</h1>
                <p className="ptext">
                  "Programming is the art of instructing machines with precision
                  and clarity, turning logic into lines of code that shape the
                  digital world."
                </p>
              </div>
            </div>
            <div className="grid_items">
              <div>
                <div>
                  <AddBusinessOutlinedIcon
                    className="grid_icon"
                    sx={{ fontSize: "100px", color: "lightcoral" }}
                  />
                </div>
                <h1>Marketing</h1>
                <p className="ptext">
                  "Programming is the art of instructing machines with precision
                  and clarity, turning logic into lines of code that shape the
                  digital world."
                </p>
              </div>
            </div>
            <div className="grid_items">
              <div>
                <div>
                  <AppShortcutOutlinedIcon
                    className="grid_icon"
                    sx={{ fontSize: "100px", color: "lightcoral" }}
                  />
                </div>
                <h1>Mobile App Design</h1>
                <p className="ptext">
                  "Programming is the art of instructing machines with precision
                  and clarity, turning logic into lines of code that shape the
                  digital world."
                </p>
              </div>
            </div>
            <div className="grid_items">
              <div>
                <div>
                  <FormatColorFillOutlinedIcon
                    className="grid_icon"
                    sx={{ fontSize: "100px", color: "lightcoral" }}
                  />
                </div>
                <h1>Visual Editor</h1>
                <p className="ptext">
                  "Programming is the art of instructing machines with precision
                  and clarity, turning logic into lines of code that shape the
                  digital world."
                </p>
              </div>
            </div>
            <div className="grid_items">
              <div>
                <div>
                  <MedicalInformationOutlinedIcon
                    className="grid_icon"
                    sx={{ fontSize: "100px", color: "lightcoral" }}
                  />
                </div>
                <h1>IT Consultancy</h1>
                <p className="ptext">
                  "Programming is the art of instructing machines with precision
                  and clarity, turning logic into lines of code that shape the
                  digital world."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_services_container">
          <div className="bottom_div1">
            <p>PRICING</p>
            <h1>Choose Your Pricing Plan</h1>
          </div>
          <div className="grid_bottom_container">
            <div className="grid_bottom-items">
              <div className="sprice">
                <p>₹</p>
                <p>49</p>
              </div>
              <div>
                <h3>Personal</h3>
              </div>
              <div className="sdetails" >
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Strategic Alliance</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Growth Expansion</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Business Planning</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Contact Negotiation</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Market Positioning</p>
              </div>
              <div className="btn_cont">
                <button>Get Started</button>
              </div>
            </div>
            <div className="grid_bottom-items">
              <div className="sprice">
                <p>₹</p>
                <p>79</p>
              </div>
              <div>
                <h3>Professional</h3>
              </div>
                 <div className="sdetails" >
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Strategic Alliance</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Growth Expansion</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Business Planning</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Contact Negotiation</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Market Positioning</p>
              </div>
              <div className="btn_cont">
                <button>Get Started</button>
              </div>
            </div>
            <div className="grid_bottom-items">
              <div className="sprice">
                <p>₹</p>
                <p>109</p>
              </div>
              <div>
                <h3>Medium Business
</h3>
              </div>
                 <div className="sdetails" >
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Strategic Alliance</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Growth Expansion</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Business Planning</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Contact Negotiation</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Market Positioning</p>
              </div>
              <div className="btn_cont">
                <button>Get Started</button>
              </div>
            </div>
            <div className="grid_bottom-items">
              <div className="sprice">
                <p>₹</p>
                <p>149</p>
              </div>
              <div>
                <h3>Gigantic Business
</h3>
              </div>
                 <div className="sdetails" >
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Strategic Alliance</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Growth Expansion</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Business Planning</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Contact Negotiation</p>
                <p> <CheckRoundedIcon sx={{ fontSize:"22px" ,color:"lightcoral"}}/> Market Positioning</p>
              </div>
              <div className="btn_cont">
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
