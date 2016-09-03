import React from 'react';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AutoComplete';

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {

    }
    render() {
        return (
        	<form onSubmit={this.handleFormSubmit}>
        		<PlacesAutocomplete
          		value={this.state.address}
          		onChange={this.onChange}
        		/>
        		<button type="submit">Submit</button>
      		</form>
        );
    }
}

export default AutoComplete;
