import '../stylesheets/CalculatorButton.css';

function CalculatorButton(props) {

  const isOperator = (value) => {
    // Return true if none of this criteria is true:
    return isNaN(value) && (value !== '.') && (value !== '='); 
  };

  return (
    <div
      className={`button-operation ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}

export default CalculatorButton;
