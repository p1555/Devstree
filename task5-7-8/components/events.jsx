function EventDemo() {
  function handleClick(event) {
    console.log("Synthetic Event Type:", event.type); // click
    console.log("Target Element:", event.target);     // <button>
    console.log("Native Event:", event.nativeEvent);  // actual browser event
  }

  function handleChange(event) {
    console.log("Input Value:", event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // stop form reload
    console.log("Form Submitted!", event.type);
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      <br /><br />

      <input 
        type="text" 
        placeholder="Type something..." 
        onChange={handleChange} 
      />

      <br /><br />

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default EventDemo;
