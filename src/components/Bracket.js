import React from "react";

class Bracket extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                {this.props.start}
                {this.props.children}
                {this.props.end}

            </>
        );
    }
    
}

export default Bracket;