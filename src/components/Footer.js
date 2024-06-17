import React, { Component } from "react";

class Footer extends Component {
    handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    render() {
        return (
            <div className="footer">
                <p>
                    <a href="#" className="btn" onClick={this.handleClick}>Go-to-Top</a>
                </p>
                {/* <br /> */}
                <p>&copy; Copyright 2024 HTML.am</p>
            </div>
        );
    }
}

export default Footer;
