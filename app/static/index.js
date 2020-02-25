class ChatWindow extends React.Component {
  constructor(props)
  {
    let socket = io();

    socket.on('serverSend', (msg) => {
      console.log(msg);
      this.handleReceive(msg);
    });

    socket.on('connect', () => {
      socket.emit('join', this.state.room);
    })

    super(props);
    this.state = {
      messages: [],
      socket: socket,
      room: 1
    };
  }

  handleReceive(msg)
  {
    var newMsg = <ReceivedMessage message={msg} />;
    var msgs = this.state.messages.concat([newMsg]);
    this.setState({messages: msgs, socket: this.state.socket, room: this.state.room});
  }

  handleSend(msg)
  {
    var newMsg = <SentMessage message={msg} />;
    var msgs = this.state.messages.concat([newMsg]);
    this.setState({messages: msgs, socket: this.state.socket, room: this.state.room});
    this.state.socket.emit('clientSend', {message: msg, room: this.state.room});
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
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => this.handleSend(document.getElementById('msg').value)}
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

class Chat extends React.Component
{
  render()
  {
    return <div className="chats">
            <ul className="p-0">
              {this.props.messages}
            </ul>
          </div>
  }
}

function SentMessage(props)
{
  return <li className="bg-primary send-msg text-white rounded">{props.message}</li>
}

function ReceivedMessage(props)
{
  return <li className="received-msg rounded">{props.message}</li>
}

ReactDOM.render(<ChatWindow />, document.getElementById("root"));
