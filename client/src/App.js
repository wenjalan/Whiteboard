import logo from './logo.svg';

function App() {
  return (
      <div style={styles.container}>
          <div style={styles.spacer}/>
          <div style={styles.controls}>
              <div style={styles.spacer}/>
              <div style={styles.title}>
                  whiteboard
              </div>
              <input type={"text"} placeholder="Name" style={styles.field}/>
              <input type={"text"} placeholder="Room ID" style={styles.field}/>
              <input type={"button"} value="Enter" style={styles.button}/>
              <a href="#" style={styles.newRoomText}>Create New Room</a>
          </div>
          <div style={styles.spacer}/>
      </div>
  );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "red",
        fontFamily: "Open Sans",
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
        fontFamily: "Open Sans",

        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    },

    button: {
        marginTop: 16,
        height: 50,
        fontSize: 14,
        fontFamily: "Open Sans",
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
