function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const ops = ['/', '*', '-', '+'];

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      lastPressed: undefined,
      calc: '0',
      operation: undefined });_defineProperty(this, "handleClick",


    e => {
      const { calc, lastPressed } = this.state;
      const { innerText } = e.target;

      switch (innerText) {
        case 'AC':{
            this.setState({
              calc: '0' });

            break;
          }

        case '=':{
            const evaluated = eval(calc);
            this.setState({
              calc: evaluated });

            break;
          }
        case '←':{
            this.setState({
              calc: calc.slice(0, -1) });

            break;
          }

        case '.':{
            const splitted = calc.split(/[\+\-\*\/]/);
            const last = splitted.slice(-1)[0];
            if (!last.includes('.')) {
              this.setState({
                calc: calc + '.' });

            }

            break;
          }

        default:{
            let e = undefined;
            // check for other op
            if (ops.includes(innerText)) {
              if (ops.includes(lastPressed) && innerText !== '-') {
                // oh boii...
                const lastNumberIdx = calc.split('').reverse().
                findIndex(char => char !== ' ' && nums.includes(+char));
                e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
              } else {
                e = `${calc} ${innerText} `;
              }
            } else {
              e = calc === '0' ? innerText : calc + innerText;
            }
            this.setState({
              calc: e });

          }}

      this.setState({
        lastPressed: innerText });


    });}

  render() {
    const { currentNumber, calc } = this.state;
    return (
      React.createElement("div", { className: "calculator-grid" },
      React.createElement("div", { id: "display" },
      this.state.calc),

      React.createElement("button", { onClick: this.handleClick, className: "span-two btn-danger btn", id: "clear" }, "AC"),
      React.createElement("button", { onClick: this.handleClick, id: "delete" }, "\u2190"),
      React.createElement("button", { onClick: this.handleClick, id: "divide" }, "/"),
      React.createElement("button", { onClick: this.handleClick, id: "one" }, "1"),
      React.createElement("button", { onClick: this.handleClick, id: "two" }, "2"),
      React.createElement("button", { onClick: this.handleClick, id: "three" }, "3"),
      React.createElement("button", { onClick: this.handleClick, id: "multiply" }, "*"),
      React.createElement("button", { onClick: this.handleClick, id: "four" }, "4"),
      React.createElement("button", { onClick: this.handleClick, id: "five" }, "5"),
      React.createElement("button", { onClick: this.handleClick, id: "six" }, "6"),
      React.createElement("button", { onClick: this.handleClick, id: "subtract" }, "-"),
      React.createElement("button", { onClick: this.handleClick, id: "seven" }, "7"),
      React.createElement("button", { onClick: this.handleClick, id: "eight" }, "8"),
      React.createElement("button", { onClick: this.handleClick, id: "nine" }, "9"),
      React.createElement("button", { onClick: this.handleClick, id: "add" }, "+"),
      React.createElement("button", { onClick: this.handleClick, id: "decimal" }, "."),
      React.createElement("button", { onClick: this.handleClick, id: "zero" }, "0"),
      React.createElement("button", { onClick: this.handleClick, className: "span-two btn-primary btn", id: "equals" }, "="),
      React.createElement("div", { className: "text-center justify-center" }, "By GuJa")));



  }}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));