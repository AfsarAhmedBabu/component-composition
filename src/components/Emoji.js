import React from "react";

class Emoji extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                {this.props.emoji}
                {this.props.children}
                {this.props.emoji}
            </>
            
        );
    }

}

export default Emoji;