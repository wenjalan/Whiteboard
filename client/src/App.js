import React from "react";

function App() {
    // return <LandingPage />;
    return <RoomPage />;
}

function RoomPage() {
    return (
        <div style={styles.container}>
            <IdeaTimeline/>
            <ControlsBar/>
        </div>
    );
}

function ControlsBar() {
    return (
        <div style={styles.controls}>
            <div style={styles.roomInfo}>#XXXX・0:00</div>
            <div style={styles.divider}/>
            <input type={"text"} placeholder="Idea goes here" style={styles.ideaInput}/>
            <button style={styles.controlButton}>Send</button>
            <div style={styles.divider}/>
            <button style={styles.controlButton}>Save</button>
        </div>
    );
}

function IdeaTimeline(props) {

    // todo: replace these with real ideas
    ideas = [
        "hello longer",
        "world",
        "my",
        "name",
        "is",
        "james",
        "hello longer",
        "world",
        "my",
        "name",
        "is",
        "james",
        "hello longer",
        "world",
        "my",
        "name",
        "is",
        "james",
        "hello longer",
        "world",
        "my",
        "name",
        "is",
        "james wendell is the online persona created by alan wen, for the purpose of preserving some anominity",
    ];

    return (
        <div style={styles.ideaTimeline}>
            {ideas.map(idea => (
                <Idea idea={idea}/>
            ))}
        </div>
    );
}

function Idea(props) {
    return (
        <div style={styles.ideaContainer}>
            <div style={styles.ideaNumber}>#0</div>
            <div style={styles.divider}/>
            <div style={styles.ideaText}>{props.idea}</div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        // backgroundColor: "red",
    },

    ideaTimeline: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 56,
        marginLeft: 8,
    },

    ideaContainer: {
        height: 50,
        width: "fit-content",
        marginBottom: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "orange",
        borderRadius: 5,
        border: "1px solid #808080",
    },

    ideaNumber: {
        width: 50,
        textAlign: "center",
        fontFamily: "Roboto",
        color: "#808080",
    },

    ideaText: {
        paddingLeft: 16,
        paddingRight: 16,
        fontFamily: "Roboto",
    },

    controls: {
        position: "fixed",
        bottom: 0,
        left: 0,
        marginLeft: 16,
        marginBottom: 16,
        height: 50,
        width: "90%",
        backgroundColor: "#FFFFFF",
        border: "1px solid #808080",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 5,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        fontFamily: "Roboto",
        fontSize: 14,
        textAlign: "center",
    },

    roomInfo: {
        flex: 1,
        // backgroundColor: "pink",
    },

    ideaInput: {
        flex: 5,
        marginLeft: 16,
        marginRight: 16,
        fontFamily: "Roboto",
        fontSize: 14,
        border: "0px solid #808080",
        borderRadius: 5,
        height: 30,
        padding: 0,
        // backgroundColor: "cyan",
    },

    controlButton: {
        width: 45,
        height: 45,
        margin: 2.5,
        border: "none",
        textAlign: "center",
        backgroundColor: "transparent",
    },

    divider: {
        width: 1,
        height: 40,
        align: "center",
        backgroundColor: "#808080",
    },

}

function LandingPage() {
    return (
        <div style={landingPageStyles.container}>
            <div style={landingPageStyles.spacer}/>
            <div style={landingPageStyles.controls}>
                <div style={landingPageStyles.spacer}/>
                <div style={landingPageStyles.title}>
                    whiteboard
                </div>
                <input type={"text"} placeholder="Name" style={landingPageStyles.field}/>
                <input type={"text"} placeholder="Room ID" style={landingPageStyles.field}/>
                <input type={"button"} value="Enter" style={landingPageStyles.button}/>
                <a href="#" style={landingPageStyles.newRoomText}>Create New Room</a>
            </div>
            <div style={landingPageStyles.spacer}/>
        </div>
    );
}

const landingPageStyles = {
    container: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "red",
        fontFamily: "Roboto",
    },

    controls: {
        flex: 4,
        display: "flex",
        flexDirection: "column",
        paddingTop: 16,
    },

    spacer: {
        flex: 4,
    },

    title: {
        flex: 1,
        textAlign: "center",
        fontStyle: "bold",
        fontSize: 72,
        letterSpacing: 0.15,
    },

    body: {
        flex: 2,
        textAlign: "center",
    },

    field: {
        marginTop: 16,
        height: 50,
        paddingLeft: 16,
        border: "1px solid #808080",
        borderRadius: 5,

        fontSize: 14,
        fontFamily: "Roboto",

        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    },

    button: {
        marginTop: 16,
        height: 50,
        fontSize: 14,
        fontFamily: "Roboto",
        border: "1px solid #808080",
        borderRadius: 5,
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },

    newRoomText: {
        marginTop: 16,
        textAlign: "center",
        textDecoration: "none",
        color: "black",
        fontSize: 14,
    },
};

export default App;
