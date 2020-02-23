class ChatWindow extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="chats">
          <ul className="p-0">
            <li className="bg-primary send-msg text-white rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
            <li className="received-msg rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
            <li className="bg-primary send-msg text-white rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
            <li className="received-msg rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
            <li className="bg-primary send-msg text-white rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
            <li className="received-msg rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
            <li className="bg-primary send-msg text-white rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
            <li className="received-msg rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
            <li className="bg-primary send-msg text-white rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
            <li className="received-msg rounded">
              HisdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddSsaaaaaaaaaaaaaaaaaaaa
            </li>
          </ul>
        </div>

        <div className="submit-text sticky-bottom">
          <div className="input-group mb-3">
            <input
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

ReactDOM.render(<ChatWindow />, document.getElementById("root"));
