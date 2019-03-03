import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap'

const home = (props) => {
	return (
		<div>
			<Container>
				<Row>
					<Form xs={6}>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Where from:</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Where to:</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</Form.Row>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>

				</Row>
			</Container>
		</div>
	);
}

export default home;