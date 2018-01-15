import React, { Component } from 'react'

class CreateLink extends Component {
	state = {
		description: '',
		url: ''
	}

	render() {
		return (
			<div>
				<div className='flex flex-column mt3'>
					<input 
						className='mb2'
						value={this.state.description}
						onChange={(e) => this.setState({ description: e.target.value })}
						type='text'
						placeholder='A description for the link'
					/>

					<input 
						className='mb2'
						value={this.state.url}
						onChange={(e) => this.setState({ url: e.target.value })}
						type='text'
						placeholder='The url for the link text'
					/>
				</div>

				<button onClick={() => this._createLink}>
					Submit
				</button>
			</div>
		)
	}

	_createLink = async () => {
		const { description, url } = this.state
		await this.props.postMutation({
			variables: {
				description,
				url
			}
		})
	}
}

export default CreateLink