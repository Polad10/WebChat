const ref = React.createRef();

class ChatWindow extends React.Component {
  constructor(props) {
    let socket = io();
    socket.on("message", msg => {
      this.handleReceive(msg);
    });

    super(props);
    this.state = {
      messages: [],
      socket: socket
    };
  }

  handleReceive(msg) {
    var newMsg = <ReceivedMessage key={msg.substring(1, 10)} message={msg} />;
    var msgs = this.state.messages.concat([newMsg]);
    this.setState({ messages: msgs, socket: this.state.socket });
  }

  clearInputField() {
    console.log("clearing input field");
    ReactDOM.findDOMNode(this.refs.textbox).value = "";
  }

  handleSend(msg) {
    var newMsg = <SentMessage key={msg.substring(0, 10)} message={msg} />;
    var msgs = this.state.messages.concat([newMsg]);
    this.setState({ messages: msgs, socket: this.state.socket });
    this.clearInputField();
    this.state.socket.send(msg);
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleSend(document.getElementById("msg").value);
    }
  };
  componentDidUpdate() {
    ref.current.scrollIntoView({
      behavior: "smooth"
    });
  }
  render() {
    return (
      <React.Fragment>
        <Chat messages={this.state.messages} />
        <div className="submit-text sticky-bottom">
          <div className="input-group mb-3">
            <input
              id="msg"
              type="text"
              ref="textbox"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onKeyPress={this.handleKeyPress}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() =>
                  this.handleSend(document.getElementById("msg").value)
                }
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class Chat extends React.Component {
  render() {
    return (
      <div className="chats">
        <ul key="ul" className="p-0">
          {this.props.messages}
        </ul>
      </div>
    );
  }
}

function SentMessage(props) {
  return (
    <li ref={ref} className="bg-primary send-msg text-white rounded">
      {props.message}
    </li>
  );
}

function ReceivedMessage(props) {
  return (
    <li ref={ref} className="received-msg rounded">
      {props.message}
    </li>
  );
}

ReactDOM.render(<ChatWindow />, document.getElementById("root"));
